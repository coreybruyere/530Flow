module.exports = {
	dist: {
	  src: [
	  	'_dev/lib/scss/modules/*.scss',
	  	'_dev/lib/scss/elements/*.scss',
	  	'_dev/lib/scss/layout/*.scss'
	  ],
	},
	options: {
	    colorizeOutput: true,
	    config: 'grunt/.scss-lint.yml',
	    reporterOutput: null,
	    force: true,
	},
}