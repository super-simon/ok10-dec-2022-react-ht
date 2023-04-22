import Joi from "joi";

const userValidator = Joi.object({
  name: Joi.string().required().messages({
    "string.requires": "Обов`язкове поле",
  }),
  username: Joi.string().required().messages({
    "string.requires": "Обов`язкове поле",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string().allow(""),
  website: Joi.string().allow(""),
  address: {
    street: Joi.string().allow(""),
    suite: Joi.string().allow(""),
    city: Joi.string().allow(""),
    zipcode: Joi.string().allow(""),
    geo: {
      lat: Joi.string().allow(""),
      lng: Joi.string().allow(""),
    },
  },
  company: {
    bs: Joi.string().allow(""),
    catchPhrase: Joi.string().allow(""),
    name: Joi.string().allow(""),
  },
});

export { userValidator };
