import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeController } from './prime/prime.controller';
import { PostController } from './post/post.controller';

@Module({
  imports: [],
  controllers: [AppController, PrimeController, PostController],
  providers: [AppService],
})
export class AppModule {}
