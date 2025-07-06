import { Order } from "../entities/Order";


export interface IOrderRepositories{
    create(body: Order): Promise<void>;
    findAll(limit: number, offset: number): Promise<Order[]>
    findById(id: string): Promise<Order | null>
    updateReady(id: string): Promise<void>
    delete(id: string): Promise<void>

}