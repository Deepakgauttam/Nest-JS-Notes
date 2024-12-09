import { Controller, Post, Get } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller("songs")
export class SongsController {
    constructor(private songsService: SongsService){}

    @Post()
    create() {
        return this.songsService.create("Animals by Martin Garrix");
    }
    @Get()
    findAll() {
        return this.songsService.findAll();
    }
}
