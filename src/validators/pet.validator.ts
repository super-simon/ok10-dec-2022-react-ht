import Joi from "joi";

const petValidator = Joi.object({
  name: Joi.string().required(),
});

export { petValidator };
