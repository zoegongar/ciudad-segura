// Importamos las dependencias.
import express from "express";

// Creamos un router.
const router = express.Router();

// Importamos las funciones controladoras finales.
import {
  newProblemsController,
  editProblemsController,
  listProblemsController,
  listProblemsControllerComplete,
} from "../controllers/problems/index.js";

import { authUser } from "../middleware/authUser.js";

// Acceso administrador para crear problema
router.post("/problems/", authUser, newProblemsController);

//Acceso admin para editar problema
router.put("/problems/:id_problem", authUser, editProblemsController);

//Consultar problemas indicando un barrio (añado /districts/ para distinguir de lo anterior)
router.get("/problems/districts/:id_district", listProblemsController);

//Consultar los problemas de la ciudad
router.get("/problems/list", listProblemsControllerComplete);

export default router;
