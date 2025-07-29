import { model, Schema } from "mongoose"
import { Product } from "../entities/Product"


const ProductSchema= new Schema<Product>({
    name:{type: String, required: true},
    description:{type: String, required: true},
    unit_price:{type: Number, required: true},
    bar_code:{type: String, required: true, unique: true},
    image:{type: String, required: true},
    categoriesId:{type: Schema.Types.ObjectId, required: true, ref: "categories"},
    created_at:{type: Date, default: Date.now()}
})

export default model<Product>("products", ProductSchema)