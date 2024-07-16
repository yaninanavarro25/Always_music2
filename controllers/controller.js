import { addUserQuery, getUsersQuery, getUserByRutQuery, updateUserQuery, deleteUserQuery } from "../models/queries.js";

export const home = (req, res) => {
    res.send('Hola Mundo! desde controller');
}

export const addUser = async (req, res) => {
    const { name, rut, course, level } = req.body;
    await addUserQuery(name, rut, course, level);
    res.send('User added');
}

export const getUsers = async (req, res) => {
    const users = await getUsersQuery();
    res.send(users);
}

export const getUserByRut = async (req, res) => {
    /* const { rut } = req.params; */
    const { rut } = req.query;
    const user = await getUserByRutQuery(rut);
    res.send(user);
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, rut, course, level} = req.body;
    const user = await updateUserQuery(name, rut, course, level, id);
    res.send('User updated successfully');
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await deleteUserQuery(id);
    res.send('User deleted successfully');
}