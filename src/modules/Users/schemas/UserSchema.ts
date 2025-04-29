import { model, Schema } from "mongoose";
import { User } from "../entities/User";

const UserSchema= new Schema<User>({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    imagem:{type: String},
    addresses:[
        {
            street:{type: String, required: true},
            number:{type: Number, required: true},
            complement:{type: String},
            zipcode:{type: String, required: true},
            created_at:{type: Date, default: Date.now()}
        }
    ],
    fav_product:[
        {
            _id:{
                type: Schema.Types.ObjectId,
                ref: "products"
            },
            created_at:{type: Date, default: Date.now()}
        }
    ],
    created_at:{type: Date, default: Date.now()},
    admin:{type: Boolean, required: true, default: false}
})

export default model<User>("users", UserSchema)