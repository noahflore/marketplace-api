import { Product } from "modules/Products/entities/Product";
import { Address } from "../entities/address";
import { User } from "../entities/User";

export interface IUserRepositories{
    create(body: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findAll(limit: number, offset: number): Promise<User[]>
    findById(id: string): Promise<User | null>
    update(id: string, data: User): Promise<void>
    delete(id: string): Promise<void>
    addNewAddress(userId: string, address: Address): Promise<void>
    removeNewAddress(userId: string, addressId: string): Promise<void>
    findAddressById(addressId: string, userId: string): Promise<Address | null>
    addFavProduct(userId: string, productId: string): Promise<void>
    findFavProductById(productId: string, userId: string): Promise<Product | null>
    removeFavProduct(productId: string, userId: string): Promise<void> 
}