/**
 * Objeto con las variables de configuracion principal de la aplicacion
 * @class app
 * @module config
 * @author Christian Giménez <chrisgabo15@gmail.com>
 */
const path = require("path");

module.exports = {
    /**
     * Variable que contiene la ruta base de la aplicacion.
     *
     * @var APP_BASE
     * @type String
     */
    API_LOCATION: path.join(__dirname, '../'),
    /**
     * Propiedad que describe el puerto sobre el cual correra la app.
     * @property API_PORT {Number}
     */
    API_PORT: process.env.PORT || 3000,
    /**
     * Propiedad que describe el puerto sobre el cual se hacen pruebas unitarias NO PUEDE SER EL MISMO QUE API_PORT.
     * @property API_PORT {Number}
     */
    TEST_API_PORT: process.env.PORT || 3100,
    /**
     * Log level <https://github.com/pimterry/loglevel>
     * @property LOG_LEVEL
     */
    LOG_LEVEL: 'trace',
    /**
     * Email que se usa para debugear.
     * @property DEBUG_MAIL
     */
    DEBUG_MAIL: 'chrisgabo15@gmail.com',
    /**
     * Arreglo con todos los nombres de midlewares que van a ser precargados a las rutas creadas.
     * @var MIDDLEWARES_AUTOLOAD
     * @type Array
     */
    MIDDLEWARES_AUTOLOAD: ['EnableCrossDomain'],
    
    CONNECTION_STRING: 'mongodb://172.18.0.3:27017/spearhead-db'
};
