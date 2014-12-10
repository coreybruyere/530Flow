// Grunt Tasks:
/*

1. grunt : Watch and concatenate static development files
2. grunt dev : Open a new browser tab pointing to dev file and run watch task
3. grunt process : Minify all images, css, and js for production
4. grunt svg : Build svg file - see folder structure in svg.js

*/

'use strict';
module.exports = function(grunt) {

  // Tasks are configured in partials located in grunt/
  require('load-grunt-config')(grunt);

  // Register default task
  grunt.registerTask('default', ['watch','concat']);

  // Open new tab for static development
  grunt.registerTask('dev', ['connect:dev','watch','concat']);

  // Let's process things for production
  grunt.registerTask('process', ['concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'modernizr', 'imagemin']);

  // Turn those SVGs into a sprite
  grunt.registerTask('svg', ['svgstore']);

  // Now, let's move things to the Production directory
  // grunt.registerTask('move', ['copy']);

};