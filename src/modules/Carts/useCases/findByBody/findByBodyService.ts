import { Cart } from "modules/Carts/entities/Cart"
import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByBodyService{
    constructor(@inject("CartRepositories") private cartRepositories: ICartRepositories){

    }

    async execute(body: Cart): Promise<Cart | null>{
        const cart = await this.cartRepositories.findByBody(body)

        return cart
    }
}