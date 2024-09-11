// Importamos joi.
import joi from "joi";

// Importamos los mensajes de error personalizados.
import joiErrorMessages from "../joiErrorMessages.js";

// Creamos el esquema de Joi donde comprobamos todas las propiedades necesarias.
const editUserPassSchema = joi.object({
  email: joi.string().email().required().messages(joiErrorMessages),
  recovery_code: joi.string().required().messages(joiErrorMessages),
  newPass: joi
    .string()
    .pattern(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@!#$%^&*()_+|~=`{}:";'<>¿?,.]).{8,}$/
    )
    .required()
    .messages(joiErrorMessages),
});

export default editUserPassSchema;
