import { Cart } from "modules/Carts/entities/Cart"
import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByIdService{
    constructor(@inject("CartRepositories") private cartRepositories: ICartRepositories){

    }

    async execute(id: string): Promise<Cart>{
        const cart = await this.cartRepositories.findById(id)

        if(!cart) throw new Error("Cart not found")
        return cart
    }
}