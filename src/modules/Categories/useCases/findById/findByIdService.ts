import { Category } from "modules/Categories/entities/Category"
import { ICategoryRepositories } from "modules/Categories/repositories/ICategoryRepositories"
import { inject, injectable } from "tsyringe"


@injectable()
export class FindByIdService{
    constructor(@inject("CategoryRepositories") private categoryRepositories: ICategoryRepositories){

    }

    async execute(id: string): Promise<Category>{
        const category = await this.categoryRepositories.findById(id)

        if(!category) throw new Error("category not found")
        return category
    }
}