import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Post Module')
@Controller('post')
export class PostController {
  @Get('/all')
  @ApiOperation({ summary: 'Get all posts from server' })
  @ApiResponse({
    status: 200,
    description: 'All posts',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            description: 'Post id',
            example: '1',
          },
          title: {
            type: 'string',
            description: 'Post title',
            example: 'Post title',
          },
          body: {
            type: 'string',
            description: 'Post content',
            example: 'Post content',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'The request with error',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  getPrime(): string {
    return 'get post';
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create new post' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: 'Post Title',
          description: 'This is post title',
        },
        body: {
          type: 'string',
          example: 'Post Content',
          description: 'This is post content',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Post created',
  })
  @ApiResponse({
    status: 401,
    description: 'The request with error',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  createPrime(): string {
    return 'create post';
  }

  @Put('/update/:id')
  @ApiOperation({ summary: 'Update Post' })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'unique post id',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: 'Post Title',
          description: 'This is post title',
        },
        body: {
          type: 'string',
          example: 'Post Content',
          description: 'This is post content',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Post created',
  })
  @ApiResponse({
    status: 401,
    description: 'The request with error',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  updatePrime(): string {
    return 'update post';
  }

  @Delete('/delete')
  @ApiOperation({ summary: 'Delete Post' })
  @ApiParam({
    name: 'id',
    type: 'integer',
    description: 'unique post id',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'Post created',
  })
  @ApiResponse({
    status: 401,
    description: 'The request with error',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  deletePrime(): string {
    return 'delete post';
  }
}
