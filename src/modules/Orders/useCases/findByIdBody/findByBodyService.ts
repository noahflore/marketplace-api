import { Order } from "modules/Orders/entities/Order"
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByBodyService{
    constructor(@inject("OrderRepositories") private orderRepositories: IOrderRepositories){

    }

    async execute(body: Order): Promise<Order | null>{
        const order = await this.orderRepositories.findByBody(body)

        return order
    }
}