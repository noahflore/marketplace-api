import { IProductRepositories } from "modules/Products/repositories/IProductRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class DeleteService{
    constructor(@inject("ProductRepositories") private productRepositories: IProductRepositories ){

    }

    async execute(id: string): Promise<void>{
        const product = await this.productRepositories.findById(id)
        if(!product) throw new Error("product not found")
        
        await this.productRepositories.delete(id)
    }
}