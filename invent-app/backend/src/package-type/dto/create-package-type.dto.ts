import { IsNumber, IsString } from "class-validator";

export class CreatePackageTypeDto {

    @IsString()
    typeName: string;

    @IsNumber()
    minWeight: number;

    @IsNumber()
    maxWeight: number;

    @IsString()
    form: string;
}
