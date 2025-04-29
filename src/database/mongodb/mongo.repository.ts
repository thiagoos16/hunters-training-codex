import { Model } from "mongoose";
import { IRepository } from "../interfaces/repository.interface";

export abstract class MongoRepository<T> implements IRepository<T> {
    constructor(private readonly model: Model<T>) {}

    async create(data: T): Promise<T> {
        const result = new this.model(data);
        return result.toObject() as T;
    }

    async findAll(): Promise<T[]> {
        const results = await this.model.find().lean();
        return results as T[];
    }

    async findById(id: string): Promise<T | null> {
        const result = await this.model.findById(id).lean();
        return result as T | null;
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        const result = await this.model.findByIdAndUpdate(id, data, { new: true }).lean();
        return result as T | null;
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id);
        return result !== null;
    }
}