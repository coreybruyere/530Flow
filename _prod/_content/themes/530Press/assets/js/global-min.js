!function(a){var b={common:{init:function(){console.log("hi")}},home:{init:function(){}},admin_bar:{init:function(){console.log("wtf")}}},c={fire:function(a,c,d){var e=b;c=void 0===c?"init":c,""!==a&&e[a]&&"function"==typeof e[a][c]&&e[a][c](d)},loadEvents:function(){c.fire("common"),a.each(document.body.className.replace(/-/g,"_").split(/\s+/),function(a,b){c.fire(b)})}};a(document).ready(c.loadEvents)}(jQuery);