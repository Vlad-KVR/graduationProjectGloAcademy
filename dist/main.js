!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=function(){var e=document.forms;r(e).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault(),document.querySelectorAll(".sendError").forEach((function(e){return e.remove()})),document.querySelectorAll(".sendOk").forEach((function(e){return e.remove()})),e.insertAdjacentHTML("beforeend",'<div class="wrapper__lds-ellipsis"><div class="lds-ellipsis">\n                        <div></div><div></div><div></div><div></div></div></div>');var n=new FormData(e),o={};n.forEach((function(e,t){o[t]=e})),function(e){return fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(o).then((function(t){if(200!==t.status)throw new Error("status response not 200");document.querySelector(".lds-ellipsis").remove(),e.insertAdjacentHTML("beforeend",'<div class="sendOk">&#10003</div>')})).catch((function(t){console.log(t),document.querySelector(".lds-ellipsis").remove(),e.insertAdjacentHTML("beforeend",'<div class="sendError">Что-то пошло не так</div>')})),r(e.elements).forEach((function(e){"input"===e.tagName.toLowerCase()&&(e.value="")}))}))}))},l=function(){var e=document.querySelectorAll('input[name="user_phone"]'),t=document.querySelectorAll('input[name="user_name"]');e.forEach((function(e){e.addEventListener("input",(function(){if(event.data){var t="+"===e.value.slice(0,1)?e.value.slice(-1):e.value.slice(0,1);e.value.length<=4&&(e.value="+7("+t),6===e.value.length&&(e.value=e.value+")"),10===e.value.length&&(e.value=e.value+"-"),13===e.value.length&&(e.value=e.value+"-"),e.value.length>16&&(e.value=e.value.slice(0,16))}e.value=e.value.replace(/[^0-9\-()+]/g,"")})),e.addEventListener("focus",(function(){e.value=0===e.value.length?"+7(":e.value}))})),t.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^А-Яа-я]/g,"")}))}))};(function(){var e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call"),n=document.querySelector(".popup-content"),r=function e(){t.removeEventListener("click",e,!1);var r=event.target;r.classList.contains("popup-close")||r.classList.contains("call-btn")||(r=r.closest(".popup-content")),r&&r.classList.contains("popup-content")||(event.preventDefault(),function(){if(window.screen.width<768)t.style.display="block"===t.style.display?"":"block";else{n.style.marginLeft="block"===t.style.display?"4%":"-100%",t.style.display="block";!function e(){if("0%"!==n.style.marginLeft&&"100%"!==n.style.marginLeft){var r=n.style.marginLeft.slice(0,-1);n.style.marginLeft=+r+4+"%",requestAnimationFrame(e)}else"100%"===n.style.marginLeft&&(t.style.display="")}()}}()),setTimeout((function(){return t.addEventListener("click",e,!1)}),1500)};e.forEach((function(e){return e.addEventListener("click",r)})),t.addEventListener("click",r,!1)})(),i(),l()}]);