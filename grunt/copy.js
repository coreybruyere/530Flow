module.exports = {
  main: {
    files: [
      {
        // Move CSS files from development to production
        expand: true,
        flatten: true,
        src:  [
                'dev/lib/styles/css/*-min.css',
                'dev/lib/styles/css/*.css',
                'dev/lib/styles/css/*.map'
              ],
        dest: 'production/cms/content/assets/css/',
        filter: 'isFile'
      },
      {
        // Move JS files from development to production
        expand: true,
        flatten: true,
        src: ['dev/lib/javascripts/production/*-min.js'],
        dest: 'production/cms/content/assets/js/',
        filter: 'isFile'
      },
      {
        // Move images from development to production
        expand: true,
        flatten: true,
        src: ['dev/lib/images/*'],
        dest: 'production/cms/content/assets/img/',
        filter: 'isFile'
      },
      {
        // Move SVG icons from development to production
        expand: true,
        flatten: true,
        src: ['dev/lib/images/svg/processed/*'],
        dest: 'production/cms/content/assets/img/svg/',
        filter: 'isFile'
      },
      {
        // Move font files from development to production
        expand: true,
        flatten: true,
        src: ['dev/lib/fonts/*'],
        dest: 'production/cms/content/assets/fonts/',
        filter: 'isFile'
      },
    ]
  },
}