jQuery(function(a){function b(){a("pre code").each(function(b,c){var d=a(this),e=d.html().split(/\n/).length;if(e>1){hljs.highlightBlock(c);var f=[];for(b=1;b<e;b++)f+='<span class="line">'+b+"</span>";d.parent().addClass("codeblock").append('<div class="lines">'+f+"</div>")}})}function c(){a("#wrapper").fitVids()}function d(){if("undefined"!=typeof disqus&&document.getElementById("disqus_thread")){if(window.DISQUS)return DISQUS.reset({reload:!0,config:function(){this.page.identifier=location.pathname,this.page.url=location.origin+location.pathname}});a.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0})}else a(".post-comments").css({display:"none"})}b(),c(),d()});