

/*********************
        PASO 7 (MODIFICADO)
       
********************/

import express from 'express';
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroesPorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  crearSuperheroeController,
  actualizarSuperheroeController,
  borrarSuperheroePorIdController,
  borrarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

// Obtener lista completa de superhéroes (GET)
router.get('/heroes', obtenerTodosLosSuperheroesController);

// Obtener por ID (GET)
router.get('/heroes/:id', obtenerSuperheroePorIdController);

// Buscar por atributo (GET)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

// Obtener mayores de 30 (GET)
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

// Crear nuevo superhéroe (POST)
router.post('/heroes', crearSuperheroeController);

// Actualizar superhéroe por ID (PUT)
router.put('/heroes/:id', actualizarSuperheroeController);

// Borrar por ID (DELETE)
router.delete('/heroes/:id', borrarSuperheroePorIdController);

// Borrar por nombre del superhéroe (DELETE)
router.delete('/heroes/nombre/:nombre', borrarSuperheroePorNombreController);

export default router;
