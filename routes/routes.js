import express from 'express';
import { home, addUser, getUsers, getUserByRut, updateUser, deleteUser } from '../controllers/controller.js';
const router = express.Router();


router.get('/', home)

router.post('/register', addUser)

 router.get('/users', getUsers)

 router.get('/user/rut', getUserByRut)

 router.put('/user/:id', updateUser)

 router.delete('/user/:id', deleteUser)



export default router