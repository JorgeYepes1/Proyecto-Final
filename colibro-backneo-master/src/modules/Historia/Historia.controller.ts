import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { HistoriaService } from './Historia.service';
@Controller('Historia')
export class HistoriaController {

    constructor(private readonly HistoriaService: HistoriaService) { }
  
    @Get('/all')
  async getAll() {
    return await this.HistoriaService.getAll()
  }

  @Get('/byGenreAndTitle/:title/:genre')
  async getByGenreAndTitle(@Param('title') title,@Param('genre') genre){
    return await this.HistoriaService.getHistoryByGenreAndTitle(title,genre)
  }

  @Get('/byGenre/:genre')
  async getByGenre(@Param('genre') genre){
    return await this.HistoriaService.getHistoryByGenre(genre)
  }

  @Get('byTitle/:title')
  async getByTitle(@Param('title') title){
    return await this.HistoriaService.getHistoryByTitle(title)
  }

  @Get('author/:id')
  async getAuthor(@Param('id') id){
    return await this.HistoriaService.getAutorOfHistory(id)
  }

  @Get('books/:id')
  async getBooks(@Param('id') id){
    return await this.HistoriaService.getBooksOfHistory(id)
  }

  @Get('audiobooks/:id')
  async getAudioBooks(@Param('id') id){
    return await this.HistoriaService.getAudioBooksOfHistory(id)
  }

  @Get('comics/:id')
  async getComics(@Param('id') id){
    return await this.HistoriaService.getComicsOfHistory(id)
  }

  @Get('/tryBody')
  async tryBody(@Body() body){
    return await this.HistoriaService.tryBody(body)
  }

  /*   @Get('/all')
  async getAll() {
    return await this.HistoriaService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.HistoriaService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.HistoriaService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.HistoriaService.delete(id)
  } */
}
