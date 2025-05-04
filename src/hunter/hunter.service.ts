import { Injectable } from "@nestjs/common";
import { HunterRepository } from "./hunter.repository";
import { Hunter } from "./schemas/hunter.schema";
import { CreateHunterDto } from "./dto/create-hunter.dto";
import { UpdateHunterDto } from "./dto/update-hunter.dto";


@Injectable()
export class HunterService {
    constructor(private readonly repository: HunterRepository) {}

    create(createHunterDto: CreateHunterDto) {
        return this.repository.create(createHunterDto as Hunter);
    }

    findAll() {
        return this.repository.findAll();
    }

    findOne(id: string) {
        return this.repository.findById(id);
    }

    update(id: string, updateHunterDto: UpdateHunterDto) {
        return this.repository.update(id, updateHunterDto as Partial<Hunter>);
    }

    remove(id: string) {
        return this.repository.delete(id);
    }

}