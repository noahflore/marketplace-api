import joi from "joi"

export const AddressSchemaJoi = joi.object({
    
    street: joi.string().required(),
    number: joi.number().required,
    complement: joi.string(),
    zipcode: joi.string().required(),
    createdAt: joi.date()
})