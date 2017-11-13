var mongoose = require('./../db/mongoose');

let Lamp = mongoose.model('Todos', {
    size: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
       },
    date: {
        type: String,
        minLength: 1,
        trim: true
    },
    outsideDiameter: {
        type: String,
        minLength: 1,
    },
    overallLength: {
        type: String,
        minLength: 1
    },
    arcGap: {
        type: String,
        minLength: 1
    },
    comments: {
        type: String
    }


});

module.exports = { Lamp };