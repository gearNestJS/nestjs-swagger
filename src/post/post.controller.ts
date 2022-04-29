import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('post')
export class PostController {
  @Get('/all')
  getPrime(): string {
    return 'get post';
  }

  @Post('/create')
  createPrime(): string {
    return 'create post';
  }

  @Put('/update')
  updatePrime(): string {
    return 'update post';
  }

  @Delete('/delete')
  deletePrime(): string {
    return 'delete post';
  }
}
