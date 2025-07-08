import { Order } from "modules/Orders/entities/Order"
import { IOrderRepositories } from "../IOrderRepositories"
import OrderSchema from "modules/Orders/schema/OrderSchema"


export class OrderRepositoriesMongoDB implements IOrderRepositories{
        async create(body: Order): Promise<void> {
            await OrderSchema.create(body)
        }

        async findAll(limit: number, offset: number): Promise<Order[]> {
            return await OrderSchema.find().limit(limit).skip(offset).select("-__v")
        }

        async findById(id: string): Promise<Order | null> {
            const order = await OrderSchema.findById(id).select("-__v")
            return order
        }

        async findByBody(body: Order): Promise<Order | null> {
            const order = await OrderSchema.findById(body.add_orders)
            return order
        }

        async updateReady(id: string): Promise<void> {
            await OrderSchema.findByIdAndUpdate(id)
        }

        async delete(id: string): Promise<void> {
            await OrderSchema.findByIdAndDelete(id)
        }
    }