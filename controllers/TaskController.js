'use strict'

// Libs
const log = require('loglevel');
const Joi = require('joi');
// Utils
const response = require('../utils/ResponseUtil');
// Models
const models = require('../models/index');

class TaskController {

	constructor() {}

	async add(req, res)  {
		let body = req.body;

		const schema = Joi.object().keys({
			name: Joi.string().required(),
		});

		try {

			const objValid = await Joi.validate(body, schema);
			
			let newTask = new models.task(objValid);
			let saveTask = await newTask.save();
			response.sendResponse(res, 200, 'Task save successful.', false);
			log.debug(saveTask);

		} catch(err) {
			response.sendResponse(res, 500, err, true);
			log.error(err);
		}
	}

	async findAll(req, res) {
		let condition = {};

		try {
			
			let task = models.task;
			let allTask = await task.find();
			response.sendResponse(res, 200, allTask, false);
			log.debug(allTask);

		} catch(err) {
			response.sendResponse(res, 500, err, true);
			log.error(err);
		}
	}

	async update(req, res) {
		let userId = req.params.id;
		let body = req.body;

		const schema = Joi.object().keys({
			name: Joi.string().required(),
		});

		try {

			const objValid = await Joi.validate(body, schema);

			let task = models.task;
			let findOne = await task.findById(userId);

			if (findOne != null) {
				let updateTask = await task.updateOne({ _id: userId }, { $set: body});
				response.sendResponse(res, 200, updateTask, false);
			} else {
				response.sendResponse(res, 404, null, false);
			}

		} catch(err) {
			response.sendResponse(res, 500, err, true);
			log.error(err);
		}
	}
	
}

module.exports = new TaskController();