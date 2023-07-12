import{bu as H,bt as y,bm as G,k as D,c as m,f as v,bl as z}from"./index-321a69c9.js";function L(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function F(l,r){for(var e="",n=0,s=-1,a=0,t,i=0;i<=l.length;++i){if(i<l.length)t=l.charCodeAt(i);else{if(t===47)break;t=47}if(t===47){if(!(s===i-1||a===1))if(s!==i-1&&a===2){if(e.length<2||n!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var f=e.lastIndexOf("/");if(f!==e.length-1){f===-1?(e="",n=0):(e=e.slice(0,f),n=e.length-1-e.lastIndexOf("/")),s=i,a=0;continue}}else if(e.length===2||e.length===1){e="",n=0,s=i,a=0;continue}}r&&(e.length>0?e+="/..":e="..",n=2)}else e.length>0?e+="/"+l.slice(s+1,i):e=l.slice(s+1,i),n=i-s-1;s=i,a=0}else t===46&&a!==-1?++a:a=-1}return e}function U(l,r){var e=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return e?e===r.root?e+n:e+l+n:n}var A={resolve:function(){for(var r="",e=!1,n,s=arguments.length-1;s>=-1&&!e;s--){var a;s>=0?a=arguments[s]:(n===void 0&&(n=process.cwd()),a=n),L(a),a.length!==0&&(r=a+"/"+r,e=a.charCodeAt(0)===47)}return r=F(r,!e),e?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(r){if(L(r),r.length===0)return".";var e=r.charCodeAt(0)===47,n=r.charCodeAt(r.length-1)===47;return r=F(r,!e),r.length===0&&!e&&(r="."),r.length>0&&n&&(r+="/"),e?"/"+r:r},isAbsolute:function(r){return L(r),r.length>0&&r.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var r,e=0;e<arguments.length;++e){var n=arguments[e];L(n),n.length>0&&(r===void 0?r=n:r+="/"+n)}return r===void 0?".":A.normalize(r)},relative:function(r,e){if(L(r),L(e),r===e||(r=A.resolve(r),e=A.resolve(e),r===e))return"";for(var n=1;n<r.length&&r.charCodeAt(n)===47;++n);for(var s=r.length,a=s-n,t=1;t<e.length&&e.charCodeAt(t)===47;++t);for(var i=e.length,f=i-t,h=a<f?a:f,u=-1,c=0;c<=h;++c){if(c===h){if(f>h){if(e.charCodeAt(t+c)===47)return e.slice(t+c+1);if(c===0)return e.slice(t+c)}else a>h&&(r.charCodeAt(n+c)===47?u=c:c===0&&(u=0));break}var T=r.charCodeAt(n+c),S=e.charCodeAt(t+c);if(T!==S)break;T===47&&(u=c)}var d="";for(c=n+u+1;c<=s;++c)(c===s||r.charCodeAt(c)===47)&&(d.length===0?d+="..":d+="/..");return d.length>0?d+e.slice(t+u):(t+=u,e.charCodeAt(t)===47&&++t,e.slice(t))},_makeLong:function(r){return r},dirname:function(r){if(L(r),r.length===0)return".";for(var e=r.charCodeAt(0),n=e===47,s=-1,a=!0,t=r.length-1;t>=1;--t)if(e=r.charCodeAt(t),e===47){if(!a){s=t;break}}else a=!1;return s===-1?n?"/":".":n&&s===1?"//":r.slice(0,s)},basename:function(r,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');L(r);var n=0,s=-1,a=!0,t;if(e!==void 0&&e.length>0&&e.length<=r.length){if(e.length===r.length&&e===r)return"";var i=e.length-1,f=-1;for(t=r.length-1;t>=0;--t){var h=r.charCodeAt(t);if(h===47){if(!a){n=t+1;break}}else f===-1&&(a=!1,f=t+1),i>=0&&(h===e.charCodeAt(i)?--i===-1&&(s=t):(i=-1,s=f))}return n===s?s=f:s===-1&&(s=r.length),r.slice(n,s)}else{for(t=r.length-1;t>=0;--t)if(r.charCodeAt(t)===47){if(!a){n=t+1;break}}else s===-1&&(a=!1,s=t+1);return s===-1?"":r.slice(n,s)}},extname:function(r){L(r);for(var e=-1,n=0,s=-1,a=!0,t=0,i=r.length-1;i>=0;--i){var f=r.charCodeAt(i);if(f===47){if(!a){n=i+1;break}continue}s===-1&&(a=!1,s=i+1),f===46?e===-1?e=i:t!==1&&(t=1):e!==-1&&(t=-1)}return e===-1||s===-1||t===0||t===1&&e===s-1&&e===n+1?"":r.slice(e,s)},format:function(r){if(r===null||typeof r!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof r);return U("/",r)},parse:function(r){L(r);var e={root:"",dir:"",base:"",ext:"",name:""};if(r.length===0)return e;var n=r.charCodeAt(0),s=n===47,a;s?(e.root="/",a=1):a=0;for(var t=-1,i=0,f=-1,h=!0,u=r.length-1,c=0;u>=a;--u){if(n=r.charCodeAt(u),n===47){if(!h){i=u+1;break}continue}f===-1&&(h=!1,f=u+1),n===46?t===-1?t=u:c!==1&&(c=1):t!==-1&&(c=-1)}return t===-1||f===-1||c===0||c===1&&t===f-1&&t===i+1?f!==-1&&(i===0&&s?e.base=e.name=r.slice(1,f):e.base=e.name=r.slice(i,f)):(i===0&&s?(e.name=r.slice(1,t),e.base=r.slice(1,f)):(e.name=r.slice(i,t),e.base=r.slice(i,f)),e.ext=r.slice(t,f)),i>0?e.dir=r.slice(0,i-1):s&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};A.posix=A;var B=A;const I=H(B);var C=(l=>(l.REFRESH_PAGE="REFRESH_PAGE",l.CLOSE_CURRENT="CLOSE_CURRENT",l.CLOSE_LEFT="CLOSE_LEFT",l.CLOSE_RIGHT="CLOSE_RIGHT",l.CLOSE_OTHER="CLOSE_OTHER",l.CLOSE_ALL="CLOSE_ALL",l))(C||{});const N=(l,r=!1)=>{const e=y(),n=G(),s=D(),a=m(()=>e.tagList),t=o=>{const g=o||(r?l:n),b=v(a).findIndex(R=>R.path===g.path);return{...g,index:b}},i=m(()=>r?n.fullPath!==t().fullPath:!1),f=m(()=>{var o;return!!((o=n==null?void 0:n.meta)!=null&&o.affix)||v(a).length<=1}),h=m(()=>{var g,b;const{index:o}=t();return[0,-1].includes(o)||!!((b=(g=v(a)[o-1])==null?void 0:g.meta)!=null&&b.affix)}),u=m(()=>{var g,b;const{index:o}=t();return[v(a).length-1,-1].includes(o)||!!((b=(g=e.tagList[o+1])==null?void 0:g.meta)!=null&&b.affix)}),c=m(()=>{const{index:o}=t();return o===-1||v(a).length===1||v(a).filter((g,b)=>{var R;return!((R=g==null?void 0:g.meta)!=null&&R.affix)&&b!==o}).length===0}),T=m(()=>v(a).length===1||v(a).filter(o=>{var g;return!((g=o==null?void 0:o.meta)!=null&&g.affix)}).length===0),S=m(()=>[{icon:"el-icon-Refresh",text:"刷新页面",disabled:v(i),command:C.REFRESH_PAGE},{icon:"el-icon-Close",text:"关闭当前标签",disabled:v(f),command:C.CLOSE_CURRENT},{icon:"el-icon-Back",text:"关闭左侧标签",disabled:v(h),command:C.CLOSE_LEFT},{icon:"el-icon-Right",text:"关闭右侧标签",disabled:v(u),command:C.CLOSE_RIGHT},{icon:"local-other",text:"关闭其他标签",disabled:v(c),command:C.CLOSE_OTHER},{icon:"local-clear",text:"关闭全部标签",disabled:v(T),command:C.CLOSE_ALL}]),d=o=>{switch(o){case C.REFRESH_PAGE:E();break;case C.CLOSE_CURRENT:O();break;case C.CLOSE_LEFT:x();break;case C.CLOSE_RIGHT:k();break;case C.CLOSE_OTHER:P();break;case C.CLOSE_ALL:w();break}},E=async()=>{await e.refreshPage(s)},O=o=>{const g=t(o);e.deleteTag(g),n.path===g.path&&_()},_=()=>{const o=v(a).slice(-1)[0];o?s.push(o.fullPath):s.push("/")},x=()=>{const o=t();e.deleteTag({...o,index:o.index-1})},k=()=>{const o=t();e.deleteTag({...o,index:o.index+1})},P=()=>{e.deleteOtherTag(t()),_()},w=()=>{e.clearTag(),!n.meta.affix&&_()};return{getActionList:S,handleMenuEvent:d,refreshPage:E,closeTag:O,closeLeftTag:x,closeRightTag:k,closeOtherTag:P,closeAllTag:w}},W=()=>{const l=y(),{closeTag:r}=N(),e=z(),n=m(()=>l.tagList),s=m(()=>l.cacheTagList),a=m(()=>l.fullscreen),t=u=>{l.addTag(u)},i=(u,c="/")=>{let T=[];return u.forEach(S=>{const d=S;if(d.meta&&d.meta.affix){const E=I.resolve(c,d.path);T.push({fullPath:E,path:E,name:d.name,meta:{...d.meta}})}if(d.children){const E=i(d.children,d.path);E&&E.length&&(T=[...T,...E])}}),T};return{getTagList:n,getCacheTagList:s,closeTag:r,addTag:t,getTagFullscreen:a,initTags:()=>{const u=i(e.route);l.initTagList(u)},toggleFullscreen:()=>{l.toggleFullscreen()}}};export{N as a,I as p,W as u};