import { Auth } from "modules/Auth/entities/Auth";
import { IAuthRepositories } from "modules/Auth/repositories/IAuthRepositories";
import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt"

@injectable()
export class SignInService{
    constructor(@inject("AuthRepositories") private AuthRepositories: IAuthRepositories){

    }

    async execute(data: Auth){
        const user = await this.AuthRepositories.findUserByEmail(data.email)
        if(!user) throw new Error("email or password invalid")

        const passwordOK = await bcrypt.compare(data.password, user.password)
        if(!passwordOK) throw new Error("email or password invalid")

        return this.AuthRepositories.generateToken(user._id)
    }
}