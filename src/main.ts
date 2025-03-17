import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors();
  
  // Global prefix for all routes
  app.setGlobalPrefix('api');
  
  // Use port from environment variable for Vercel, or 3000 locally
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
