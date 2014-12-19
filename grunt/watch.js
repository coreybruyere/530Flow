module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['_dev/lib/js/*.js'],
    tasks: ['jshint', 'concat', 'newer:uglify'],
    options: {
      spawn: false,
    },
  },
  // scsslint: {
  //   files: '_dev/lib/scss/elements/_buttons.scss',
  //   tasks: ['scsslint'],
  // },
  css: {
    files: ['_dev/lib/scss/**/*.scss'],
    tasks: ['newer:sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    },
  },
  images: {
    files: ['_dev/lib/img/*.{png,jpg,gif}'],
    tasks: ['newer:imagemin'],
    options: {
      spawn: false,
    },
  },
  svg: {
    files: ['_dev/lib/img/svg/source/*.{svg}'],
    tasks: ['newer:svgstore'],
    options: {
      spawn: false,
    },
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false,
    },
  },
  php:{
    files: ['./**/*.php'],
    tasks: [],
    options: {
      spawn: false,
    },
  },
}