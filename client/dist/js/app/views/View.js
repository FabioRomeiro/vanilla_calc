"use strict";System.register([],function(e,t){return{setters:[],execute:function(){System.register([],function(e,t){var n,r;return{setters:[],execute:function(){n=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),e("View",r=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=e}return n(t,[{key:"template",value:function(e){throw new Error('A view class must have a "template" method')}},{key:"update",value:function(e){this._element.innerHTML=this.template(e)}}]),t}()),e("View",r)}}})}}});
//# sourceMappingURL=View.js.map
