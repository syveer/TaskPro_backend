import Joi from "joi";


const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const themeSchema = Joi.object({
  theme: Joi.string().valid("light", "dark", "violet").required(),
});

const userSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegExp),
  password: Joi.string().min(6),
});
const helpSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  comment: Joi.string(),
});
const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  themeSchema,
  userSchema,
  helpSchema,
  refreshSchema,
};

export default schemas;
