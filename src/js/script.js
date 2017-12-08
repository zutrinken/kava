jQuery(function($) {

	/* ==========================================================================
	   Run Highlight
	   ========================================================================== */

	function highlight() {
		$('pre code').each(function(i, e) {
			var code = $(this);
			var lines = code.html().split(/\n/).length;
			if (lines > 1) {
				hljs.highlightBlock(e);
				var numbers = [];
				for (i = 1; i < lines; i++) {
					numbers += '<span class="line">' + i + '</span>';
				}
				code.parent().addClass('codeblock').append('<div class="lines">' + numbers + '</div>');
			}
		});
	}
	highlight();

	/* ==========================================================================
	   Fitvids
	   ========================================================================== */

	function video() {
		$('#wrapper').fitVids();
	}
	video();

	/* ==========================================================================
	   Initialize and load Disqus
	   ========================================================================== */

	function comments() {
		if (typeof disqus === 'undefined' || !document.getElementById('disqus_thread')) {
			$('.post-comments').css({
				'display' : 'none'
			});
		} else {
			if (window.DISQUS) {
				return DISQUS.reset({
					reload: true,
					config: function () {
						this.page.identifier = location.pathname;
						this.page.url = location.origin + location.pathname;
					}
				});
			}

			$.ajax({
				type: "GET",
				url: "//" + disqus + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
		}
	}
	comments();

});
