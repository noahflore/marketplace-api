import { IProductRepositories } from "modules/Products/repositories/IProductRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByIdService{
    constructor(@inject("ProductRepositories") private productRepositories: IProductRepositories){

    }

    async execute(id: string): Promise<Cart>{
        const product = await this.productRepositories.findById(id)

        if(!product) throw new Error("Product not found")
        return product
    }
}