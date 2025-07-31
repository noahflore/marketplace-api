import joi from "joi";

export const CartSchemaJoi = joi.object({
  add_products: joi.array().items(
    joi.object({
      _id: joi.string().length(24).hex().required(),
      userId: joi.string().length(24).hex().required(),
      amount: joi.number().min(1).required(),
      price_unit: joi.number().min(0).required(),
      freight: joi.number().min(0).required(),
      created_at: joi.date()
    })
  )
});