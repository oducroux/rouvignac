(function(){this.Mercury.dialogHandlers.snippetPanel=function(){return this.element.find("input.filter").on("keyup",function(t){return function(){var e,n,i,r,u,a;for(n=t.element.find("input.filter").val(),u=t.element.find("li[data-filter]"),a=[],i=0,r=u.length;r>i;i++)e=u[i],0===LiquidMetal.score(jQuery(e).data("filter"),n)?a.push(jQuery(e).hide()):a.push(jQuery(e).show());return a}}(this)),this.element.find("img[data-snippet]").on("dragstart",function(){return Mercury.snippet={name:jQuery(this).data("snippet"),hasOptions:!(jQuery(this).data("options")===!1)}})}}).call(this);