'use strict'

var util = require('util');

module.exports = {
    getGalleries: getGalleries,
    createGallery: createGallery,
};

var galleries = [
    {
        id: 1,
        name: 'gallery1',
        description: 'gallery1 description',
        user_id: 1
    },
    {
        id: 2,
        name: 'gallery2',
        description: 'gallery2 description',
        user_id: 2
    }
];

function getGalleries(req, res) {
    res.json(galleries);
}

function createGallery(req, res) {
    var gallery = req.body;
    gallery.id = galleries.length + 1;
    galleries.push(gallery);
    res.json(gallery);
}