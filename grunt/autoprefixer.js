module.exports = {
  options: {
    browsers: ['last 3 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: '_prod/_content/themes/530Press/assets/css/*-min.css',
    dest: '_prod/_content/themes/530Press/assets/css/',
  },
}