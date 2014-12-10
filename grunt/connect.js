module.exports = {

  dev: {
    options: {
      port: 8000,
      base: '_dev',
      livereload: true,
      open: {
        target: 'http://localhost:8000',
        callback: function() {}
      },
    }
  }
  // prod: {
  //   options: {
  //     port: 8001,
  //     base: '_production/',
  //     livereload: true,
  //     open: {
  //       target: 'http://localhost:8888',
  //       callback: function() {}
  //     },
  //   }
  // }

}