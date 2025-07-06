import { model, Schema } from "mongoose";
import { Order } from "../entities/Order";


const OrderSchema= new Schema<Order>({
    add_orders:[
        {
            _id:{
                type: Schema.Types.ObjectId,
                ref: "carts",
            },
            ready:{type: Boolean, required: true, default: false},
            created_at:{type: Date, default: Date.now()}
        }
    ],
})

export default model<Order>("orders", OrderSchema)