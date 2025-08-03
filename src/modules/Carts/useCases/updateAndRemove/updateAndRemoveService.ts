import { ICartRepositories } from "modules/Carts/repositories/ICartRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class UpdateAndRemoveService{
    constructor(@inject("CartRepositories") private cartRepositories: ICartRepositories ){

    }

    async execute(id: string, productId: string): Promise<void> {
        const cart = await this.cartRepositories.findById(id);
        if (!cart) throw new Error("Cart not found");
    
        const productExists = cart.add_products.some(
            (product: any) => product._id.toString() === productId
        );
    
        if (!productExists) throw new Error("Product not found in cart");
    
        await this.cartRepositories.updateAndRemove(id, productId);
    }
}