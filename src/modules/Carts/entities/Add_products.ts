import { ObjectId } from "mongoose"


export class Add_products{
    public _id: ObjectId
    public userId: ObjectId
    public amount: number
    public price_unit: number
    public created_at: Date

    constructor(_id: ObjectId, userId: ObjectId, amount: number, price_unit: number, created_at: Date){
        this._id= _id,
        this.userId = userId,
        this.amount = amount,
        this.price_unit = price_unit
        this.created_at= created_at
    }
}