module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['src/lib/js/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    },
  },
  css: {
    files: ['src/lib/scss/**/*.scss'],
    tasks: ['sass', 'scsslint', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    },
  },
  lint: {
    files: ['src/lib/scss/**/*.scss'],
    tasks: ['scsslint'],
    options: {
      spawn: false,
    },
  },
  images: {
    files: ['src/lib/img/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    },
  },
  svg: {
    files: ['src/lib/img/svg/source/*.{svg}'],
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