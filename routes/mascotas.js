import express from 'express';
import mascotaController from '../controllers/mascotas.js'

const router = express.Router();
 
router.post('/', mascotaController.create); //crear
router.get('/:id', mascotaController.getOne); //consultar uno
router.get('/', mascotaController.getAll); //consultar todo
router.put('/:id', mascotaController.uptdate); //modificar
router.delete('/:id', mascotaController.delete); //borrar

export default router;
