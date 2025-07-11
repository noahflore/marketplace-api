import { ObjectId } from "mongoose"
import { Add_products } from "./Add_products"

export class Cart{
    public _id: ObjectId
    public add_products: Add_products[]

    constructor(_id: ObjectId, add_products: Add_products[]){
        this._id = _id,
        this.add_products = add_products
    }
}