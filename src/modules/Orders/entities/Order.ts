import { ObjectId } from "mongodb"
import { Add_orders } from "./addOrder"

export class Order{
    public _id: ObjectId
    public add_orders: Add_orders[]

    constructor(_id: ObjectId, add_orders: Add_orders[]){
        this._id = _id,
        this.add_orders = add_orders
    }
}