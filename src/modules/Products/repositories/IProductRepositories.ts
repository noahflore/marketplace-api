import { Product } from "../entities/Product";


export interface IProductRepositories{
    create(body: Product): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findAll(limit: number, offset: number): Promise<User[]>
    findById(id: string): Promise<User | null>
    update(id: string, data: User): Promise<void>
    delete(id: string): Promise<void> 
}