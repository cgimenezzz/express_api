'use strict';

/**
 * Rutas disponibles juntos a sus
 * controladores.
 * @module src
 */

// Config
const config = require('./config/app');
// Utils
const response = require('./utils/ResponseUtil');
let moment = require('moment');
const log = require('loglevel');
// Controllers
const taskController = require('./controllers/TaskController');

module.exports = (express) => {

	log.setLevel(config.LOG_LEVEL) 
	let router = express.Router();

	/**
	* @apiDefine CustomContentType
	* @apiHeader {String="application/json"} Content-Type
	*/

   /**
	* @apiDefine successResponse
	* @apiSuccess {Integer} code     Código HTTP.
	* @apiSuccess {Object=null} error     Objeto de errores.
	* @apiSuccess {Object} data     Data de respuesta.
	*/

   /**
	* @apiDefine errorResponse
	* @apiError {Integer} code     Código HTTP.
	* @apiError {Object=null} data     Data de respuesta.
	* @apiError {Object} error     objeto de errores.
	*/

   /**
	* @apiIgnore Not necesary
	* @api {GET} /
	* @apiVersion 0.0.1
	* @apiName TestRoute
	* @apiGroup Test
	*/

	router.get('/', (req, res) => {
		log.info('[info] - ['+moment().format()+'] - run index')
		response.sendResponse(res, 200, 'App listening on port: ' + config.API_PORT, null);
	});

	router.post('/spearhead/action', (req, res) => {
		log.info('[info] - ['+moment().format()+'] - run actions callback')
		let body = req.body;

		log.debug(body)
		response.sendResponse(res, 200, 'run decode response', null);
	});

	// router.post('/task/add', (req, res) => {
	// 	taskController.add(req, res);
	// });
	
	// router.get('/task/find', (req, res) => {
	// 	taskController.findAll(req, res);
	// });

	// router.put('/task/update/:id', (req, res) => {
	// 	taskController.update(req, res);
	// })

	return router;
};