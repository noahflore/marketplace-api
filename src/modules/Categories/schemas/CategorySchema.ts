import { model, Schema } from "mongoose";
import { Category } from "../entities/Category";

const CategorySchema= new Schema<Category>({
    name:{type: String, required: true},
    IDuser:{type: String, required: true},
    created_at:{type: Date, default: Date.now()}
})

export default model<Category>("Categories", CategorySchema)