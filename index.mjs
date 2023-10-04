// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.1.0-esm/index.mjs";function n(r,n,i,s,a){var f,o,d,m,u;if(r<=0)return NaN;for(o=i<0?(1-r)*i:0,d=a<0?(1-r)*a:0,u=0;u<r&&0!==s[d];u++)o+=i,d+=a;if(u===r)return NaN;if(f=n[o],e(f))return f;for(u+=1;u<r;u++)if(o+=i,!s[d+=a]){if(m=n[o],e(m))return m;(m>f||m===f&&t(m))&&(f=m)}return f}function i(r,n,i,s,a,f,o){var d,m,u,l,p;if(r<=0)return NaN;for(m=s,u=o,p=0;p<r&&0!==a[u];p++)m+=i,u+=f;if(p===r)return NaN;if(d=n[m],e(d))return d;for(p+=1;p<r;p++)if(m+=i,!a[u+=f]){if(l=n[m],e(l))return l;(l>d||l===d&&t(l))&&(d=l)}return d}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
