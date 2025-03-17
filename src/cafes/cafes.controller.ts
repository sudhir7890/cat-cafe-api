import { Controller, Get, Query } from '@nestjs/common';
import { CafesService } from './cafes.service';
import { City, StateData } from './interfaces/cafe.interface';

@Controller('cafes')
export class CafesController {
  constructor(private readonly cafesService: CafesService) {}

  @Get()
  findAll() {
    return this.cafesService.findAll();
  }

  @Get('by-states')
  findByStates(@Query('states') states: string) {
    const stateArray = states.split(','); // Expecting states as a comma-separated string
    return this.cafesService.findCafesByStates(stateArray);
  }

  @Get('all-states')
  findAllStatesData(): Record<string, StateData> {
    return this.cafesService.findAllStatesData();
  }
}