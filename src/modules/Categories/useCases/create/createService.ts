import { inject, injectable } from "tsyringe";
import { ICategoryRepositories } from "modules/Categories/repositories/ICategoryRepositories";
import { Category } from "modules/Categories/entities/Category";

@injectable()
export class CreateService{
    constructor(@inject("CategoryRepositories") private categoryRepositories: ICategoryRepositories){}

    public async execute(body: Category, userId: string): Promise<void> {
        const name = body.name 

        const categoryExists = await this.categoryRepositories.findByName(name)
        
        if(categoryExists) throw new Error("Category Exists")

        await this.categoryRepositories.create(body, userId)
    }
}