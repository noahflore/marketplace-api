import { IUserRepositories } from "modules/Users/repositories/IUserRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class AddFavProductService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories ){

    }

    async execute(userId: string, productId: string): Promise<void>{
        const user = await this.UserRepositories.findById(userId)
        if(!user) throw new Error("user not found")
        
        await this.UserRepositories.addFavProduct(userId,productId)
        
    }
}