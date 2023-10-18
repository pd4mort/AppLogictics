import { IsNumber, IsString } from "class-validator";

export class CreatePackageTypeDto {

    @IsString()
    typeName: string;

    @IsNumber()
    minWeigt: number;

    @IsNumber()
    maxWeigt: number;

    @IsString()
    form: string;
}
