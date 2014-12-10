module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: '_dev/lib/img/',
      src: ['**/*.{png,jpg,gif}'],
      dest: '_dev/lib/img/'
    }]
  },
  options: {
    cache: false
  }
}