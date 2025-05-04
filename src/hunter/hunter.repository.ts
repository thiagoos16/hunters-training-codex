import { Injectable } from "@nestjs/common";
import { MongoRepository } from "src/database/mongodb/mongo.repository";
import { Hunter } from "./schemas/hunter.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class HunterRepository extends MongoRepository<Hunter> {
    constructor(@InjectModel(Hunter.name) hunterModel: Model<Hunter>) {
        super(hunterModel)
    }
}