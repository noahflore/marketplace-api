import { model, Schema } from "mongoose"
import { Cart } from "../entities/Cart"


const CartSchema= new Schema<Cart>({
    add_products:[
        {
            _id:{
                type: Schema.Types.ObjectId,
                ref: "products", required: true
            },
            userId:{type: Schema.Types.ObjectId, ref: "users" },
            amount:{type: Number, required: true},
            price_unit:{type: Number, required: true},
            freight:{type: Number, rerquired: true},
            created_at:{type: Date, default: Date.now()}
        }
    ],
})

export default model<Cart>("carts", CartSchema)