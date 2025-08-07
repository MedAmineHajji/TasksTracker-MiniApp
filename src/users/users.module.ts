import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, Userschema } from 'src/schemas/user.schema';
import { UsersService } from './users.service';
import { usersController } from './users.controller';



@Module ({
    imports:[
        MongooseModule.forFeature([{
            name : User.name,
            schema : Userschema,

        }])
    ],
    providers:[UsersService],
    controllers:[usersController],
})
export class UsersModule {

}