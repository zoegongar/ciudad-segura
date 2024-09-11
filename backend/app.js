// Importamos dotenv para sacar las variables necesarias, usamos express para el servidor
// y morgan para su respectivo uso y fileUpload para recibir archivos
import express from 'express';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import cors from 'cors';

// Importamos las rutas
import routes from './src/routes/index.js';
import errorController from './src/controllers/errores/errorController.js';

// Inicializamos el servidor express
const app = express();

// Configuración de morgan para logging
app.use(morgan('dev'));

// Middleware para procesar JSON y archivos
app.use(express.json());
app.use(cors());
app.use(fileUpload());

// Configuración de rutas estáticas para archivos subidos
app.use('/uploads', express.static('./src/uploads'));

// Configuración de las rutas principales
app.use(routes);

// Controlador de errores
app.use(errorController);

// Configuración del puerto
const PORT = process.env.PORT || 5000; // Usa el puerto proporcionado por el entorno o el puerto 5000 por defecto

// Inicializamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

export default app; // Exportamos la aplicación para posibles pruebas o usos futuros
