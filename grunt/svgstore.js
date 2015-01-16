module.exports = {
  defaults: {
    options: {
      prefix : 'icon-',
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
      'src/lib/img/svg/processed/svg-defs.svg': ['src/lib/img/svg/source/*.svg']
    },
  },
}