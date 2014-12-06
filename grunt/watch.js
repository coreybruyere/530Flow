module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['dev/lib//javascripts/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    },
  },
  css: {
    files: ['dev/lib//styles/scss/*.scss','dev/lib//styles/scss/**/*.scss' ],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    },
  },
  images: {
    files: ['dev/lib//images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    },
  },
  svg: {
    files: ['dev/lib//images/svg/source/*.{svg}'],
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