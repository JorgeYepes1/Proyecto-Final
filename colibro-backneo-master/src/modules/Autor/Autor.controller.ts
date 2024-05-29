import { Controller, Get, Post, Body, Put, Delete, Param, Req } from '@nestjs/common';
import { AutorService } from './Autor.service';
@Controller('Autor')
export class AutorController {

    constructor(private readonly AutorService: AutorService) { }
  
    @Get('/all')
  async getAll() {
    return await this.AutorService.getAll()
  }

  /*   @Get('/all')
  async getAll() {
    return await this.AutorService.getAll()
  }

  @Get(':id')
  async getById(@Param('id') id: Number) {
    return await this.AutorService.getById(id)
  }

  @Post()
  async create(@Body() body) {
    return await this.AutorService.create(body)
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.AutorService.delete(id)
  } */
}
