import { Address } from "modules/Users/entities/address"
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class RemoveAddressService{
    constructor(@inject("UserRepositories") private UserRepositories: IUserRepositories ){

    }

    async execute(userId: string, addressId: string): Promise<void>{
        const user = await this.UserRepositories.findById(userId)
        if(!user) throw new Error("user not found")
        
        const address = await this.UserRepositories.findAddressById(addressId, userId)
        if(!address) throw new Error("user not found")

        await this.UserRepositories.removeNewAddress(userId, addressId)
        
    }
}