import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jProvider } from './common/neo4j.provider';
import { AutorModule } from './modules/Autor/Autor.module';
import { HistoriaModule } from './modules/Historia/Historia.module';
import { HistoriaService } from './modules/Historia/Historia.service';

@Module({
  imports: [HistoriaModule,AutorModule],
  controllers: [AppController],
  providers: [AppService, Neo4jProvider],
})
export class AppModule {}
