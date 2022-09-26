!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Typewriter",[],t):"object"==typeof exports?exports.Typewriter=t():e.Typewriter=t()}("undefined"!=typeof self?self:this,()=>{var n={75:function(s){!function(){var e,t,n,r,o,a;"undefined"!=typeof performance&&null!==performance&&performance.now?s.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(s.exports=function(){return(e()-o)/1e6},t=process.hrtime,r=(e=function(){var e;return 1e9*(e=t())[0]+e[1]})(),a=1e9*process.uptime(),o=r-a):n=Date.now?(s.exports=function(){return Date.now()-n},Date.now()):(s.exports=function(){return(new Date).getTime()-n},(new Date).getTime())}.call(this)},4087:(e,t,n)=>{for(var r,o,a,s=n(75),i="undefined"==typeof window?n.g:window,u=["moz","webkit"],l="AnimationFrame",c=i["request"+l],p=i["cancel"+l]||i["cancelRequest"+l],d=0;!c&&d<u.length;d++)c=i[u[d]+"Request"+l],p=i[u[d]+"Cancel"+l]||i[u[d]+"CancelRequest"+l];c&&p||(o=r=0,a=[],c=function(e){var t,n;return 0===a.length&&(t=s(),n=Math.max(0,16.666666666666668-(t-r)),r=n+t,setTimeout(function(){for(var e=a.slice(0),t=a.length=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(r)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))),a.push({handle:++o,callback:e,cancelled:!1}),o},p=function(e){for(var t=0;t<a.length;t++)a[t].handle===e&&(a[t].cancelled=!0)}),e.exports=function(e){return c.call(i,e)},e.exports.cancel=function(){p.apply(i,arguments)},e.exports.polyfill=function(e){(e=e||i).requestAnimationFrame=c,e.cancelAnimationFrame=p}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;t=r[e]={exports:{}};return n[e].call(t.exports,t,t.exports,o),t.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var t={};return(()=>{"use strict";o.d(t,{default:()=>e});var s=o(4087),v=o.n(s);function i(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)}function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}var m="TYPE_CHARACTER",y="REMOVE_CHARACTER",g="REMOVE_ALL",E="REMOVE_LAST_VISIBLE_NODE",w="PAUSE_FOR",T="CALL_FUNCTION",b="ADD_HTML_TAG_ELEMENT",A="CHANGE_DELETE_SPEED",N="CHANGE_DELAY",S="CHANGE_CURSOR",C="PASTE_STRING",_="HTML_TAG";function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function L(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}()||function(e){if(e){if("string"==typeof e)return n(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}const e=function(){function r(e,t){var f=this;if(!(this instanceof r))throw new TypeError("Cannot call a class as a function");if(u(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),u(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),u(this,"setupWrapperElement",function(){f.state.elements.container&&(f.state.elements.wrapper.className=f.options.wrapperClassName,f.state.elements.cursor.className=f.options.cursorClassName,f.state.elements.cursor.innerHTML=f.options.cursor,f.state.elements.container.innerHTML="",f.state.elements.container.appendChild(f.state.elements.wrapper),f.state.elements.container.appendChild(f.state.elements.cursor))}),u(this,"start",function(){return f.state.eventLoopPaused=!1,f.runEventLoop(),f}),u(this,"pause",function(){return f.state.eventLoopPaused=!0,f}),u(this,"stop",function(){return f.state.eventLoop&&((0,s.cancel)(f.state.eventLoop),f.state.eventLoop=null),f}),u(this,"pauseFor",function(e){return f.addEventToQueue(w,{ms:e}),f}),u(this,"typeOutAllStrings",function(){return"string"==typeof f.options.strings?f.typeString(f.options.strings).pauseFor(f.options.pauseFor):f.options.strings.forEach(function(e){f.typeString(e).pauseFor(f.options.pauseFor).deleteAll(f.options.deleteSpeed)}),f}),u(this,"typeString",function(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return i(e)?f.typeOutHTMLString(e,n):(e&&(t="function"==typeof(t=(f.options||{}).stringSplitter)?t(e):e.split(""),f.typeCharacters(t,n)),f)}),u(this,"pasteString",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return i(e)?f.typeOutHTMLString(e,t,!0):(e&&f.addEventToQueue(C,{character:e,node:t}),f)}),u(this,"typeOutHTMLString",function(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,r=2<arguments.length?arguments[2]:void 0,o=(e=e,(t=document.createElement("div")).innerHTML=e,t.childNodes);if(0<o.length)for(var a=0;a<o.length;a++){var s=o[a],i=s.innerHTML;s&&3!==s.nodeType?(s.innerHTML="",f.addEventToQueue(b,{node:s,parentNode:n}),r?f.pasteString(i,s):f.typeString(i,s)):s.textContent&&(r?f.pasteString(s.textContent,n):f.typeString(s.textContent,n))}return f}),u(this,"deleteAll",function(){return f.addEventToQueue(g,{speed:0<arguments.length&&void 0!==arguments[0]?arguments[0]:"natural"}),f}),u(this,"changeDeleteSpeed",function(e){if(e)return f.addEventToQueue(A,{speed:e}),f;throw new Error("Must provide new delete speed")}),u(this,"changeDelay",function(e){if(e)return f.addEventToQueue(N,{delay:e}),f;throw new Error("Must provide new delay")}),u(this,"changeCursor",function(e){if(e)return f.addEventToQueue(S,{cursor:e}),f;throw new Error("Must provide new cursor")}),u(this,"deleteChars",function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)f.addEventToQueue(y);return f}),u(this,"callFunction",function(e,t){if(e&&"function"==typeof e)return f.addEventToQueue(T,{cb:e,thisArg:t}),f;throw new Error("Callbak must be a function")}),u(this,"typeCharacters",function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(e&&Array.isArray(e))return e.forEach(function(e){f.addEventToQueue(m,{character:e,node:t})}),f;throw new Error("Characters must be an array")}),u(this,"removeCharacters",function(e){if(e&&Array.isArray(e))return e.forEach(function(){f.addEventToQueue(y)}),f;throw new Error("Characters must be an array")}),u(this,"addEventToQueue",function(e,t){return f.addEventToStateProperty(e,t,2<arguments.length&&void 0!==arguments[2]&&arguments[2],"eventQueue")}),u(this,"addReverseCalledEvent",function(e,t){return f.options.loop?f.addEventToStateProperty(e,t,2<arguments.length&&void 0!==arguments[2]&&arguments[2],"reverseCalledEvents"):f}),u(this,"addEventToStateProperty",function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],r=3<arguments.length?arguments[3]:void 0,e={eventName:e,eventArgs:t||{}};return f.state[r]=n?[e].concat(L(f.state[r])):[].concat(L(f.state[r]),[e]),f}),u(this,"runEventLoop",function(){f.state.lastFrameTime||(f.state.lastFrameTime=Date.now());var e=Date.now(),t=e-f.state.lastFrameTime;if(!f.state.eventQueue.length){if(!f.options.loop)return;f.state.eventQueue=L(f.state.calledEvents),f.state.calledEvents=[],f.options=O({},f.state.initialOptions)}if(f.state.eventLoop=v()(f.runEventLoop),!f.state.eventLoopPaused){if(f.state.pauseUntil){if(e<f.state.pauseUntil)return;f.state.pauseUntil=null}var n=L(f.state.eventQueue),r=n.shift();if(!(t<=(t=r.eventName===E||r.eventName===y?"natural"===f.options.deleteSpeed?h(40,80):f.options.deleteSpeed:"natural"===f.options.delay?h(120,160):f.options.delay))){var o=r.eventName,a=r.eventArgs;switch(f.logInDevMode({currentEvent:r,state:f.state,delay:t}),o){case C:case m:var s=a.character,i=a.node,u=document.createTextNode(s),l=u;(l=f.options.onCreateTextNode&&"function"==typeof f.options.onCreateTextNode?f.options.onCreateTextNode(s,u):l)&&(i||f.state.elements.wrapper).appendChild(l),f.state.visibleNodes=[].concat(L(f.state.visibleNodes),[{type:"TEXT_NODE",character:s,node:l}]);break;case y:n.unshift({eventName:E,eventArgs:{removingCharacterNode:!0}});break;case w:u=r.eventArgs.ms;f.state.pauseUntil=Date.now()+parseInt(u);break;case T:i=r.eventArgs,s=i.cb,l=i.thisArg;s.call(l,{elements:f.state.elements});break;case b:u=r.eventArgs,i=u.node,s=u.parentNode;(s||f.state.elements.wrapper).appendChild(i),f.state.visibleNodes=[].concat(L(f.state.visibleNodes),[{type:_,node:i,parentNode:s||f.state.elements.wrapper}]);break;case g:var l=f.state.visibleNodes,u=a.speed,c=[];u&&c.push({eventName:A,eventArgs:{speed:u,temp:!0}});for(var p=0,d=l.length;p<d;p++)c.push({eventName:E,eventArgs:{removingCharacterNode:!1}});u&&c.push({eventName:A,eventArgs:{speed:f.options.deleteSpeed,temp:!0}}),n.unshift.apply(n,c);break;case E:i=r.eventArgs.removingCharacterNode;f.state.visibleNodes.length&&(l=(s=f.state.visibleNodes.pop()).type,u=s.node,s=s.character,f.options.onRemoveNode&&"function"==typeof f.options.onRemoveNode&&f.options.onRemoveNode({node:u,character:s}),u&&u.parentNode.removeChild(u),l===_&&i&&n.unshift({eventName:E,eventArgs:{}}));break;case A:f.options.deleteSpeed=r.eventArgs.speed;break;case N:f.options.delay=r.eventArgs.delay;break;case S:f.options.cursor=r.eventArgs.cursor,f.state.elements.cursor.innerHTML=r.eventArgs.cursor}!f.options.loop||r.eventName===E||r.eventArgs&&r.eventArgs.temp||(f.state.calledEvents=[].concat(L(f.state.calledEvents),[r])),f.state.eventQueue=n,f.state.lastFrameTime=e}}}),e)if("string"==typeof e){var n=document.querySelector(e);if(!n)throw new Error("Could not find container element");this.state.elements.container=n}else this.state.elements.container=e;t&&(this.options=O(O({},this.options),t)),this.state.initialOptions=O({},this.options),this.init()}for(var e=r,t=e.prototype,n=[{key:"init",value:function(){var e;this.setupWrapperElement(),this.addEventToQueue(S,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((e=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(e),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}],o=0;o<n.length;o++){var a=n[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}return Object.defineProperty(e,"prototype",{writable:!1}),r}()})(),t.default});