parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var s=document.querySelector(".header__slider"),e=document.querySelector(".slider__button--prev"),t=document.querySelector(".slider__button--next"),i=["slider--1","slider--2","slider--3"];e.addEventListener("click",function(){if(s.classList.contains(i[0]))s.classList.remove(i[0]),s.classList.add(i[2]);else for(var e=1;e<3;e++)s.classList.contains(i[e])&&(s.classList.remove(i[e]),s.classList.add(i[e-1]))}),t.addEventListener("click",function(){if(s.classList.contains(i[2]))s.classList.remove(i[2]),s.classList.add(i[0]);else for(var e=1;e>=0;e--)s.classList.contains(i[e])&&(s.classList.remove(i[e]),s.classList.add(i[e+1]))});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.abef5c5f.js.map