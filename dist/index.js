"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var x=q(function(D,p){
var d=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(r,e,t,f,n,o,m){var a,v,s,u,i;if(r<=0)return NaN;for(v=f,s=m,i=0;i<r&&n[s]!==0;i++)v+=t,s+=o;if(i===r)return NaN;if(a=e[v],d(a))return a;for(i+=1,i;i<r;i++)if(v+=t,s+=o,!n[s]){if(u=e[v],d(u))return u;(u>a||u===a&&E(u))&&(a=u)}return a}p.exports=O
});var k=q(function(F,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),P=x();function Z(r,e,t,f,n){var o=y(r,t),m=y(r,n);return P(r,e,t,o,f,n,m)}j.exports=Z
});var _=q(function(G,R){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),h=x();g(l,"ndarray",h);R.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),c,b=z(w(__dirname,"./native.js"));A(b)?c=B:c=b;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
