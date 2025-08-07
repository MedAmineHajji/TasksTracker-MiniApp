import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDTO } from "./User.dto";

@Controller('users')
export class usersController {

    constructor(private userService : UsersService){

    }

    @Post()
    @UsePipes ( new ValidationPipe())
    createUser(@Body() createUserDTO : createUserDTO ){
        console.log(createUserDTO);
        return this.userService.createUser(createUserDTO)


    }
}