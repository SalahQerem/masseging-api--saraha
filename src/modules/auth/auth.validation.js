import joi from "joi";

export const SignupSchema = {
  body: joi.object({
    userName: joi.string().alphanum().min(3).max(20).required().messages({
      "string.empty": "userName is required",
      "any.required": "userName is required",
    }),
    email: joi.string().email().required().messages({
      "string.empty": "email is required",
      "string.email": "pleaze enter a valid email",
    }),
    password: joi.string().min(8).max(20).required().messages({
      "string.empty": "password is required",
    }),
    confirmPassword: joi.valid(joi.ref("password")).required(),
  }),
  query: joi.object({
    test: joi.boolean().required(),
  }),
};

export const LoginSchema = {
  body: joi.object({
    email: joi.string().email().required().messages({
      "string.empty": "email is required",
      "string.email": "pleaze enter a valid email",
    }),
    password: joi.string().min(8).max(20).required().messages({
      "string.empty": "password is required",
    }),
  }),
};
