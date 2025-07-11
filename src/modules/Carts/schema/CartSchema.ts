import { model, Schema } from "mongoose"
import { Cart } from "../entities/Cart"


const CartSchema= new Schema<Cart>({
    add_products:[
        {
            _id:{
                type: Schema.Types.ObjectId,
                ref: "products",
            },
            userId:{type: Schema.Types.ObjectId, ref: "users" },
            amount:{type: Number, required: true},
            price_unit:{type: Number, required: true},
            created_at:{type: Date, default: Date.now()}
        }
    ],
})

export default model<Cart>("carts", CartSchema)