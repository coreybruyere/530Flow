module.exports = {
  defaults: {
    options: {
      prefix : 'shape-',
      formatting : {
        indent_size : 2
      }
    },
    files: {
      'dev/lib//images/svg/processed/svg-defs.svg': ['dev/lib//images/svg/source/*.svg']
    },
  },
}