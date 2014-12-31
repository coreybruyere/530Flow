module.exports = {
  main: {
    files: [
      {
        // Move CSS files from development to production
        // Use sass.js to import/concat Bower css files
        expand: true,
        flatten: true,
        src:  [
                '_dev/lib/css/*-min.css',
                '_dev/lib/css/*.css',
                '_dev/lib/css/*.map'
              ],
        dest: '_prod/_content/themes/530Press/assets/css/',
        filter: 'isFile'
      },
      {
        // Move specific JS plugins from Bower to production
        expand: true,
        flatten: true,
        src:  [
                '_dev/lib/bower_components/slick-carousel/slick/slick.min.js'
              ],
        dest: '_prod/_content/themes/530Press/assets/js/vendor/',
        filter: 'isFile'
      },
      {
        // Move scripts and all global files from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/js/production/*.js'],
        dest: '_prod/_content/themes/530Press/assets/js/',
        filter: 'isFile'
      },
      {
        // Move images from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/img/*'],
        dest: '_prod/_content/themes/530Press/assets/img/',
        filter: 'isFile'
      },
      {
        // Move SVG icons from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/img/svg/processed/*'],
        dest: '_prod/_content/themes/530Press/assets/img/svg/',
        filter: 'isFile'
      },
      {
        // Move font files from development to production
        expand: true,
        flatten: true,
        src: ['_dev/lib/fonts/*'],
        dest: '_prod/_content/themes/530Press/assets/fonts/',
        filter: 'isFile'
      },
    ]
  },
}