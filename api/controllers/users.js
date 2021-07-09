const express = require("express");
const app = express();
const data = require("../data/data.json");

app.use(express.json());

// List all users
exports.listAllUsers = (request, response) => {
    response.status(200).json(data);
};

// List one user
exports.listOneUser = (request, response) => {

    const { user_id } = request.params;
    if (user_id > data.users.length) {
        response.status(400).send("User not found!");
        return;
    }
    const user = data.users.find(user => user.user_id === +user_id);
    response.status(200).json(user);
};

// Add user
exports.addUser = (request, response) => {

    const body = request.body;
    if (body === {} || !body.name || !body.email || !body.password || body.name === "" || body.email === "" || body.password === "") {
        response.status(400).send("Fill all fields!");
        return;
    }
    data.users.push({
        user_id: data.users.length + 1,
        name: body.name,
        email: body.email,
        password: body.password
    });
    response.status(201).send("Successfully added a new user!");
};

// Update user
exports.updateUser = (request, response) => {

    const { user_id } = request.params;
    const body = request.body;
    if (user_id > data.users.length) {
        response.status(400).send("User not found!");
        return;
    }

    if (body === {} || !body.name || !body.email || !body.password || body.name === "" || body.email === "" || body.password === "") {
        response.status(400).send("Fill all fields!");
        return;
    }
    const userIndex = data.users.findIndex(user => user.user_id === +user_id);
    data.users.splice(userIndex, 1, {
        user_id: +user_id,
        name: body.name,
        email: body.email,
        password: body.password
    });
    response.status(200).send("User updated successfully!");
};

//Delete all users
exports.deleteAllUsers = (request, response) => {

    data.users.splice(0, data.users.length);
    response.status(200).send("Users deleted successfully!");
};

//Delete one user
exports.deleteOneUser = (request, response) => {

    const { user_id } = request.params;
    if (user_id > data.users.length) {
        response.status(400).send("Failed to delete user!");
        return;
    }
    const userIndex = data.users.findIndex(user => user.user_id === +user_id)
    data.users.splice(userIndex, 1);
    response.status(200).send("User deleted successfully!");
};