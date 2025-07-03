import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories ){

    }

    async execute(id: string): Promise<void>{
        const user = await this.UserRepositories.findById(id)
        if(!user) throw new Error("user not found")
        
        await this.UserRepositories.delete(id)
    }
}