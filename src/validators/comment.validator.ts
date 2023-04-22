import Joi from "joi";

const commentValidator = Joi.object({
  name: Joi.string().required().messages({
    "string.requires": "Обов`язкове поле",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  body: Joi.string().required().messages({
    "string.requires": "Обов`язкове поле",
  }),
});

export { commentValidator };
