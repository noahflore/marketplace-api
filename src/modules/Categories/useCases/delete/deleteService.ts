import { ICategoryRepositories } from "modules/Categories/repositories/ICategoryRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class DeleteService{
    constructor(@inject("CategoryRepositories") private categoryRepositories: ICategoryRepositories ){

    }

    async execute(id: string): Promise<void>{
        const user = await this.categoryRepositories.findById(id)
        if(!user) throw new Error("category not found")
        
        await this.categoryRepositories.delete(id)
    }
}