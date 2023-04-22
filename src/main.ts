import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const start = async () => {
  try {
    const port = process.env.PORT || 8000;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(port, () => console.log(`listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
