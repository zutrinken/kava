jQuery(function($) {

	$("#search-field").ghostHunter({
		results: "#results",
		result_template: '<article class="post"><h2 class="post-title"><a href="{{link}}">{{title}}</a></h2><span class="post-meta">On <span class="post-date">{{pubDate}}</span></span></article>',
		info_template: '<div class="header-title"><h1 class="header-name">Searchresults</h1><span class="header-meta">{{amount}} posts found</span></div>',
		displaySearchInfo : true,
		onComplete: function(results) {
      if ($("#search-field").prop('value')) {
        $('#searchresults').show();
        $('#main').hide();
      } else {
        $('#searchresults').hide();
        $('#main').show();
      }
    }
	});

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
