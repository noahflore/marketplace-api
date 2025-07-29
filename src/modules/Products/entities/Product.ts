import { ObjectId } from "mongodb";

export class Product{
    public _id: ObjectId;
    public name: string;
    public description: string
    public unit_price: number
    public bar_code: string
    public image: string
    public categoriesId: ObjectId
    public created_at: Date

    constructor (_id: ObjectId, name: string, description: string, unit_price: number, bar_code: string, imagem: string, categories: ObjectId, created_at: Date){
        this._id= _id
        this.name= name
        this.description= description
        this.unit_price= unit_price
        this.bar_code= bar_code
        this.image= imagem
        this.categoriesId= categories
        this.created_at= created_at
    }
}