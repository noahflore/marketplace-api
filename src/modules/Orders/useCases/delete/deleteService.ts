import { IOrderRepositories } from "modules/Orders/repositories/IOrderRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class DeleteService{
    constructor(@inject("OrderRepositories") private orderRepositories: IOrderRepositories ){

    }

    async execute(id: string): Promise<void>{
        const user = await this.orderRepositories.findById(id)
        if(!user) throw new Error("order not found")
        
        await this.orderRepositories.delete(id)
    }
}