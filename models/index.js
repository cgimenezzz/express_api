'use strict';

let db = require('./db');
let task = require('./task')(db);

let models = {};
    models.task = task;

module.exports = models;