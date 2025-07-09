import { Order } from "modules/Orders/entities/Order"
import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class UpdateReadyService{
    constructor(@inject("OrderRepositories") private orderRepositories: IOrderRepositories ){

    }

    async execute(id: string, data: boolean): Promise<Order | null>{
        const orderExists = await this.orderRepositories.findById(id)
        if(!orderExists) throw new Error("order not found")
        
        const order = await this.orderRepositories.updateReady(id, data)
        return order
        
    }
}