(function(){this.Mercury.dialogHandlers.formatblock=function(){return this.element.find("[data-tag]").on("click",function(){return function(t){var r;return r=jQuery(t.target).data("tag"),Mercury.trigger("action",{action:"formatblock",value:r})}}(this))}}).call(this);