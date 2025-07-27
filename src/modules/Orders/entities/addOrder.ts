import { ObjectId } from "mongodb"

export class Add_orders{
    public _id: ObjectId
    public ready: boolean
    public created_at: Date

    constructor(_id: ObjectId, ready: boolean, created_at: Date){
        this._id= _id,
        this.ready= ready,
        this.created_at= created_at
    }
}