module.exports = {
	    options: {
	        format: true,
	        length: 32,
	        manifest: '_prod/_content/themes/530Press/assets/manifest.json',
	        querystring: {
	          style: 'roots_css',
	          script: 'roots_js'
	        }
	    },
	    files: {
	        '_prod/_content/themes/530Press/lib/scripts.php': '_prod/_content/themes/530Press/assets/{css,js}/{screen,global}-min.{css,js}'
		}
}