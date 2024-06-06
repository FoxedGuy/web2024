// make it
// Path: swagger/node_gallery/api/controllers/users.js
'use strict';

var util = require('util');

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
};

var users = [
    {
        id: 1,
        name: 'John Doe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        password: 'password'
    },
    {
        id: 2,
        name: 'Jane Doe',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@doe.com',
        password: 'password'
    }
];

function getUsers(req, res) {
    res.json(users);
}

function createUser(req, res) {
    var user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.json(user);
}