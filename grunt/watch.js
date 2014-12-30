module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['_dev/lib/js/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    },
  },
  css: {
    files: ['_dev/lib/scss/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    },
  },
  scsslint: {
    files: ['_dev/lib/scss/**/*.scss'],
    tasks: ['scsslint'],
    options: {
      spawn: false,
    },
  },
  images: {
    files: ['_dev/lib/img/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    },
  },
  svg: {
    files: ['_dev/lib/img/svg/source/*.{svg}'],
    tasks: ['svgstore'],
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