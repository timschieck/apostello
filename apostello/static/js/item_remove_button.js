webpackJsonp([6],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(1),u=n(o),i=r(142),c=n(i),a=r(173),l=n(a);u["default"].render(c["default"].createElement(l["default"],{url:_url,redirect_url:_redirect_url,is_archived:_is_archived}),document.getElementById("toggle_button"))},155:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(156),u=n(o),i=function(e,t,r){u["default"].ajax({url:e,type:"POST",data:t,success:function(e){r(e)},error:function(e,t,r){console.log(e.status+": "+e.responseText),console.log(r)}})};t["default"]=i},173:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(142),l=n(a),s=r(155),f=n(s),d=function(e){function t(){o(this,t);var e=u(this,Object.getPrototypeOf(t).call(this));return e.archiveItem=e.archiveItem.bind(e),e}return i(t,e),c(t,[{key:"archiveItem",value:function(){var e=this,t=function(){window.location.href=e.props.redirect_url};(0,f["default"])(this.props.url,{archived:this.props.is_archived},t)}},{key:"render",value:function(){var e="Remove",t="ui negative button";return this.props.is_archived&&(e="Restore",t="ui positive button"),l["default"].createElement("div",{className:t,onClick:this.archiveItem},e)}}]),t}(a.Component);t["default"]=d}});
//# sourceMappingURL=item_remove_button.js.map