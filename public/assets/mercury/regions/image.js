(function(){var t={}.hasOwnProperty,e=function(e,r){function n(){this.constructor=e}for(var i in r)t.call(r,i)&&(e[i]=r[i]);return n.prototype=r.prototype,e.prototype=new n,e.__super__=r.prototype,e};this.Mercury.Regions.Image=function(t){function r(t,e,n){this.element=t,this.window=e,this.options=null!=n?n:{},r.__super__.constructor.apply(this,arguments)}var n;return e(r,t),r.supported=document.getElementById,r.supportedText="Chrome 10+, Firefox 4+, IE 7+, Safari 5+, Opera 8+",n="image",r.prototype.type=function(){return n},r.prototype.bindEvents=function(){return Mercury.on("mode",function(t){return function(e,r){return"preview"===r.mode?t.togglePreview():void 0}}(this)),Mercury.on("focus:frame",function(t){return function(){return t.previewing||Mercury.region!==t?void 0:t.focus()}}(this)),Mercury.on("action",function(t){return function(e,r){return t.previewing||Mercury.region!==t?void 0:r.action?t.execCommand(r.action,r):void 0}}(this)),this.element.on("dragenter",function(t){return function(e){return t.previewing?void 0:(e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy")}}(this)),this.element.on("dragover",function(t){return function(e){return t.previewing?void 0:(e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="copy")}}(this)),this.element.on("drop",function(t){return function(e){return t.previewing?void 0:e.originalEvent.dataTransfer.files.length?(e.preventDefault(),t.focus(),Mercury.uploader(e.originalEvent.dataTransfer.files[0])):void 0}}(this)),this.element.on("focus",function(t){return function(){return t.focus()}}(this))},r.prototype.togglePreview=function(){return this.previewing?(this.previewing=!1,this.element.attr(Mercury.config.regions.attribute,n),this.build()):(this.previewing=!0,this.element.removeAttr(Mercury.config.regions.attribute),Mercury.trigger("region:blurred",{region:this}))},r.prototype.focus=function(){return this.previewing?void 0:(Mercury.region=this,Mercury.trigger("region:focused",{region:this}),Mercury.trigger("region:update",{region:this}))},r.prototype.execCommand=function(t,e){var n;return null==e&&(e={}),r.__super__.execCommand.apply(this,arguments),(n=Mercury.Regions.Image.actions[t])?n.call(this,e):void 0},r.prototype.pushHistory=function(){return this.history.push({src:this.element.attr("src")})},r.prototype.updateSrc=function(t){return this.element.attr("src",t)},r.prototype.serialize=function(){return{type:n,data:this.dataAttributes(),attributes:{src:this.element.attr("src")}}},r.actions={undo:function(){var t;return(t=this.history.undo())?this.updateSrc(t.src):void 0},redo:function(){var t;return(t=this.history.redo())?this.updateSrc(t.src):void 0},insertImage:function(t){return this.updateSrc(t.value.src)}},r}(Mercury.Region)}).call(this);