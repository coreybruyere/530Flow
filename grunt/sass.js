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
      '_dev/lib/css/style.dev.css': '_dev/lib/css/screen.scss',
      '_prod/_content/assets/css/screen.css': '_dev/lib/css/screen.scss',
      '_prod/_content/assets/css/screen-ie.css': '_dev/lib/css/screen-ie.scss'
    }
  }
}