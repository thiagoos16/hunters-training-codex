import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HunterDocument = Hunter & Document

@Schema({ timestamps: true })
export class Hunter {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    weapon: string;

    @Prop({ required: true })
    level: number;

    @Prop({ required: true })
    height: number

    @Prop({ required: true })
    weight: number
}

export const HunterSchema = SchemaFactory.createForClass(Hunter);