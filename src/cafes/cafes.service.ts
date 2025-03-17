import { Injectable } from '@nestjs/common';
import * as alaskaData from '../../data/cafes/Alaska.json';
import * as alabamaData from '../../data/cafes/Alabama.json';
import * as arizonaData from '../../data/cafes/Arizona.json';
import * as arkansasData from '../../data/cafes/Arkansas.json';
import * as californiaData from '../../data/cafes/California.json';
import { City, StateData } from './interfaces/cafe.interface';

@Injectable()
export class CafesService {
  private readonly cafesData: Record<string, StateData> = {
    Alaska: alaskaData as unknown as StateData,
    Alabama: alabamaData as unknown as StateData,
    Arizona: arizonaData as StateData,
    Arkansas: arkansasData as unknown as StateData,
    California: californiaData as unknown as StateData,
  };

  findAll(): any {
    return Object.values(this.cafesData).flatMap(state => 
      Object.values(state).flatMap(city => city.cafes)
    );
  }

  findCafesByStates(states: string[]): any {
    const cafes = states.flatMap(state => {
      const stateData: StateData | undefined = this.cafesData[state];
      if (stateData) {
        return Object.values(stateData).flatMap(city => city.cafes);
      }
      return [];
    });

    return cafes.length > 0 ? cafes : { message: 'No cafes found for the specified states.' };
  }

  findAllStatesData(): Record<string, StateData> {
    return this.cafesData;
  }
}