import joi from "joi"

export const Add_productsSchemaJoi = joi.object({
    add_product: joi.array(),
    userId: joi.string(),
    amount: joi.number(),
    price_unit: joi.number(),
    freight: joi.number(),
    created_at: joi.date()
})