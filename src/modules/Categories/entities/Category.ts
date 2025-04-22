import { ObjectId } from "mongodb"

export class Category{
    public _id: ObjectId
    public name: string
    public created_at: Date

    constructor (_id: ObjectId, name: string, created_at: Date){
        this._id= _id
        this.name= name
        this.created_at= created_at
    }
}