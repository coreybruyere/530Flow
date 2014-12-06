module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'dev/lib//images/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'dev/lib//images/'
    }]
  },
  options: {
    cache: false
  }
}