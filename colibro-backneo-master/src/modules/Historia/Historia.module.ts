import { Module } from '@nestjs/common';
import { Neo4jProvider } from 'src/common/neo4j.provider';
import { HistoriaController } from './Historia.controller';
import { HistoriaService } from './Historia.service';

@Module({
  imports:[
    
  ],
  controllers: [HistoriaController],
  providers: [HistoriaService, Neo4jProvider]
})
export class HistoriaModule {}
