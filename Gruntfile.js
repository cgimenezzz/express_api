'use strict';

/**
 * Archivo para el manejo de tareas
 * llevados a cabo por GruntJS
 * @module src
 */
module.exports = (grunt) => {

	// Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		apidoc: {
			bitlyClone: {
				src: "./",
				dest: "./docs/services",
				options: {
					includeFilters: ["routes.js"],
				}
			}
		}
	});

	// load Task
	grunt.loadNpmTasks('grunt-apidoc');

	// Default Task
	grunt.registerTask('default', ['apidoc']);

};