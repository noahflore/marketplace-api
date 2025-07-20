import { Product } from "modules/Products/entities/Product"
import ProductSchema from "modules/Products/schema/ProductSchema"
import { IProductRepositories } from "../IProductRepositories"


export class ProductRepositoriesMongoDB implements IProductRepositories{
        async create(body: Product): Promise<void> {
            await ProductSchema.create(body)
        }

        async findByEmail(email: string): Promise<User | null> {
            const user = await UserSchema.findOne({email})
            return user
        }

        async findAll(limit: number, offset: number): Promise<User[]> {
            return await UserSchema.find().select("-password").limit(limit).skip(offset)
        }

        async findById(id: string): Promise<User | null> {
            const user = await UserSchema.findById(id).select("-password")
            return user
        }

        async update(id: string, data: User): Promise<void> {
            await UserSchema.findByIdAndUpdate(id , data)
        }

        async delete(id: string): Promise<void> {
            await UserSchema.findByIdAndDelete(id)
        }
    }