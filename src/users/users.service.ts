import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { createUserDTO } from "./User.dto";

@Injectable()
export class UsersService {
    constructor (
        @InjectModel(User.name) private  userModel:Model<User>
    ) {}

    createUser (createUserDTO: createUserDTO) {
        const newUser = new this.userModel(createUserDTO);
        return newUser.save();
    }

}