import { Order } from "modules/Orders/entities/Order"
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class CreateService{
    constructor(@inject("OrderRepositories") private orderRepositories: IOrderRepositories){}

    public async execute(body: Order): Promise<void> {
        const orderExists = await this.orderRepositories.findByBody(body)
        
        if(orderExists) throw new Error("Order Exists")

        await this.orderRepositories.create(body)
    }
}