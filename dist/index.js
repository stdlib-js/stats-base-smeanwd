"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=o(function(h,m){
var s=require('@stdlib/number-float64-base-to-float32/dist');function j(r,e,n){var i,a,u,t;if(r<=0)return NaN;if(r===1||n===0)return e[0];for(n<0?a=(1-r)*n:a=0,i=0,u=0,t=0;t<r;t++)u+=1,i=s(i+s(s(e[a]-i)/u)),a+=n;return i}m.exports=j
});var p=o(function(k,c){
var f=require('@stdlib/number-float64-base-to-float32/dist');function F(r,e,n,i){var a,u,t,v;if(r<=0)return NaN;if(r===1||n===0)return e[i];for(u=i,a=0,t=0,v=0;v<r;v++)t+=1,a=f(a+f(f(e[u]-a)/t)),u+=n;return a}c.exports=F
});var x=o(function(z,w){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),T=p();R(d,"ndarray",T);w.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=x(),q,y=E(_(__dirname,"./native.js"));O(y)?q=b:q=y;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
