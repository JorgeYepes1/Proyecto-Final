import { Module } from '@nestjs/common';
import { Neo4jProvider } from 'src/common/neo4j.provider';
import { AutorController } from './Autor.controller';
import { AutorService } from './Autor.service';

@Module({
  imports:[
    
  ],
  controllers: [AutorController],
  providers: [AutorService, Neo4jProvider]
})
export class AutorModule {}
