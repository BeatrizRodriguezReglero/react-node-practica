const fsPromises = require('fs/promises');
const path = require('path');
const { v4 } = require('uuid');
const filePath = path.resolve(__dirname, '../../data/users.json');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data); // No necesitas await aquí
    res.status(200).send(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading users');
  }
};

usersController.postNewUser = async (req, res) => {
  const newUser = { userId: v4(), ...req.body };
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    jsonData.push(newUser);
    await fsPromises.writeFile(filePath, JSON.stringify(jsonData, null, 2)); // Pretty print JSON
    res.status(201).send(newUser); // Enviar el nuevo usuario creado
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
};

usersController.patchUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    const updateUsers = jsonData.map(user => {
      if (user.userId === id) {
        return { ...user, ...req.body };
      }
      return user;
    });

    await fsPromises.writeFile(filePath, JSON.stringify(updateUsers, null, 2));
    res.status(200).send(updateUsers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating user');
  }
};

usersController.deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    const updateUsers = jsonData.filter(user => user.userId !== id);
    await fsPromises.writeFile(filePath, JSON.stringify(updateUsers, null, 2));
    res.status(200).send(updateUsers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting user');
  }
};

module.exports = usersController;
