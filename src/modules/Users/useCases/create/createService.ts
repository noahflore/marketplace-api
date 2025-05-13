import { User } from "modules/Users/entities/User";
import bcrypt  from "bcrypt"
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories){}

    public async execute(body: User): Promise<void> {
        const hashPassword = await bcrypt.hash(body.password, 10)

        const userExists = await this.UserRepositories.findByEmail(body.email)
        
        if(userExists) throw new Error("User Exists")

        await this.UserRepositories.create({...body, password: hashPassword})
    }
}