module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style:'expanded'
				},
				files: {
					'styles/css/style.css' : 'styles/scss/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'styles/**/*.scss',
				tasks: ['sass']
			}
		}
	});

	//Load Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};