import Joi from "joi";

const contactFormSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .custom((value, helpers) => {
      const hasNumbers = /\d/.test(value);
      const parts = value.trim().split(/\s+/);

      if (hasNumbers) {
        return helpers.error("string.noNumbers");
      }
      if (parts.length < 2) {
        return helpers.error("string.fullName");
      }

      return value;
    })
    .messages({
      "string.empty": "Full name is required",
      "string.fullName": "Please enter your full name (first and last)",
      "string.noNumbers": "Full name should not contain numbers",
    }),

  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Enter a valid email address",
  }),

  phone: Joi.string()
    .allow("")
    .custom((value, helpers) => {
      if (value && value.replace(/\D/g, "").length < 10) {
        return helpers.error("string.phoneMin");
      }
      return value;
    })
    .messages({
      "string.phoneMin": "Phone number must be at least 10 digits",
    }),

  priority: Joi.string()
    .valid("low", "normal", "high", "critical")
    .required()
    .messages({
      "any.only": "Priority is required",
    }),

  subject: Joi.string().required().messages({
    "string.empty": "Subject is required",
  }),

  message: Joi.string().required().messages({
    "string.empty": "Message is required",
  }),
});

const reservationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-z]+(?: [A-Za-z]+)+$/)
    .required()
    .messages({
      "string.empty": "Full name is required",
      "string.pattern.base":
        "Full name must contain only letters and a space (e.g., John Doe)",
    }),

  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Enter a valid email address",
  }),

  phone: Joi.string()
    .pattern(/^\d{10,}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Phone number must be at least 10 digits",
    }),

  date: Joi.string().required().messages({
    "string.empty": "Date is required",
  }),

  time: Joi.string().required().messages({
    "string.empty": "Time is required",
  }),

  guests: Joi.number().min(1).max(8).required().messages({
    "number.base": "Number of guests must be a number",
    "number.min": "At least 1 guest is required",
    "number.max": "Maximum of 8 guests allowed",
    "any.required": "Number of guests is required",
  }),

  location: Joi.string().required().messages({
    "string.empty": "Location is required",
  }),
});
export { contactFormSchema, reservationSchema };
