import { User } from "modules/Users/entities/User";
import bcrypt  from "bcrypt"
import { IUserRepositories } from "modules/Users/repositories/IUserRepositories";
import { error } from "console";
import { UserRepositoriesMongoDB } from "modules/Users/repositories/implementations/UserRepositoriesMongoDB";

export class CreateService{
    constructor(private userRepository: UserRepositoriesMongoDB){}

    public async execute(body: User): Promise<void> {
        const hashPassword = await bcrypt.hash(body.password, 10)

        const userExists = await this.userRepository.findByEmail(body.email)
        
        if(userExists) throw new Error("User Exists")

        await this.userRepository.create({...body, password: hashPassword})
    }
}