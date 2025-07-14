import { Cart } from "modules/Carts/entities/Cart"
import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class CreateService{
    constructor(@inject("CartRepositories") private cartRepositories: ICartRepositories){}

    public async execute(body: Cart): Promise<void> {
        //const cartExists = await this.cartRepositories.findByBody(body)
        
        //if(cartExists) throw new Error("Cart Exists")

        await this.cartRepositories.create(body)
    }
}