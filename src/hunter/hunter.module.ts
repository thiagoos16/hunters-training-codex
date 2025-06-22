import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Hunter, HunterSchema } from "./schemas/hunter.schema";
import { HunterController } from "./hunter.controller";
import { HunterService } from "./hunter.service";
import { HunterRepository } from "./hunter.repository";


@Module({
    imports: [MongooseModule.forFeature([{ name: Hunter.name, schema: HunterSchema}])],
    controllers: [HunterController],
    providers: [HunterService, HunterRepository],
})
export class HunterModule{}
