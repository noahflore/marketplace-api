import joi from "joi"

export const OrderSchemaJoi = joi.object({
    add_orders: joi.array()
})