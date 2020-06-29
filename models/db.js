'use strict';

let mongoose = require('mongoose');
let conf = require('../config/app');

mongoose.Promise = Promise;

mongoose.connect(conf.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let connectToMongo = mongoose.connection;
connectToMongo.on('error', console.error.bind(console, 'Error de conexion'));

let mDb = {};

mDb.mongoose = mongoose;
mDb.schema = mongoose.Schema;

module.exports = mDb;