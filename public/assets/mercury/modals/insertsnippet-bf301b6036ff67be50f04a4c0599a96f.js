(function(){this.Mercury.modalHandlers.insertSnippet=function(){return this.element.find("form").on("submit",function(e){return function(t){var n,r;return t.preventDefault(),n=e.element.find("form").serializeObject(),Mercury.snippet?(r=Mercury.snippet,r.setOptions(n),Mercury.snippet=null):r=Mercury.Snippet.create(e.options.snippetName,n),Mercury.trigger("action",{action:"insertSnippet",value:r}),e.hide()}}(this))}}).call(this);