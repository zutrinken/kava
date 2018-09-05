jQuery(function($) {

	/* ==========================================================================
	 ghostHunter
	 ========================================================================== */

	$("#search-field").ghostHunter({
		results: "#results",
		result_template: '<article class="post"><h2 class="post-title"><a href="{{link}}">{{title}}</a></h2><span class="post-meta">On <span class="post-date">{{pubDate}}</span></span></article>',
		info_template: '<div class="header-title"><h1 class="header-name">Searchresults</h1><span class="header-meta"><span class="header-posts">{{amount}} posts found</span></span></div>',
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
	 Reading Progress
	 ========================================================================== */

var post = $('.post');
var viewport = $(window);

function readingProgress() {
	if (post.length >= 1) {
		var postBottom = post.offset().top + post.height();
		var windowBottom = viewport.scrollTop() + viewport.height();
		var progress = 100 - (((postBottom - windowBottom) / (postBottom - viewport.height())) * 100);
		if (progress > 100) {
			$('.post-nav-post').css('opacity', '0.5');
		} else {
			$('.post-nav-post').css('opacity', progress / 250 + 0.2);
		}
	}
}
readingProgress();

viewport.on({
	'scroll': function() {
		readingProgress();
	},
	'resize': function() {
		readingProgress();
	},
	'orientationchange': function() {
		readingProgress();
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
	   Gallery
	   ========================================================================== */

	function gallery() {
		var images = document.querySelectorAll('.kg-gallery-image img');
		images.forEach(function (image) {
			var container = image.closest('.kg-gallery-image');
			var width = image.attributes.width.value;
			var height = image.attributes.height.value;
			var ratio = width / height;
			container.style.flex = ratio + ' 1 0%';
		});
	}
	gallery();

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
