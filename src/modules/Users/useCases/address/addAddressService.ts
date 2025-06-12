import { Address } from "modules/Users/entities/address"
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class AddAddressService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories ){

    }

    async execute(userId: string, address: Address): Promise<void>{
        const user = await this.UserRepositories.findById(userId)
        if(!user) throw new Error("user not found")
        
        await this.UserRepositories.addNewAddress(userId, address)
        
    }
}