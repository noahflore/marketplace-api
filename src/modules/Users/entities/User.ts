import { ObjectId } from "mongodb";
import { Address } from "./address"
import { Product } from "../../Products/entities/Product"

export class User{
    public _id: ObjectId;
    public name: string;
    public email: string
    public password: string
    public addresses: Address[]
    public imagem: string
    public fav_product: Product[]
    public admin: boolean
    public created_at: Date

    constructor (_id: ObjectId, name: string, email: string, password: string, address: Address[], imagem: string, fav_product: Product[], admin: boolean, created_at: Date){
        this._id= _id
        this.name= name
        this.email= email
        this.password= password
        this.addresses= address
        this.imagem= imagem
        this.fav_product= fav_product
        this.admin= admin
        this.created_at= created_at
    }
}