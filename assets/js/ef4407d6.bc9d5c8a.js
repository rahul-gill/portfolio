"use strict";(self.webpackChunkrahul_gill_github_io=self.webpackChunkrahul_gill_github_io||[]).push([[3025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={titile:"Bit Manipulation"},a=void 0,l={unversionedId:"dsa/BitManipulation",id:"dsa/BitManipulation",title:"BitManipulation",description:"",source:"@site/docs/dsa/14. BitManipulation.md",sourceDirName:"dsa",slug:"/dsa/BitManipulation",permalink:"/docs/dsa/BitManipulation",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{titile:"Bit Manipulation"},sidebar:"docs",previous:{title:"Counting",permalink:"/docs/dsa/Counting"},next:{title:"Segment Trees",permalink:"/docs/dsa/SegmentTrees"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define isOn(S, j) (S & (1<<j))\n#define setBit(S, j) (S |= (1<<j))\n#define clearBit(S, j) (S &= ~(1<<j))\n#define toggleBit(S, j) (S ^= (1<<j))\n#define lowestOnBit(S) (S & (-S))   //lowest non-zero bit\n#define setAll(S, n) (S = (1<<n)-1)\n\n#define modulo(S, N) ((S) & (N-1))   // returns S % N, where N is a power of 2\n#define isPowerOfTwo(S) (!(S & (S-1)))\n#define nearestPowerOfTwo(S) (1<<lround(log2(S)))\n#define turnOffLastBit(S) ((S) & (S-1))\n#define turnOnLastZero(S) ((S) | (S+1))\n#define turnOffLastConsecutiveBits(S) ((S) & (S+1))\n#define turnOnLastConsecutiveZeroes(S) ((S) | (S-1))\n")))}p.isMDXComponent=!0}}]);