"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(k,m){
var v=require('@stdlib/number-float64-base-to-float32/dist');function x(e,r,a,d){var i,t,n,u;if(e<=0)return NaN;if(e===1||a===0)return r[d];for(t=d,i=0,n=0,u=0;u<e;u++)n+=1,i=v(i+v(v(r[t]-i)/n)),t+=a;return i}m.exports=x
});var c=s(function(z,f){
var j=require('@stdlib/strided-base-stride2offset/dist'),R=o();function _(e,r,a){return R(e,r,a,j(e,a))}f.exports=_
});var l=s(function(A,y){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),F=o();E(p,"ndarray",F);y.exports=p
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=l(),q,w=T(O(__dirname,"./native.js"));b(w)?q=g:q=w;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
