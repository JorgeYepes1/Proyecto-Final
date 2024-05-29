import { BadRequestException, Body, Inject, Injectable } from "@nestjs/common";

@Injectable()
export class HistoriaService{
  constructor(@Inject('Neo4j') private readonly neo4j){}

  public async getAll(): Promise<any> {
    const session = this.neo4j.session();
    const query = `MATCH (n:Historia)-[r]->(o:Genero) match (n:Historia)-[rr]->(g:Publico) RETURN n,o,g`;
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

  public async getHistoryByGenreAndTitle(title,genre): Promise<any> {
        const session = this.neo4j.session();
    const query = `match (n:Historia)-[:Tiene]->(o:Genero{NombreGenero:"`+genre+`"}) where n.Titulo contains "`+title+`" match (n:Historia)-[rr]->(g:Publico) return n,o,g`;
    return session
        .run(query)
        .then((result) => {
        session.close();
        return result.records.map(record => record.toObject());
      })
        .catch((error) =>
        Promise.reject(new BadRequestException(error))
    )
    return title+'a'+genre
    
  }

  public async getHistoryByGenre(genre): Promise<any> {
    const session = this.neo4j.session();
    const query = `match (n:Historia)-[r]->(o:Genero) where o.NombreGenero contains "`+genre+`" match (n:Historia)-[rr]->(g:Publico) return n,o,g`;
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

  public async getHistoryByTitle(title): Promise<any> {
    const session = this.neo4j.session();
    const query = `match (n:Historia)-[r]->(o:Genero) where n.Titulo contains "`+title+`" match (n:Historia)-[rr]->(g:Publico)  return n,o,g`
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

  
  public async getAutorOfHistory(id): Promise<any> {
    const session = this.neo4j.session();
    const query = `match (n:Historia)-[r]->(o:Autor) where id(n)=`+id+` return o`;
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

  public async getBooksOfHistory(id): Promise<any> {
    const session = this.neo4j.session();
    const query = `match (n:Historia)-[r]->(o:Libro) where id(n)=`+id+` return o`;
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
  public async getComicsOfHistory(id): Promise<any> {
    const session = this.neo4j.session();
    const query = `match (n:Historia)-[r]->(o:Comic) where id(n)=`+id+` return o`;
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
  public async getAudioBooksOfHistory(id): Promise<any> {
    const session = this.neo4j.session();
    const query = `match (n:Historia)-[r]->(o:AudioLibro) where id(n)=`+id+` return o`;
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

  public async tryBody(@Body() body): Promise<any> {
    const {titulo,genero}=body
    
    return titulo+'a'+genero
  }
  

}