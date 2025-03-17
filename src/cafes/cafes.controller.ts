import { Controller, Get } from '@nestjs/common';
import { CafesService } from './cafes.service';
import { Cafe } from './interfaces/cafe.interface';

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  findAll(): Cafe[] {
    return this.cafesService.findAll();
  }
}