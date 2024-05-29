import { BadRequestException, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class AutorService{
  constructor(@Inject('Neo4j') private readonly neo4j){}

  public async getAll(): Promise<any> {
    const session = this.neo4j.session();
    const query = `MATCH (n:Autor) RETURN n`;
    return session
        .run(query)
        .then((result) => {
        session.close();
        return result.records.map(record => record.toObject());
      })
        .catch((error) =>
        Promise.reject(new BadRequestException(error))
      )
  }

}