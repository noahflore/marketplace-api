import { User } from "modules/Users/entities/User";
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import bcrypt from "bcrypt"
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories ){

    }

    async execute(id: string, data: User): Promise<void>{
        const user = await this.UserRepositories.findById(id)
        if(!user) throw new Error("user not found")
        
        if(!data.password){
            await this.UserRepositories.update(id, data)
        }else{
            const hashPassword = await bcrypt.hash(data.password, 10)
            await this.UserRepositories.update(id, {...data, password: hashPassword})
        }
    }
}