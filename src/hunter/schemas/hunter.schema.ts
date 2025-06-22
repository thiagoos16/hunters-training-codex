import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HunterDocument = Hunter & Document

@Schema({ timestamps: true })
export class Hunter {
    @Prop({ required: true, type: String })
    name: string;

    @Prop({ required: true, type: String })
    weapon: string;

    @Prop({ required: false, type: Number })
    level: number;

    @Prop({ required: true, type: Number })
    height: number

    @Prop({ required: true, type: Number })
    weight: number
}

export const HunterSchema = SchemaFactory.createForClass(Hunter);