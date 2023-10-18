import { IsInt, IsNumber, IsString, MinLength } from "class-validator";

export class CreateItemDto {

    @IsString()
    @MinLength(4)
    destinationAddress: string;

    @IsInt()
    postalCode: number;

    @IsString()
    @MinLength(2)
    destinationName: string;
    
    @IsString()
    @MinLength(2)
    senderName: string;

    @IsNumber()
    itemWeight: number;
}
