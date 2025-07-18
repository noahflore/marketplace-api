import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories"
import { inject, injectable } from "tsyringe"

@injectable()
export class DeleteService{
    constructor(@inject("CartRepositories") private cartRepositories: ICartRepositories ){

    }

    async execute(id: string): Promise<void>{
        const cart = await this.cartRepositories.findById(id)
        if(!cart) throw new Error("cart not found")
        
        await this.cartRepositories.delete(id)
    }
}