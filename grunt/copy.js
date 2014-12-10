module.exports = {
  main: {
    files: [
      {
        // Move CSS files from development to production
        expand: true,
        flatten: true,
        src:  [
                '_dev/lib/css/*-min.css',
                '_dev/lib/css/*.css',
                '_dev/lib/css/*.map'
              ],
        dest: '_prod/_content/assets/css/',
        filter: 'isFile'
      },
      {
        // Move JS files from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/js/production/*-min.js'],
        dest: '_prod/_content/assets/js/',
        filter: 'isFile'
      },
      {
        // Move images from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/img/*'],
        dest: '_prod/_content/assets/img/',
        filter: 'isFile'
      },
      {
        // Move SVG icons from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/img/svg/processed/*'],
        dest: '_prod/_content/assets/img/svg/',
        filter: 'isFile'
      },
      {
        // Move font files from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/fonts/*'],
        dest: '_prod/_content/assets/fonts/',
        filter: 'isFile'
      },
    ]
  },
}