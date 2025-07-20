import { Product } from "modules/Products/entities/Product";
import { IProductRepositories } from "modules/Products/repositories/IProductRepositories";
import { inject, injectable } from "tsyringe";


@injectable()
export class CreateService{
    constructor(@inject("ProductRepositories") private productRepositories: IProductRepositories){}

    public async execute(body: Product): Promise<void> {
       
        await this.productRepositories.create(body)
    }
}