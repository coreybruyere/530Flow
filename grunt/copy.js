module.exports = {
  main: {
    files: [
      {
        // Move CSS files from development to production
        // Use sass.js to import/concat Bower css files
        expand: true,
        flatten: true,
        src:  [
                'src/lib/css/*-min.css',
                'src/lib/css/*.css',
                'src/lib/css/*.map'
              ],
        dest: 'dist/site/themes/530Press/assets/css/',
        filter: 'isFile'
      },
      {
        // Move specific JS plugins from Bower to production
        expand: true,
        flatten: true,
        src:  [
                'src/lib/bower_components/slick-carousel/slick/slick.min.js'
              ],
        dest: 'dist/site/themes/530Press/assets/js/vendor/',
        filter: 'isFile'
      },
      {
        // Move scripts and all global files from development to production
        expand: true,
        flatten: true,
        src: ['src/lib/js/production/*.js'],
        dest: 'dist/site/themes/530Press/assets/js/',
        filter: 'isFile'
      },
      {
        // Move images from development to production
        expand: true,
        flatten: true,
        src: ['src/lib/img/*'],
        dest: 'dist/site/themes/530Press/assets/img/',
        filter: 'isFile'
      },
      {
        // Move SVG icons from development to production
        expand: true,
        flatten: true,
        src: ['src/lib/img/svg/processed/*'],
        dest: 'dist/site/themes/530Press/assets/img/svg/',
        filter: 'isFile'
      },
      {
        // Move font files from development to production
        expand: true,
        flatten: true,
        src: ['src/lib/fonts/*'],
        dest: 'dist/site/themes/530Press/assets/fonts/',
        filter: 'isFile'
      },
    ]
  },
}