(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{Themes:()=>a,components:()=>M,setSelectedTheme:()=>n});var n={};e.r(n),e.d(n,{default:()=>S,getUrls:()=>T,setStyle:()=>A,setTheme:()=>w,setThemeFromID:()=>N});const o=flarum.core.compat["common/app"];var r=e.n(o);const a={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return r().forum.attribute("fof-nightmode.default_theme")||0}},i=flarum.core.compat["common/extend"],s=flarum.core.compat["common/components/Page"];var c=e.n(s);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(null,arguments)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function u(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function f(){return function(e){for(var t,n={},o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e?e.split("; "):[]);!(t=o()).done;){var r=t.value.split("="),a=r.slice(1).join("=");'"'===a[0]&&(a=a.slice(1,-1));try{n[decodeURIComponent(r[0])]=a.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)}catch(e){}}return n}(document.cookie)}function h(e,t,n){document.cookie=function(e,t,n){return encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=Math.min(Date.now()+864e5*e.expires,864e13);e.expires=new Date(t)}return u("Expires",e.expires?e.expires.toUTCString():"")+u("Domain",e.domain)+u("Path",e.path)+u("Secure",e.secure)+u("Partitioned",e.partitioned)+u("SameSite",e.sameSite)}(n)}(e,t,l({path:"/"},n))}var g="flarum_nightmode",p=function(){var e,t=(e=g,f()[e]);return t||"0"===t?Number(t):a.DEFAULT()},v=function(e){return h(g,e,{sameSite:"lax",secure:"https:"===location.protocol||void 0})};function y(){var e=Array.from(new Set(Object.values(a))),t=p();isNaN(t)?b("Theme is not a valid integer! Resetting..."):e.includes(t)||b("Theme is out of bounds! Resetting...")}function b(e){console.warn(e),v(a.DEFAULT())}function _(){var e,t=r().session.user,n=!t||!!t.preferences().fofNightMode_perDevice,o=t&&t.preferences().fofNightMode;return n?e=p():"number"==typeof o&&-1!==o&&(e=o),"number"==typeof e?e:a.DEFAULT()}function S(){(0,i.extend)(c().prototype,"oninit",w),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",w)}function w(){var e,t=r().session.user,n=null==(e=r().session.user)?void 0:e.preferences().fofNightMode_perDevice;t&&!n||y(),n&&y(),N(_())}function T(){return{day:r().data["fof-nightmode.assets.day"],night:r().data["fof-nightmode.assets.night"]}}function N(e){e===a.DARK?A("night"):e===a.LIGHT?A("day"):A(window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day")}function A(e){var t=document.querySelector("link.nightmode-light[rel=stylesheet]"),n=document.querySelector("link.nightmode-dark[rel=stylesheet]");e:if(t&&n){if(_()===a.AUTO)break e;var o=document.createElement("link");"onload"in o?o.onload=function(){t.remove(),n.remove()}:(t.remove(),n.remove()),o.rel="stylesheet",o.className="nightmode",o.href=T()[e],document.head.append(o)}else{var r=t||n||document.querySelector("link.nightmode[rel=stylesheet]"),i=T()[e];i!==r.href&&(r.href=i,r.className="nightmode")}var s=document.querySelector('meta[name="color-scheme"]');s&&(s.content="night"===e?"dark":"light");var m=new CustomEvent("fofnightmodechange",{detail:e});document.dispatchEvent(m)}const O=flarum.core.compat["admin/app"];var I=e.n(O);function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}const C=flarum.core.compat["admin/components/ExtensionPage"];var D=e.n(C);const P=flarum.core.compat["common/utils/ItemList"];var U=e.n(P);const E=flarum.core.compat["common/utils/extractText"];var j=e.n(E),k=function(e){function t(){return e.apply(this,arguments)||this}var n,o;o=e,(n=t).prototype=Object.create(o.prototype),n.prototype.constructor=n,x(n,o);var r=t.prototype;return r.content=function(){return m("div",{className:"NightmodeSettingsPage"},m("div",{className:"container"},m("div",{className:"NightmodeSettingsTabPage NightmodeSettingsPage--settings"},m("div",{className:"Form"},this.settingsItems().toArray(),m("div",{className:"Form-group"},this.submitButton())))))},r.settingsItems=function(){var e=new(U());return e.add("general",m("div",{className:"Section"},m("h3",null,I().translator.trans("fof-nightmode.admin.settings.general.heading")),m("p",{className:"helpText"},I().translator.trans("fof-nightmode.admin.settings.general.help")),this.generalItems().toArray())),e},r.generalItems=function(){var e=new(U());return e.add("header-toggle",this.buildSettingComponent({label:I().translator.trans("fof-nightmode.admin.settings.modal.always_show_theme_toggle_on_header"),setting:"fofNightMode.show_theme_toggle_on_header_always",type:"switch"})),e.add("icon-style",this.buildSettingComponent({label:I().translator.trans("fof-nightmode.admin.settings.modal.show_theme_toggle_in_solid"),setting:"fofNightMode.show_theme_toggle_in_solid",type:"switch"})),e.add("default-theme",this.buildSettingComponent({label:I().translator.trans("fof-nightmode.admin.settings.modal.default_theme"),help:I().translator.trans("fof-nightmode.admin.settings.modal.default_theme_helper"),setting:"fof-nightmode.default_theme",type:"select",options:this.populateThemes()})),e},r.populateThemes=function(){var e={};return Object.keys(a).forEach((function(t,n){"DEFAULT"!==t&&(e[n]=j()(I().translator.trans("fof-nightmode.admin.settings.modal.theme_"+t.toLowerCase())))})),e},t}(D()),M={NightmodeSettingsPage:k};I().initializers.add("fof-nightmode",(function(){I().extensionData.for("fof-nightmode").registerPage(k),S()}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map