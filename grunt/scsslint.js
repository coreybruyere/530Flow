module.exports = {
	allFiles: [
	    '_dev/lib/scss/elements/*.scss',
	    '_dev/lib/scss/layout/*.scss',
	    '_dev/lib/scss/modules/*.scss'
	],
	options: {
	    bundleExec: false,
	    colorizeOutput: true,
	    config: 'grunt/.scss-lint.yml',
	    reporterOutput: null,
	    force: true,
	},
}