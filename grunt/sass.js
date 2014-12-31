module.exports = {
  dist: {
    options: {
      loadPath: [
        // 'add optional load paths'
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