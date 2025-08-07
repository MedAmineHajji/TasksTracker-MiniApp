import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

    @Prop({unique : true , required : true })
    username : string;

    @Prop({required : false})
    displayname? : string;

    @Prop({required : false})
    avatarUrl? : string;

}

export const Userschema = SchemaFactory.createForClass(User);