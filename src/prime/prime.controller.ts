import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('prime')
export class PrimeController {
  @Get('/all')
  getPrime(): string {
    return 'get prime';
  }

  @Post('/create')
  createPrime(): string {
    return 'create prime';
  }

  @Put('/update')
  updatePrime(): string {
    return 'update prime';
  }

  @Delete('/delete')
  deletePrime(): string {
    return 'delete prime';
  }
}
