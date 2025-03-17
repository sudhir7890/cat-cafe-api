import { Module } from '@nestjs/common';
import { CafesModule } from './cafes/cafes.module'; // Ensure this line is present only once

@Module({
  imports: [CafesModule], // Ensure CafesModule is listed only once here
  controllers: [],
  providers: [],
})
export class AppModule {}