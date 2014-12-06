module.exports = {
  dist: {
    options: {
      // add load paths
      loadPath: [
        // 'dev/lib//bower_components/neat/app/assets/stylesheets/'
      ],
      // cssmin will minify later
      style: 'expanded',
    },
    files: {
      'dev/lib//styles/css/main.css': 'dev/lib//styles/scss/main.scss',
      'dev/lib//styles/css/ie.css': 'dev/lib//styles/scss/ie.scss'
    }
  }
}