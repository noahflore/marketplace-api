import { Cart } from "modules/Carts/entities/Cart"
import { ICartRepositories } from "../ICartRepositories"
import CartSchema from "modules/Carts/schema/CartSchema"

export class CartRepositoriesMongoDB implements ICartRepositories{
        async create(body: Cart): Promise<void> {
            await CartSchema.create(body)
        }

        async findAll(limit: number, offset: number): Promise<Cart[]> {
            return await CartSchema.find().limit(limit).skip(offset).select("-__v")
        }

        async findById(id: string): Promise<Cart | null> {
            const order = await CartSchema.findById(id).select("-__v")
            return order
        }  

        async findByBody(body: Cart): Promise<Cart | null> {
            const cart = await CartSchema.findOne(body)
            return cart
        }

        async updateAndAdd(id: string, data: Cart): Promise<Cart | null> {
            const cart = await CartSchema.findOneAndUpdate( 
                {
                    _id: id
                },
                {
                    $push:{
                        add_products: data
                       }
                }
                )
            return cart
        }

        async delete(id: string): Promise<void> {
            await CartSchema.findByIdAndDelete(id)
        }
    }