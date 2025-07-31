import joi from "joi"

export const OrderSchemaJoi = joi.object({
  add_orders: joi.array().items(
    joi.object({
      _id: joi.string().length(24).hex().required(),
      ready: joi.boolean().default(false),
      created_at: joi.date()
    })
  )
});