'use strict'

var util = require('util');

module.exports = {
    getPhotos: getPhotos,
    createPhoto: createPhoto,
};

var photos = [
    {
        id: 1,
        name: 'photo1',
        description: 'photo1 description',
        url: 'http://photo1.com',
        user_id: 1,
        gallery_id: 1
    },
    {
        id: 2,
        name: 'photo2',
        description: 'photo2 description',
        url: 'http://photo2.com',
        user_id: 2,
        gallery_id: 2
    }
];

function getPhotos(req, res) {
    res.json(photos);
}

function createPhoto(req, res) {
    var photo = req.body;
    photo.id = photos.length + 1;
    photos.push(photo);
    res.json(photo);
}