"use strict";System.register([],function(t,e){return{setters:[],execute:function(){System.register(["./View"],function(t,e){var n,r,o;return{setters:[function(t){n=t.View}],execute:function(){r=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),t("DisplayView",o=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n),r(e,[{key:"template",value:function(t){return'\n            <p class="vanilla-calculator__last-text" data-display="last">'+t.last+'</p>\n            <h3 class="vanilla-calculator__actual-text" data-display="current">'+t.current+"</h3>\n        "}}]),e}()),t("DisplayView",o)}}})}}});
//# sourceMappingURL=DisplayView.js.map
