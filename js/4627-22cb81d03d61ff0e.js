(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4627,2435,8074,6458,2351,4901,713,7958],{68074:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(11720),o=n(77053),s=n(19416),i=n.n(s),c=e=>void 0!==r.default.Children.toArray(e).find(e=>!!r.default.isValidElement(e)&&("DynamicUse"===e.type.displayName||e?.type==="use")),a=(e,t)=>t?`${e}?id=${t}&embed#icon`:`${e}?embed#icon`,u=function({relativeUrl:e,innerRef:t,name:n,children:r,...s}){let i=c(r);return(0,o.BX)("svg",{ref:t,...s,"data-dynamic-svg":!0,children:[r,!i&&(0,o.tZ)("use",{href:a(e,n)})]})},l=i()("dynamic-svg-react:error");function f({name:e,url:t,primary:n,secondary:r,tertiary:s,priority:i,innerRef:c,...a}){return(0,o.tZ)("img",{"data-dynamic-svg":!0,src:function(e,t,n){let r=`${e}?primary=${t}`;Object.entries(n).forEach(e=>{var t,n,o;t=r,n=e[0],r=(o=e[1])?`${t}&${n}=${o}`:t});try{return encodeURI(r)}catch(e){return l(`error encoding URI: ${r}`),r}}(t,n,{secondary:r,tertiary:s,id:e}),ref:c,loading:"high"===i?void 0:"lazy",fetchpriority:"high"===i||"low"===i?i:void 0,...a})}function d({relativeUrl:e,primary:t,secondary:n,tertiary:r,priority:s,name:i,innerRef:c,children:a,...l}){return t?(0,o.tZ)(f,{name:i,url:e,primary:t,secondary:n,tertiary:r,priority:s,innerRef:c,...l}):(0,o.tZ)(u,{name:i,innerRef:c,relativeUrl:e,...l,children:a})}},19416:function(e,t,n){let r;var o=n(34155);t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=o.env.DEBUG),e},t.useColors=function(){return"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(r=!1,()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(21805)(t);let{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},21805:function(e,t,n){e.exports=function(e){function t(e){let n,o,s;let i=null;function c(...e){if(!c.enabled)return;let r=c,o=Number(new Date),s=o-(n||o);r.diff=s,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return"%";i++;let s=t.formatters[o];if("function"==typeof s){let t=e[i];n=s.call(r,t),e.splice(i,1),i--}return n}),t.formatArgs.call(r,e);let a=r.log||t.log;a.apply(r,e)}return c.namespace=e,c.useColors=t.useColors(),c.color=t.selectColor(e),c.extend=r,c.destroy=t.destroy,Object.defineProperty(c,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(o!==t.namespaces&&(o=t.namespaces,s=t.enabled(e)),s),set:e=>{i=e}}),"function"==typeof t.init&&t.init(c),c}function r(e,n){let r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){let e=[...t.names.map(o),...t.skips.map(o).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];let r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.slice(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){let n,r;if("*"===e[e.length-1])return!0;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(74279),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(n=>{t[n]=e[n]}),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t)|0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},74279:function(e){function t(e,t,n,r){return Math.round(e/n)+" "+r+(t>=1.5*n?"s":"")}e.exports=function(e,n){n=n||{};var r,o,s=typeof e;if("string"===s&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*n;case"weeks":case"week":case"w":return 6048e5*n;case"days":case"day":case"d":return 864e5*n;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*n;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*n;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}(e);if("number"===s&&isFinite(e))return n.long?(r=Math.abs(e))>=864e5?t(e,r,864e5,"day"):r>=36e5?t(e,r,36e5,"hour"):r>=6e4?t(e,r,6e4,"minute"):r>=1e3?t(e,r,1e3,"second"):e+" ms":(o=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":o>=36e5?Math.round(e/36e5)+"h":o>=6e4?Math.round(e/6e4)+"m":o>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},2435:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{useNetworkStatus:function(){return a}});var o=n(95258),s=n(11720);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let a=e=>{r=!("undefined"!=typeof navigator&&"connection"in navigator)||!("effectiveType"in navigator.connection);let t={unsupported:r,effectiveConnectionType:r?e:navigator.connection.effectiveType},{0:n,1:o}=(0,s.useState)(t);return(0,s.useEffect)(()=>{if(!r){let e=navigator.connection,t=()=>{o({effectiveConnectionType:e.effectiveType})};return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}},[]),c(c({},n),{},{setNetworkStatus:o})}},87988:function(e,t,n){"use strict";let r;n.d(t,{K:function(){return o}});let o=(e=null)=>({unsupported:r=!("undefined"!=typeof navigator&&"connection"in navigator)||!("saveData"in navigator.connection),saveData:r?e:!0===navigator.connection.saveData})},9008:function(e,t,n){e.exports=n(11597)},34155:function(e){var t,n,r,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a=[],u=!1,l=-1;function f(){u&&r&&(u=!1,r.length?a=r.concat(a):l=-1,a.length&&d())}function d(){if(!u){var e=c(f);u=!0;for(var t=a.length;t;){for(r=a,a=[];++l<t;)r&&r[l].run();l=-1,t=a.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function C(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new C(e,t)),1!==a.length||u||c(d)},C.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);