import { User } from "modules/Users/entities/User"
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByIdService{
    constructor(@inject("UserRepositories") private userRepositories: IUserRepositories){

    }

    async execute(id: string): Promise<User>{
        const user = await this.userRepositories.findById(id)

        if(!user) throw new Error("User not found")
        return user
    }
}