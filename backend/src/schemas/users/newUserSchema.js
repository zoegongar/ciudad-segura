// Importamos joi.
import joi from 'joi';

// Importamos los mensajes de error personalizados.
import joiErrorMessages from '../joiErrorMessages.js';

// Creamos el esquema de Joi donde comprobamos todas las propiedades necesarias.
const newUserSchema = joi.object({
  user_name: joi.string().required().messages(joiErrorMessages),
  pass: joi
    .string()
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,@.])[\w@.]{8,}$/
      ///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,@.]){8,}$/
    )
    .required()
    .messages(joiErrorMessages),
  email: joi.string().email().required().messages(joiErrorMessages),
});

export default newUserSchema;
