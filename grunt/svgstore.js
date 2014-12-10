module.exports = {
  defaults: {
    options: {
      prefix : 'shape-',
      formatting : {
        indent_size : 2
      }
    },
    files: {
      '_dev/lib/img/svg/processed/svg-defs.svg': ['_dev/lib/img/svg/source/*.svg']
    },
  },
}