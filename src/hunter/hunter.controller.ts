import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { HunterService } from "./hunter.service";
import { CreateHunterDto } from "./dto/create-hunter.dto";
import { UpdateHunterDto } from "./dto/update-hunter.dto";


@Controller('hunters')
export class HunterController {
    constructor(private readonly hunterService: HunterService) {}

    @Post()
    create(@Body() createHunterDto: CreateHunterDto) {
        return this.hunterService.create(createHunterDto);
    }

    @Get()
    findAll() {
        return this.hunterService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.hunterService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateHunterDto: UpdateHunterDto) {
        return this.hunterService.update(id, updateHunterDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.hunterService.remove(id);
    }
}