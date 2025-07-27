import joi from "joi"

export const AddOrdersSchemaJoi = joi.object({
    ready: joi.boolean().default(false),
    created_at: joi.date()
})