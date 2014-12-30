module.exports = {
	dist: {
	  src: [
	  	'_dev/lib/scss/modules/*.scss'
	  ],
	},
	options: {
	    colorizeOutput: true,
	    config: 'grunt/.scss-lint.yml',
	    reporterOutput: null,
	    force: true,
	},
}