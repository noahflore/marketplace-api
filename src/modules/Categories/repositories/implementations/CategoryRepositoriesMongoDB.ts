import { Category } from "modules/Categories/entities/Category"
import { ICategoryRepositories } from "../ICategoryRepositories"
import CategorySchema from "modules/Categories/schemas/CategorySchema"

export class CategoryRepositoriesMongoDB implements ICategoryRepositories{

    async create(body: Category, userId: string): Promise<void> {
                await CategorySchema.create({...body, IDuser: userId})
            }

    async findAll(limit: number, offset: number): Promise<Category[]> {
                return await CategorySchema.find().limit(limit).skip(offset)
    }

    async findById(id: string): Promise<Category | null> {
        const category = await CategorySchema.findById(id)
        return category
    }

    async findByName(name: string): Promise<Category | null> {
        const category = await CategorySchema.findOne({name})
        return category
    }

    async update(id: string, data: Category): Promise<void> {
        await CategorySchema.findByIdAndUpdate(id , data)
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.")
    }



}