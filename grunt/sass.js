module.exports = {
  dist: {
    options: {
      // add load paths
      loadPath: [
        // '_dev/lib//bower_components/neat/app/assets/stylesheets/'
      ],
      // cssmin will minify later
      style: 'expanded',
    },
    files: {
      '_dev/lib/css/style.dev.css' : '_dev/lib/scss/screen.scss',
      '_prod/_content/themes/530Press/assets/css/screen.css' : '_dev/lib/scss/screen.scss',
      '_prod/_content/themes/530Press/assets/css/screen-ie.css' : '_dev/lib/scss/screen-ie.scss'
    }
  }
}