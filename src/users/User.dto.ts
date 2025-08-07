import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createUserDTO {
    @IsNotEmpty()
    @IsString()
    username : string; 

    @IsString()
    @IsOptional()
    displayname? : string;
}