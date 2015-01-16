module.exports = {
  options: {
    browsers: ['last 3 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'dist/site/themes/530Press/assets/css/*-min.css',
    dest: 'dist/site/themes/530Press/assets/css/',
  },
}