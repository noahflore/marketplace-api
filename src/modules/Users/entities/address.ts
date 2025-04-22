import { ObjectId } from "mongodb"

export class Address{
    public _id: ObjectId
    public street: string
    public number: number
    public complement: string
    public zipcode: string

    constructor(_id: ObjectId, street: string, number: number, complement: string, zipcode: string){
        this._id= _id
        this.street= street
        this.number= number
        this.complement= complement
        this.zipcode= zipcode
    }
}