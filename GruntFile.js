// Grunt file to run autoprefixer
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
    	styles: {
    		files: 'assets/css/styles.css',
    		tasks: ['autoprefixer']
    	}
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      single_file: {
             src: 'assets/css/styles.css',
             dest: 'assets/css/build/styles.css'
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch', 'autoprefixer']);
}