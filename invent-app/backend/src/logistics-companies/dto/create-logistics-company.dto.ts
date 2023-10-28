import { IsInt, IsPositive, IsString, MinLength } from "class-validator";

export class CreateLogisticsCompanyDto {

    @IsString()
    @MinLength(2)
    name: string;

    @IsInt()
    @IsPositive()
    areaCode: number;

    @IsString()
    image?: string;
}