import { ObjectId } from "mongoose"
import { Add_products } from "./Add_products"

export class Cart{
    public _id: ObjectId
    public add_products: Add_products[]
    public created_at: Date

    constructor(_id: ObjectId, add_products: Add_products[], created_at: Date){
        this._id = _id,
        this.add_products = add_products
        this.created_at= created_at
    }
}