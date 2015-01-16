module.exports = {
	dist: {
	  src: [
	  	'src/lib/scss/modules/*.scss',
	  	// GLOBBING NOT WORKING : UPDATE?
	  	// 'src/lib/scss/elements/*.scss',
	  	// 'src/lib/scss/layout/*.scss',
	  ],
	},
	options: {
	    colorizeOutput: true,
	    config: 'grunt/.scss-lint.yml',
	    reporterOutput: null,
	    force: true,
	},
}