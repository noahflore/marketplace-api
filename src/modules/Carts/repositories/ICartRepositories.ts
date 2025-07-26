import { Cart } from "../entities/Cart";


export interface ICartRepositories{
    create(body: Cart): Promise<void>;
    findAll(limit: number, offset: number): Promise<Cart[]>
    findById(id: string): Promise<Cart | null>
    findByBody(body: Cart): Promise<Cart | null>
    updateAndAdd(id: string, data: Cart): Promise<Cart | null>
    delete(id: string): Promise<void>

}