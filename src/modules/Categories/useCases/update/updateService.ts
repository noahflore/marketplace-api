import { Category } from "modules/Categories/entities/Category"
import { ICategoryRepositories } from "modules/Categories/repositories/ICategoryRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class UpdateService{
    constructor(@inject("CategoryRepositories") private categoryRepositories: ICategoryRepositories ){

    }

    async execute(id: string, data: Category): Promise<void>{
        const category = await this.categoryRepositories.findById(id)
        if(!category) throw new Error("category not found")
        
        await this.categoryRepositories.update(id, data)
        
    }
}