"use strict";var q=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var l=q(function(D,p){
var c=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-assert-is-positive-zero/dist');function O(i,n,f,m,o){var u,v,r,a,e;if(i<=0)return NaN;for(f<0?v=(1-i)*f:v=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&m[r]!==0;e++)v+=f,r+=o;if(e===i)return NaN;if(u=n[v],c(u))return u;for(e+=1,e;e<i;e++)if(v+=f,r+=o,!m[r]){if(a=n[v],c(a))return a;(a>u||a===u&&E(a))&&(u=a)}return u}p.exports=O
});var b=q(function(F,j){
var y=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-assert-is-positive-zero/dist');function g(i,n,f,m,o,u,v){var r,a,e,s,t;if(i<=0)return NaN;for(a=m,e=v,t=0;t<i&&o[e]!==0;t++)a+=f,e+=u;if(t===i)return NaN;if(r=n[a],y(r))return r;for(t+=1,t;t<i;t++)if(a+=f,e+=u,!o[e]){if(s=n[a],y(s))return s;(s>r||s===r&&d(s))&&(r=s)}return r}j.exports=g
});var Z=q(function(G,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=l(),k=b();h(P,"ndarray",k);R.exports=P
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=Z(),x,_=z(w(__dirname,"./native.js"));A(_)?x=B:x=_;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
