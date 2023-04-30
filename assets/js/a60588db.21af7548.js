"use strict";(self.webpackChunkrahul_gill_github_io=self.webpackChunkrahul_gill_github_io||[]).push([[8847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"C++ and STL"},i=void 0,l={unversionedId:"dsa/CppAndSTL",id:"dsa/CppAndSTL",title:"C++ and STL",description:"Array opeartions",source:"@site/docs/dsa/1. CppAndSTL.md",sourceDirName:"dsa",slug:"/dsa/CppAndSTL",permalink:"/notes/dsa/CppAndSTL",draft:!1,editUrl:"https://github.com/rahul-gill/rahul-gill.github.io/issues/new?title=Problem+on+page+deployed+at+/notes/dsa/CppAndSTL&body=%5Bfile%20to%20be%20edited%5D%28https%3A%2F%2Fgithub.com%2Frahul-gill%2Frahul-gill.github.io%2Ftree%2Fmaster%2Fdocs%2Fdsa/1. CppAndSTL.md%29",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"C++ and STL"},sidebar:"docs",previous:{title:"Contents",permalink:"/notes/"},next:{title:"Arrays, Searching and Sorting",permalink:"/notes/dsa/ArraysSortingSearching"}},s={},u=[{value:"Array opeartions",id:"array-opeartions",level:2},{value:"Other Data structures&#39; operations",id:"other-data-structures-operations",level:2},{value:"Structured bindings",id:"structured-bindings",level:2},{value:"ConstExpr",id:"constexpr",level:2},{value:"Literals",id:"literals",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"array-opeartions"},"Array opeartions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"copy(arr_begin, arr_end, result_arr_begin);\n//partial sorting: arr_begin to arr_middle will be sorted and contain smallest elements of array\npartial_sort(arr_begin, arr_middle, arr_end);\n/**\n * lower_bound: resultIterator will point to first element >= target\n * upper_bound: resultIterator will point to first element > target\n */\nlower_bound(arr_begin, arr_end, value); \n/**\n * Finding unique elements\n * - first sort the array\n * - unique makes the sorted array {1,1,2,2,3} => { 1,2,35,*,* } and\n *   returns iterator to first duplicate(marked by *)\n */\nvector<int> v{1,2,3,1,2,5};\nsort(v.begin(),v.end());\nv.erase(unique(v.begin(),v.end()),v.end());\n\n\n\nfill_n(arr_begin, arr_size, value_to_fill);\nreverse(arr_begin, arr_end);\nsort(arr_begin, arr_end);\n//descending sort\nsort(arr_begin, arr_end, [](int a, int b){return a>b;}) \nnext_permutation(arr_begin, arr_end)\n\ntransform(input_begin, input_end,output_begin,operation_function);\nswap(arr_begin, arr_end, result_arr_begin);\nrandom_suffle(arr_begin, arr_end);\n")),(0,a.kt)("h2",{id:"other-data-structures-operations"},"Other Data structures' operations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Stack"),": push, pop, top, empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Queue"),": push, pop, front, back, empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dequeue"),": push_back, push_front, pop_back, pop_front, front, back, empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Map"),", ",(0,a.kt)("strong",{parentName:"li"},"Set")," and their multi and unordered variants:\ninsert, find, erase, lower_bound(for ordered ones), [] operator")),(0,a.kt)("h1",{id:"lambdas"},"Lambdas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"syntax: ",(0,a.kt)("inlineCode",{parentName:"li"},"[scope](params){ body }")),(0,a.kt)("li",{parentName:"ul"},"scope is either empty, by reference(with ",(0,a.kt)("inlineCode",{parentName:"li"},"&"),") or by value(with ",(0,a.kt)("inlineCode",{parentName:"li"},"="),")"),(0,a.kt)("li",{parentName:"ul"},"examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> map_arr(vector<int> arr, function<int(int)> f){\n    vector<int> ret;\n    for(auto &x: arr)\n        ret.push_back(f(x));\n    return ret;\n}\n\nvector<int> arr{1,2,3,4,5,6,7,8,9,10};\nauto square_arr = map_arr(arr, [](int i) -> int { return i*i; });\n\n//by reference scope example\nint a = 10;\nauto doubleValueOfA = [&](){\n     a = a * 2;\n};\n//by value scope example\nauto readOnlyLambda = [=](){\n     cout<<a<<' ';\n};\n")),(0,a.kt)("h2",{id:"structured-bindings"},"Structured bindings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"auto [var1, var2] = make_tuple(1,2);\nmap<int,int> mp{ {0,100}, {1, 99} };\nfor(auto[key,value]: mp){\n    doSomethingWithKey(key);\n    doSomethingWithValue(value);\n}\n")),(0,a.kt)("h2",{id:"constexpr"},"ConstExpr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"for computing values at compile time")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr int cube (int a){return a * a * a;}\nfloat gk[cube(3)]; // Valid in global scope since C++11: variable 'gk' has 27 elements\n")),(0,a.kt)("h2",{id:"literals"},"Literals"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'auto raw_string = R"(Raw String)"\nauto binary_num = 0b11\nauto hex_num = 0x11\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"user defined literal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'long double operator"" _kg( long double x ){\n    return x*1000;\n}\nlong double operator"" _g( long double x ){\n    return x;\n}\nlong double operator"" _mg( long double x ){\n    return x / 1000;\n}\nauto amnt = 10_kg + 5_mg\n//works only on these(doesn\'t work on signed types):\nchar const*\nunsigned long long\nlong double\nchar const*, std::size_t\nwchar_t const*, std::size_t\nchar16_t const*, std::size_t\nchar32_t const*, std::size_t\n')))}d.isMDXComponent=!0}}]);