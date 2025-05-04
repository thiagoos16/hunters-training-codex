import { PartialType } from "@nestjs/mapped-types";
import { CreateHunterDto } from "./create-hunter.dto";

export class UpdateHunterDto extends PartialType(CreateHunterDto) {}