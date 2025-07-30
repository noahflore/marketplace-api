import joi from "joi"

export const CartSchemaJoi = joi.object({
    add_product: joi.array(),
    created_at: joi.date()
})