import { ObjectId } from "bson";
import { User } from "modules/Users/entities/User";
import { IAuthRepositories } from "../IAuthRepositories";
import UserSchema from "modules/Users/schemas/UserSchema";
import "dotenv/config"
import jwt from "jsonwebtoken"

export class AuthRepositoriesMongoDB implements IAuthRepositories{
    async findUserByEmail(email: string): Promise<User | null> {
        const user = await UserSchema.findOne({email})
        return user
    }
    async generateToken(userId: ObjectId): Promise<string> {
        const secret = process.env.SECRET as string
        return jwt.sign({id: userId}, secret, {expiresIn: 2000})
    }

}