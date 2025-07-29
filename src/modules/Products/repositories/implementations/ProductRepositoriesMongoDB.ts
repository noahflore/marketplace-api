import { Product } from "modules/Products/entities/Product"
import ProductSchema from "modules/Products/schemas/ProductSchema"
import { IProductRepositories } from "../IProductRepositories"


export class ProductRepositoriesMongoDB implements IProductRepositories{
        async create(body: Product): Promise<void> {
            await ProductSchema.create(body)
        }

        async findAll(limit: number, offset: number): Promise<Product[]> {
            return await ProductSchema.find().select("-__v").limit(limit).skip(offset)
        }

        async findById(id: string): Promise<Product | null> {
            const product = await ProductSchema.findById(id).select("-__v")
            return product
        }

        async update(id: string, data: Product): Promise<void> {
            await ProductSchema.findByIdAndUpdate(id , data)
        }

        async delete(id: string): Promise<void> {
            await ProductSchema.findByIdAndDelete(id)
        }
    }