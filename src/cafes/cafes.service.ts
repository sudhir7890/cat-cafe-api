import { Injectable } from '@nestjs/common';
import { Cafe } from './interfaces/cafe.interface';

@Injectable()
export class CafesService {
  private readonly cafes: Cafe[] = [
    {
      id: 1,
      name: 'Purr & Pour',
      location: 'Tokyo, Japan',
      numberOfCats: 15,
      rating: 4.8,
      description: 'A cozy cat cafe in the heart of Tokyo',
    },
    {
      id: 2,
      name: 'Whiskers & Coffee',
      location: 'New York, USA',
      numberOfCats: 12,
      rating: 4.6,
      description: 'Manhattan\'s premier cat cafe experience',
    },
    {
      id: 3,
      name: 'Meow Cafe',
      location: 'London, UK',
      numberOfCats: 10,
      rating: 4.7,
      description: 'British charm meets feline friendship',
    },
  ];

  findAll(): Cafe[] {
    return this.cafes;
  }
}