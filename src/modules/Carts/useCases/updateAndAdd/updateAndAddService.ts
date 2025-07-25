import { Cart } from "modules/Carts/entities/Cart"
import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class UpdateAndAddService{
    constructor(@inject("CartRepositories") private cartRepositories: ICartRepositories ){

    }

    async execute(id: string, data: Cart): Promise<void>{
        const cart = await this.cartRepositories.findById(id)
        if(!cart) throw new Error("cart not found")
        
        await this.cartRepositories.updateAndAdd(id, data)
        
    }
}