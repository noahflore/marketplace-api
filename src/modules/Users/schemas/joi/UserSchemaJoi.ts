import joi from "joi"

export const UserSchemaJoi = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    imagem: joi.string(),
    addresses: joi.array(),
    fav_product: joi.array(),
    created_at: joi.date(),
    admin: joi.boolean().default(false)
})