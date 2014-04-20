(function(){var e={}.hasOwnProperty;this.Mercury.Toolbar=function(){function t(e){this.options=null!=e?e:{},this.visible=this.options.visible,this.build(),this.bindEvents()}return t.prototype.build=function(){var t,r,n,o,i,s,u,l,a,p;this.element=jQuery("<div>",{"class":"mercury-toolbar-container",style:"width:10000px"}),this.element.css({width:"100%"}),this.element.appendTo(null!=(a=jQuery(this.options.appendTo).get(0))?a:"body"),p=Mercury.config.toolbars;for(l in p)if(e.call(p,l)&&(n=p[l],!n._custom)){u=jQuery("<div>",{"class":"mercury-toolbar mercury-"+l+"-toolbar"}).appendTo(this.element),n._regions&&u.attr("data-regions",n._regions),o=jQuery("<div>",{"class":"mercury-toolbar-button-container"}).appendTo(u);for(r in n)e.call(n,r)&&(s=n[r],"_regions"!==r&&(t=this.buildButton(r,s),t&&t.appendTo(o)));"nowrap"===o.css("white-space")&&(i=new Mercury.Toolbar.Expander(l,{appendTo:u,"for":o}),i.appendTo(this.element)),Mercury.config.toolbars.primary&&"primary"!==l&&u.addClass("disabled")}return this.visible?void 0:this.element.css({display:"none"})},t.prototype.buildButton=function(t,r){var n,o,i,s,u,l,a;if("_"===t[0])return!1;switch(jQuery.type(r)){case"array":return a=r[0],l=r[1],s=r[2],new Mercury.Toolbar.Button(t,a,l,s,{appendDialogsTo:this.element});case"object":i=new Mercury.Toolbar.ButtonGroup(t,r);for(n in r)e.call(r,n)&&(u=r[n],o=this.buildButton(n,u),o&&o.appendTo(i));return i;case"string":return jQuery("<hr>",{"class":"mercury-"+("-"===r?"line-separator":"separator")});default:throw Mercury.I18n('Unknown button structure -- please provide an array, object, or string for "%s".',t)}},t.prototype.bindEvents=function(){return Mercury.on("region:focused",function(e){return function(t,r){var n,o,i,s,u,l;for(u=e.element.find(".mercury-toolbar"),l=[],i=0,s=u.length;s>i;i++)o=u[i],o=jQuery(o),(n=o.data("regions"))?n.split(",").indexOf(r.region.type())>-1?l.push(o.removeClass("disabled")):l.push(void 0):l.push(void 0);return l}}(this)),Mercury.on("region:blurred",function(e){return function(t,r){var n,o,i,s,u,l;for(u=e.element.find(".mercury-toolbar"),l=[],i=0,s=u.length;s>i;i++)o=u[i],o=jQuery(o),(n=o.data("regions"))?n.split(",").indexOf(r.region.type())>-1?l.push(o.addClass("disabled")):l.push(void 0):l.push(void 0);return l}}(this)),this.element.on("click",function(){return Mercury.trigger("hide:dialogs")}),this.element.on("mousedown",function(e){return e.preventDefault()})},t.prototype.height=function(e){return null==e&&(e=!1),this.visible||e?this.element.outerHeight():0},t.prototype.top=function(){return this.visible?this.element.offset().top:0},t.prototype.show=function(){return this.visible=!0,this.element.css({top:-this.element.outerHeight(),display:"block"}),this.element.animate({top:0},200,"easeInOutSine")},t.prototype.hide=function(){return this.visible=!1,this.element.hide()},t}()}).call(this);