import { Order } from "modules/Orders/entities/Order"
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByIdService{
    constructor(@inject("OrderRepositories") private orderRepositories: IOrderRepositories){

    }

    async execute(id: string): Promise<Order>{
        const order = await this.orderRepositories.findById(id)

        if(!order) throw new Error("Order not found")
        return order
    }
}