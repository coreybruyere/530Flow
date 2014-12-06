module.exports = {
  options: {
    browsers: ['last 2 version']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'production/blog/cms/assets/css/*.css',
    dest: 'production/blog/cms/assets/css/',
  },
}