module.exports = {
	    options: {
	        format: true,
	        length: 32,
	        manifest: 'dist/site/themes/530Press/assets/manifest.json',
	        querystring: {
	          style: 'roots_css',
	          script: 'roots_js'
	        }
	    },
	    files: {
	        'dist/site/themes/530Press/lib/scripts.php': 'dist/site/themes/530Press/assets/{css,js}/{screen,global}-min.{css,js}'
		}
}