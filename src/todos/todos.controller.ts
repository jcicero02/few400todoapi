import { Controller, Body, Post } from '@nestjs/common';
import * as cuid from 'cuid';
import { PostResponse, CreatePost } from './models';

@Controller('todos')
export class TodosController {

    @Post()
    async createATodo(@Body() newPost: CreatePost) {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: cuid(),
                    description: newPost.description,
                });
            }, 3000);
        });
    }
}
