"use strict";(self.webpackChunkrahul_gill_github_io=self.webpackChunkrahul_gill_github_io||[]).push([[3861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=i(r),m=n,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),l=r(6010),o=r(2389),u=r(7392),s=r(7094),i=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function b(e){var t;const{lazy:r,block:o,defaultValue:b,values:m,groupId:d,className:f}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??g.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,u.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===b?b:b??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:O}=(0,s.U)(),[k,w]=(0,n.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=d){const e=T[d];null!=e&&e!==k&&h.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,r=E.indexOf(t),a=h[r].value;a!==k&&(x(t),w(a),null!=d&&O(d,String(a)))},D=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>E.push(e),onKeyDown:D,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":k===t})}),r??t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,o.Z)();return n.createElement(b,(0,a.Z)({key:String(t)},e))}},9006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),l=r(5488),o=r(5162);const u={slug:"blog-path",title:"Docusaurus features",tags:["docusaurus"]},s=void 0,i={permalink:"/blog/blog-path",editUrl:"https://github.com/rahul-gill/rahul-gill.github.io/issues/new?title=Problem+on+page+deployed+at+/blog/blog-path&body=%5Bfile%20to%20be%20edited%5D%28https%3A%2F%2Fgithub.com%2Frahul-gill%2Frahul-gill.github.io%2Ftree%2Fmaster%2Fblog%2F2020-12-03-sample-blog.mdx%29",source:"@site/blog/2020-12-03-sample-blog.mdx",title:"Docusaurus features",description:"Tabs",date:"2020-12-03T00:00:00.000Z",formattedDate:"December 3, 2020",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.56,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"blog-path",title:"Docusaurus features",tags:["docusaurus"]},prevItem:{title:"Mifos Android UI Library",permalink:"/blog/mifos-ui"}},c={authorsImageUrls:[]},p=[{value:"Tabs",id:"tabs",level:2}],b={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"tabs"},"Tabs"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,n.kt)(o.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,n.kt)(o.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))}m.isMDXComponent=!0}}]);