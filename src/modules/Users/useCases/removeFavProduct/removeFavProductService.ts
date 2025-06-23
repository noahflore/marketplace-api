import { IUserRepositories } from "modules/Users/repositories/IUserRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class RemoveFavProductService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories ){

    }

    async execute(userId: string, productId: string): Promise<void>{
        const user = await this.UserRepositories.findById(userId)
        if(!user) throw new Error("user not found")
        
        const product = await this.UserRepositories.findFavProductById(productId,userId)
        if(!product) throw new Error("product not found")

        await this.UserRepositories.removeFavProduct(productId,userId)
        
    }
}