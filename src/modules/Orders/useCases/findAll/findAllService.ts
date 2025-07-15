import { Order } from "modules/Orders/entities/Order"
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindAllService{
    constructor(@inject("OrderRepositories") private orderRepositories: IOrderRepositories){

    }

    async execute(limit: number, offset: number): Promise<Order[]>{
        const orders = await this.orderRepositories.findAll(limit, offset)

        if(!orders.length) throw new Error("Orders not found")
        return orders
    }
}