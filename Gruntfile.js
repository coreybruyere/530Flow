

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

  // Now, let's move things to the Production directory
  grunt.registerTask('move', ['copy']);

  // We can start MAMP to view Production if we want
  // grunt.registerTask('prod', ['connect:prod']);

  // Turn those SVGs into a sprite
  grunt.registerTask('svg', ['svgstore']);

};