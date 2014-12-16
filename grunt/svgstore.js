module.exports = {
  defaults: {
    options: {
      prefix : 'shape-',
      cleanup: true,
      includedemo : true,
      svg: {
        width: '32',
        height: '32',
        viewBox : '0 0 32 32',
      },
      svg: {
        style: "display: none;"
      },
      formatting : {
        indent_size : 2
      }
    },
    files: {
      '_dev/lib/img/svg/processed/svg-defs.svg': ['_dev/lib/img/svg/source/*.svg']
    },
  },
}