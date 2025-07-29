import joi from "joi"

export const ProductSchemaJoi = joi.object({
    name: joi.string().min(2).required(),
    description: joi.string().required(),
    unit_price: joi.number().required(),
    bar_code: joi.string(),
    image: joi.string(),
    categoriesId: joi.string(),
    created_at: joi.date()
})