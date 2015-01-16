module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'src/lib/img/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'src/lib/img/'
    }]
  },
  options: {
    cache: false
  }
}