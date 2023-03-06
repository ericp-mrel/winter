"use strict";(self.webpackChunk_wintercms_wn_system_module=self.webpackChunk_wintercms_wn_system_module||[]).push([[243],{662:function(e,t){t.Z={get(e,t,n){if("string"==typeof t){const n=t.toLowerCase();if(e.hasPlugin(n))return function(){return Reflect.get(e,"plugins")[n].getInstance(...arguments)}}return Reflect.get(e,t,n)},has(e,t){if("string"==typeof t){const n=t.toLowerCase();if(e.hasPlugin(n))return!0}return Reflect.has(e,t)}}},878:function(e,t,n){n.d(t,{Z:function(){return b}});class i{constructor(e){this.snowboard=e}construct(){}dependencies(){return[]}listens(){return{}}destruct(){this.detach(),delete this.snowboard}destructor(){this.destruct()}}class s extends i{}var r={get(e,t,n){if("string"==typeof t){const n=t.toLowerCase();if(["attachAbstracts","loadUtilities","initialise","initialiseSingletons"].includes(t))throw new Error(`You cannot use the "${t}" Snowboard method within a plugin.`);if(e.hasPlugin(n))return function(){return Reflect.get(e,"plugins")[n].getInstance(...arguments)}}return Reflect.get(e,t,n)},has(e,t){if("string"==typeof t){const n=t.toLowerCase();if(["attachAbstracts","loadUtilities","initialise","initialiseSingletons"].includes(t))return!1;if(e.hasPlugin(n))return!0}return Reflect.has(e,t)}};class o{constructor(e,t,n){this.name=e,this.snowboard=new Proxy(t,r),this.instance=n,Object.freeze(this.instance),this.instances=[],this.singleton={initialised:!1},Object.seal(this.singleton),this.mocks={},this.originalFunctions={},Object.freeze(o.prototype),Object.freeze(this)}hasMethod(e){return!this.isFunction()&&"function"==typeof this.instance.prototype[e]}callMethod(){if(this.isFunction())return null;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=t,s=i.shift();return this.instance.prototype[s](i)}getInstance(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];if(this.isFunction())return this.instance(...n);if(!this.dependenciesFulfilled()){const e=this.getDependencies().filter((e=>!this.snowboard.getPluginNames().includes(e)));throw new Error(`The "${this.name}" plugin requires the following plugins: ${e.join(", ")}`)}if(this.isSingleton())return 0===this.instances.length&&this.initialiseSingleton(...n),Object.keys(this.mocks).length>0&&(Object.entries(this.originalFunctions).forEach((e=>{const[t,n]=e;this.instances[0][t]=n})),Object.entries(this.mocks).forEach((t=>{const[n,i]=t;this.instances[0][n]=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return i(e,...n)}}))),this.instances[0];Object.keys(this.mocks).length>0&&(Object.entries(this.originalFunctions).forEach((e=>{const[t,n]=e;this.instance.prototype[t]=n})),Object.entries(this.mocks).forEach((t=>{const[n,i]=t;this.instance.prototype[n]=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return i(e,...n)}})));const s=new this.instance(this.snowboard,...n);return s.detach=()=>this.instances.splice(this.instances.indexOf(s),1),s.construct(...n),this.loadTraits(s),this.instances.push(s),s}getInstances(){return this.isFunction()?[]:this.instances}isFunction(){return"function"==typeof this.instance&&this.instance.prototype instanceof i==!1}isSingleton(){return this.instance.prototype instanceof s==!0}isInitialised(){return!this.isSingleton()||this.singleton.initialised}initialiseSingleton(){if(!this.isSingleton())return;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const i=new this.instance(this.snowboard,...t);i.detach=()=>this.instances.splice(this.instances.indexOf(i),1),i.construct(...t),this.loadTraits(i),this.instances.push(i),this.singleton.initialised=!0}getDependencies(){return this.isFunction()||"function"!=typeof this.instance.prototype.dependencies?[]:this.instance.prototype.dependencies().map((e=>e.toLowerCase()))}dependenciesFulfilled(){const e=this.getDependencies();let t=!0;return e.forEach((e=>{this.snowboard.hasPlugin(e)||(t=!1)})),t}mock(e,t){var n=this;if(!this.isFunction()){if(!this.instance.prototype[e])throw new Error(`Function "${e}" does not exist and cannot be mocked`);this.mocks[e]=t,this.originalFunctions[e]=this.instance.prototype[e],this.isSingleton()&&0===this.instances.length&&(this.initialiseSingleton(),this.instances[0][e]=function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return t(n,...i)})}}unmock(e){this.isFunction()||this.mocks[e]&&(this.isSingleton()&&(this.instances[0][e]=this.originalFunctions[e]),delete this.mocks[e],delete this.originalFunctions[e])}loadTraits(e){const t=[];let n=e;for(;"Object"!==n.constructor.name;){if(n.traits&&"function"==typeof n.traits){const e=n.traits();Array.isArray(e)&&e.forEach((e=>{t.includes(e)||t.push(e)}))}n=Object.getPrototypeOf(n)}t.forEach((t=>{const n=new t,i=Object.keys(n).reduce(((e,t)=>(e[t]=Object.getOwnPropertyDescriptor(n,t),e)),{});Object.getOwnPropertyNames(t.prototype).forEach((e=>{if("constructor"===e)return;const n=Object.getOwnPropertyDescriptor(t.prototype,e);i[e]=n}));const s=Object.keys(i).filter((t=>void 0===e[t])).reduce(((e,t)=>(e[t]=i[t],e)),{});Object.defineProperties(e,s)}))}}var l=n(805);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class u extends s{construct(){this.defaults={expires:null,path:"/",domain:null,secure:!1,sameSite:"Lax"}}setDefaults(e){if("object"!=typeof e)throw new Error("Cookie defaults must be provided as an object");Object.entries(e).forEach((e=>{const[t,n]=e;void 0!==this.defaults[t]&&(this.defaults[t]=n)}))}getDefaults(){const e={};return Object.entries(this.defaults).forEach((t=>{const[n,i]=t;null!==this.defaults[n]&&(e[n]=i)})),e}get(e){if(void 0===e){const e=l.Z.get();return Object.entries(e).forEach((t=>{const[n,i]=t;this.snowboard.globalEvent("cookie.get",n,i,(t=>{e[n]=t}))})),e}let t=l.Z.get(e);return this.snowboard.globalEvent("cookie.get",e,t,(e=>{t=e})),t}set(e,t,n){let i=t;return this.snowboard.globalEvent("cookie.set",e,t,(e=>{i=e})),l.Z.set(e,i,h(h({},this.getDefaults()),n))}remove(e,t){l.Z.remove(e,h(h({},this.getDefaults()),t))}}class f extends s{construct(){window.wnJSON=e=>this.parse(e),window.ocJSON=window.wnJSON}parse(e){const t=this.parseString(e);return JSON.parse(t)}parseString(e){let t=e.trim();if(!t.length)throw new Error("Broken JSON object.");let n="",i=null,s=null,r="";for(;t&&","===t[0];)t=t.substr(1);if('"'===t[0]||"'"===t[0]){if(t[t.length-1]!==t[0])throw new Error("Invalid string JSON object.");r='"';for(let e=1;e<t.length;e+=1)if("\\"===t[e])"'"===t[e+1]||(r+=t[e]),r+=t[e+1],e+=1;else{if(t[e]===t[0])return r+='"',r;'"'===t[e]?r+='\\"':r+=t[e]}throw new Error("Invalid string JSON object.")}if("true"===t||"false"===t)return t;if("null"===t)return"null";const o=Number(t);if(!Number.isNaN(o))return o.toString();if("{"===t[0]){i="needKey",s=null,n="{";for(let e=1;e<t.length;e+=1)if(!this.isBlankChar(t[e]))if("needKey"!==i||'"'!==t[e]&&"'"!==t[e]){if("needKey"===i&&this.canBeKeyHead(t[e]))s=this.parseKey(t,e),n+='"',n+=s,n+='"',e+=s.length-1,i="afterKey";else if("afterKey"===i&&":"===t[e])n+=":",i=":";else if(":"===i)r=this.getBody(t,e),e=e+r.originLength-1,n+=this.parseString(r.body),i="afterBody";else if("afterBody"===i||"needKey"===i){let s=e;for(;","===t[s]||this.isBlankChar(t[s]);)s+=1;if("}"===t[s]&&s===t.length-1){for(;","===n[n.length-1];)n=n.substr(0,n.length-1);return n+="}",n}s!==e&&"{"!==n&&(n+=",",i="needKey",e=s-1)}}else s=this.parseKey(t,e+1,t[e]),n+=`"${s}"`,e+=s.length,e+=1,i="afterKey";throw new Error(`Broken JSON object near ${n}`)}if("["===t[0]){n="[",i="needBody";for(let e=1;e<t.length;e+=1)if(" "!==t[e]&&"\n"!==t[e]&&"\t"!==t[e])if("needBody"===i){if(","===t[e]){n+="null,";continue}if("]"===t[e]&&e===t.length-1)return","===n[n.length-1]&&(n=n.substr(0,n.length-1)),n+="]",n;r=this.getBody(t,e),e=e+r.originLength-1,n+=this.parseString(r.body),i="afterBody"}else if("afterBody"===i)if(","===t[e])for(n+=",",i="needBody";","===t[e+1]||this.isBlankChar(t[e+1]);)","===t[e+1]&&(n+="null,"),e+=1;else if("]"===t[e]&&e===t.length-1)return n+="]",n;throw new Error(`Broken JSON array near ${n}`)}return""}getBody(e,t){let n="";if('"'===e[t]||"'"===e[t]){n=e[t];for(let i=t+1;i<e.length;i+=1)if("\\"===e[i])n+=e[i],i+1<e.length&&(n+=e[i+1]),i+=1;else{if(e[i]===e[t])return n+=e[t],{originLength:n.length,body:n};n+=e[i]}throw new Error(`Broken JSON string body near ${n}`)}if("t"===e[t]){if(e.indexOf("true",t)===t)return{originLength:"true".length,body:"true"};throw new Error(`Broken JSON boolean body near ${e.substr(0,t+10)}`)}if("f"===e[t]){if(e.indexOf("f",t)===t)return{originLength:"false".length,body:"false"};throw new Error(`Broken JSON boolean body near ${e.substr(0,t+10)}`)}if("n"===e[t]){if(e.indexOf("null",t)===t)return{originLength:"null".length,body:"null"};throw new Error(`Broken JSON boolean body near ${e.substr(0,t+10)}`)}if("-"===e[t]||"+"===e[t]||"."===e[t]||e[t]>="0"&&e[t]<="9"){n="";for(let i=t;i<e.length;i+=1){if(!("-"===e[i]||"+"===e[i]||"."===e[i]||e[i]>="0"&&e[i]<="9"))return{originLength:n.length,body:n};n+=e[i]}throw new Error(`Broken JSON number body near ${n}`)}if("{"===e[t]||"["===e[t]){const i=[e[t]];n=e[t];for(let s=t+1;s<e.length;s+=1){if(n+=e[s],"\\"===e[s])s+1<e.length&&(n+=e[s+1]),s+=1;else if('"'===e[s])'"'===i[i.length-1]?i.pop():"'"!==i[i.length-1]&&i.push(e[s]);else if("'"===e[s])"'"===i[i.length-1]?i.pop():'"'!==i[i.length-1]&&i.push(e[s]);else if('"'!==i[i.length-1]&&"'"!==i[i.length-1])if("{"===e[s])i.push("{");else if("}"===e[s]){if("{"!==i[i.length-1])throw new Error(`Broken JSON ${"{"===e[t]?"object":"array"} body near ${n}`);i.pop()}else if("["===e[s])i.push("[");else if("]"===e[s]){if("["!==i[i.length-1])throw new Error(`Broken JSON ${"{"===e[t]?"object":"array"} body near ${n}`);i.pop()}if(!i.length)return{originLength:s-t,body:n}}throw new Error(`Broken JSON ${"{"===e[t]?"object":"array"} body near ${n}`)}throw new Error(`Broken JSON body near ${e.substr(t-5>=0?t-5:0,50)}`)}parseKey(e,t,n){let i="";for(let s=t;s<e.length;s+=1){if(n&&n===e[s])return i;if(!n&&(" "===e[s]||":"===e[s]))return i;i+=e[s],"\\"===e[s]&&s+1<e.length&&(i+=e[s+1],s+=1)}throw new Error(`Broken JSON syntax near ${i}`)}canBeKeyHead(e){return"\\"!==e[0]&&(e[0]>="a"&&e[0]<="z"||e[0]>="A"&&e[0]<="Z"||"_"===e[0]||(e[0]>="0"&&e[0]<="9"||("$"===e[0]||e.charCodeAt(0)>255)))}isBlankChar(e){return" "===e||"\n"===e||"\t"===e}}class g extends s{construct(){window.wnSanitize=e=>this.sanitize(e),window.ocSanitize=window.wnSanitize}sanitize(e,t){const n=(new DOMParser).parseFromString(e,"text/html"),i=void 0===t||"boolean"!=typeof t||t;return this.sanitizeNode(n.getRootNode()),i?n.body.innerHTML:n.innerHTML}sanitizeNode(e){if("SCRIPT"===e.tagName)return void e.remove();this.trimAttributes(e);Array.from(e.children).forEach((e=>{this.sanitizeNode(e)}))}trimAttributes(e){if(e.attributes)for(let t=0;t<e.attributes.length;t+=1){const n=e.attributes.item(t).name,i=e.attributes.item(t).value;0!==n.indexOf("on")&&0!==i.indexOf("javascript:")||e.removeAttribute(n)}}}class d extends s{construct(){this.foundBaseUrl=null,this.baseUrl()}to(e){if(e.match(/[-a-z0-9_+:]+:\/\/[-a-z0-9@:%._+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-a-z0-9()@:%_+.~#?&//=]*)/i))return e;const t=e.replace(/^\/+/,"");return`${this.baseUrl()}${t}`}baseUrl(){if(null!==this.foundBaseUrl)return this.foundBaseUrl;if(null!==document.querySelector('script[data-module="snowboard-base"]'))return this.foundBaseUrl=this.validateBaseUrl(document.querySelector('script[data-module="snowboard-base"]').dataset.baseUrl),this.foundBaseUrl;if(null!==document.querySelector("base"))return this.foundBaseUrl=this.validateBaseUrl(document.querySelector("base").getAttribute("href")),this.foundBaseUrl;const e=[window.location.protocol,"//",window.location.host,"/"];return this.foundBaseUrl=e.join(""),this.foundBaseUrl}validateBaseUrl(e){const t=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/i.exec(e),n=t[2],i=t[4];if(n&&-1===["http","https"].indexOf(n.toLowerCase()))throw new Error("Invalid base URL detected");if(!i)throw new Error("Invalid base URL detected");return"/"===e.substr(-1)?e:`${e}/`}}class b{constructor(e,t){this.debugEnabled="boolean"==typeof t&&!0===t,this.autoInitSingletons="boolean"==typeof e&&!1===e,this.plugins={},this.listeners={},this.foundBaseUrl=null,this.readiness={dom:!1},Object.seal(this.readiness),this.attachAbstracts(),Object.freeze(b.prototype),Object.freeze(this),this.loadUtilities(),this.initialise(),this.debug("Snowboard framework initialised")}attachAbstracts(){this.PluginBase=i,this.Singleton=s,Object.freeze(this.PluginBase.prototype),Object.freeze(this.PluginBase),Object.freeze(this.Singleton.prototype),Object.freeze(this.Singleton)}loadUtilities(){this.addPlugin("cookie",u),this.addPlugin("jsonParser",f),this.addPlugin("sanitizer",g),this.addPlugin("url",d)}initialise(){window.addEventListener("DOMContentLoaded",(()=>{this.autoInitSingletons&&this.initialiseSingletons(),this.globalEvent("ready"),this.readiness.dom=!0}))}initialiseSingletons(){Object.values(this.plugins).forEach((e=>{e.isSingleton()&&e.dependenciesFulfilled()&&e.initialiseSingleton()}))}addPlugin(e,t){const n=e.toLowerCase();if(this.hasPlugin(n))throw new Error(`A plugin called "${e}" is already registered.`);if("function"!=typeof t&&t instanceof i==!1)throw new Error("The provided plugin must extend the PluginBase class, or must be a callback function.");if(void 0!==this[e]||void 0!==this[n])throw new Error("The given name is already in use for a property or method of the Snowboard class.");this.plugins[n]=new o(n,this,t),this.debug(`Plugin "${e}" registered`),Object.values(this.getPlugins()).forEach((e=>{if(e.isSingleton()&&!e.isInitialised()&&e.dependenciesFulfilled()&&e.hasMethod("listens")&&Object.keys(e.callMethod("listens")).includes("ready")&&this.readiness.dom){const t=e.callMethod("listens").ready;e.callMethod(t)}}))}removePlugin(e){const t=e.toLowerCase();this.hasPlugin(t)?(this.plugins[t].getInstances().forEach((e=>{e.destruct()})),delete this.plugins[t],delete this[t],delete this[e],this.debug(`Plugin "${e}" removed`)):this.debug(`Plugin "${e}" already removed`)}hasPlugin(e){const t=e.toLowerCase();return void 0!==this.plugins[t]}getPlugins(){return this.plugins}getPluginNames(){return Object.keys(this.plugins)}getPlugin(e){const t=e.toLowerCase();if(!this.hasPlugin(t))throw new Error(`No plugin called "${t}" has been registered.`);return this.plugins[t]}listensToEvent(e){const t=[];return Object.entries(this.plugins).forEach((n=>{const[i,s]=n;if(s.isFunction())return;if(!s.dependenciesFulfilled())return;if(!s.hasMethod("listens"))return;const r=s.callMethod("listens");"string"!=typeof r[e]&&"function"!=typeof r[e]||t.push(i)})),t}ready(e){this.readiness.dom&&e(),this.on("ready",e)}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].includes(t)||this.listeners[e].push(t)}off(e,t){if(!this.listeners[e])return;const n=this.listeners[e].indexOf(t);-1!==n&&this.listeners[e].splice(n,1)}globalEvent(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.debug(`Calling global event "${e}"`,...n);const s=this.listensToEvent(e);if(0===s.length)return this.debug(`No listeners found for global event "${e}"`),!0;this.debug(`Listeners found for global event "${e}": ${s.join(", ")}`);let r=!1;return s.forEach((t=>{const i=this.getPlugin(t);if(i.isFunction())return;i.isSingleton()&&0===i.getInstances().length&&i.initialiseSingleton();const s=i.callMethod("listens")[e];i.getInstances().forEach((i=>{if(!r)if("function"==typeof s)try{!1===s.apply(i,n)&&(r=!0)}catch(n){this.error(`Error thrown in "${e}" event by "${t}" plugin.`,n)}else if("string"==typeof s){if(!i[s])throw new Error(`Missing "${s}" method in "${t}" plugin`);try{!1===i[s](...n)&&(r=!0,this.debug(`Global event "${e}" cancelled by "${t}" plugin`))}catch(n){this.error(`Error thrown in "${e}" event by "${t}" plugin.`,n)}}else this.error(`Listen method for "${e}" event in "${t}" plugin is not a function or string.`)}))})),!r&&this.listeners[e]&&this.listeners[e].length>0&&(this.debug(`Found ${this.listeners[e].length} ad-hoc listener(s) for global event "${e}"`),this.listeners[e].forEach((t=>{if(!r)try{!1===t(...n)&&(r=!0,this.debug(`Global event "${e} cancelled by an ad-hoc listener.`))}catch(t){this.error(`Error thrown in "${e}" event by an ad-hoc listener.`,t)}}))),!r}globalPromiseEvent(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.debug(`Calling global promise event "${e}"`);const s=this.listensToEvent(e);if(0===s.length)return this.debug(`No listeners found for global promise event "${e}"`),Promise.resolve();this.debug(`Listeners found for global promise event "${e}": ${s.join(", ")}`);const r=[];return s.forEach((t=>{const i=this.getPlugin(t);if(i.isFunction())return;i.isSingleton()&&0===i.getInstances().length&&i.initialiseSingleton();const s=i.callMethod("listens")[e];i.getInstances().forEach((i=>{if("function"==typeof s)try{const e=s.apply(i,n);if(e instanceof Promise==!1)return;r.push(e)}catch(n){this.error(`Error thrown in "${e}" event by "${t}" plugin.`,n)}else if("string"==typeof s){if(!i[s])throw new Error(`Missing "${s}" method in "${t}" plugin`);try{const e=i[s](...n);if(e instanceof Promise==!1)return;r.push(e)}catch(n){this.error(`Error thrown in "${e}" promise event by "${t}" plugin.`,n)}}else this.error(`Listen method for "${e}" event in "${t}" plugin is not a function or string.`)}))})),this.listeners[e]&&this.listeners[e].length>0&&(this.debug(`Found ${this.listeners[e].length} ad-hoc listener(s) for global promise event "${e}"`),this.listeners[e].forEach((t=>{try{const e=t(...n);if(e instanceof Promise==!1)return;r.push(e)}catch(t){this.error(`Error thrown in "${e}" promise event by an ad-hoc listener.`,t)}}))),0===r.length?Promise.resolve():Promise.all(r)}logMessage(e,t,n){console.groupCollapsed("%c[Snowboard]",`color: ${e}; font-weight: ${t?"bold":"normal"};`,n);for(var i=arguments.length,s=new Array(i>3?i-3:0),r=3;r<i;r++)s[r-3]=arguments[r];if(s.length){console.groupCollapsed(`%cParameters %c(${s.length})`,"color: rgb(45, 167, 199); font-weight: bold;","color: rgb(88, 88, 88); font-weight: normal;");let e=0;s.forEach((t=>{e+=1,console.log(`%c${e}:`,"color: rgb(88, 88, 88); font-weight: normal;",t)})),console.groupEnd(),console.groupCollapsed("%cTrace","color: rgb(45, 167, 199); font-weight: bold;"),console.trace(),console.groupEnd()}else console.trace();console.groupEnd()}log(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.logMessage("rgb(45, 167, 199)",!1,e,...n)}debug(e){if(this.debugEnabled){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.logMessage("rgb(45, 167, 199)",!1,e,...n)}}error(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.logMessage("rgb(229, 35, 35)",!0,e,...n)}}},236:function(e,t,n){var i=n(878),s=n(662);(e=>{const t=new Proxy(new i.Z,s.Z);e.snowboard=t,e.Snowboard=t,e.SnowBoard=t})(window)}},function(e){e.O(0,[109],(function(){return t=236,e(e.s=t);var t}));e.O()}]);