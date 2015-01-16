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
      'src/lib/css/style.dev.css' : 'src/lib/scss/screen.scss',
      'dist/site/themes/530Press/assets/css/screen.css' : 'src/lib/scss/screen.scss',
      'dist/site/themes/530Press/assets/css/screen-ie.css' : 'src/lib/scss/screen-ie.scss'
    }
  }
}