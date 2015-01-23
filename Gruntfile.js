// Grunt Tasks:
/*

1. grunt : Watch and concatenate static development files
2. grunt dev : Open a new browser tab pointing to dev file and run watch task
3. grunt process : Minify all images, css, and js for production
4. grunt svg : Build svg file - see folder structure in svg.js
5. grunt lint : Lint SCSS files


*/

'use strict';
module.exports = function(grunt) {

  // Show time for each executed task
  // require('time-grunt')(grunt);

  // Tasks are configured in partials located in grunt/
  require('load-grunt-config')(grunt);

  // Register default task
  grunt.registerTask('default', ['watch', 'concat']);

  // Open new tab for static development
  grunt.registerTask('dev', ['connect:dev', 'watch', 'concat']);

  // Let's process things for production
  grunt.registerTask('process', ['concat', 'uglify', 'sass', 'cssmin', 'modernizr', 'imagemin', 'copy']);

  // Turn those SVGs into a sprite
  grunt.registerTask('svg', ['svgstore']);

  // Lint SCSS alone
  grunt.registerTask('lint', ['scsslint']);

};