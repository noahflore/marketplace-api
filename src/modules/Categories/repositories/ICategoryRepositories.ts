import { Category } from "../entities/Category";

export interface ICategoryRepositories{
    create(body: Category, userId: string): Promise<void>;
    findAll(limit: number, offset: number): Promise<Category[]>
    findById(id: string): Promise<Category | null>
    findByName(name: string): Promise<Category | null>
    update(id: string, data: Category): Promise<void>
    delete(id: string): Promise<void>
}