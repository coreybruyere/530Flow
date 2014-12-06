module.exports = {
  dist: {
    devFile: 'dev/lib/bower_components/modernizr/modernizr.js',
    outputFile: 'dev/lib/javascripts/production/modernizr-min.js',
    files: {
      src: [
        'dev/lib/javascripts/**/*.js',
        'dev/lib/styles/css/*.css',
      ]
    }
  }
}