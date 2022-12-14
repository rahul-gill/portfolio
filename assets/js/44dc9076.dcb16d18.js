"use strict";(self.webpackChunkrahul_gill_github_io=self.webpackChunkrahul_gill_github_io||[]).push([[9867],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=l.createContext({}),m=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=i,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return a?l.createElement(f,n(n({ref:t},p),{},{components:a})):l.createElement(f,n({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var m=2;m<r;m++)n[m]=a[m];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=a(7462),i=(a(7294),a(3905));const r={slug:"mifos-ui",title:"Mifos Android UI Library",tags:["android","GSoC","UI","library"]},n=void 0,o={permalink:"/blog/mifos-ui",source:"@site/blog/2022-6-11-mifos-ui.mdx",title:"Mifos Android UI Library",description:"Target Goals:",date:"2022-06-11T00:00:00.000Z",formattedDate:"June 11, 2022",tags:[{label:"android",permalink:"/blog/tags/android"},{label:"GSoC",permalink:"/blog/tags/g-so-c"},{label:"UI",permalink:"/blog/tags/ui"},{label:"library",permalink:"/blog/tags/library"}],readingTime:3.51,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"mifos-ui",title:"Mifos Android UI Library",tags:["android","GSoC","UI","library"]},prevItem:{title:"Android Development learnings",permalink:"/blog/android-learnings"},nextItem:{title:"Docusaurus features",permalink:"/blog/blog-path"}},s={authorsImageUrls:[]},m=[{value:"Target Goals:",id:"target-goals",level:2},{value:"make developers stop modifying the components&#39; style in layout files",id:"make-developers-stop-modifying-the-components-style-in-layout-files",level:2},{value:"Challenge: Dependency management",id:"challenge-dependency-management",level:2},{value:"Themes and styles",id:"themes-and-styles",level:2},{value:"Custom widgets",id:"custom-widgets",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"target-goals"},"Target Goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Develop a common UI library to ensure a consistent look and feel of UIs for all apps"),(0,i.kt)("li",{parentName:"ul"},"Define a process for migrating apps to use the library"),(0,i.kt)("li",{parentName:"ul"},"Develop design guidelines and standards for the apps(design document)"),(0,i.kt)("li",{parentName:"ul"},"Develop base-level widgets, common UI components"),(0,i.kt)("li",{parentName:"ul"},"Implement screens and workflows to test out on reference sample app"),(0,i.kt)("li",{parentName:"ul"},"Document how to use the UI library and how to update the app when the library is updated.")),(0,i.kt)("h2",{id:"make-developers-stop-modifying-the-components-style-in-layout-files"},"make developers stop modifying the components' style in layout files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It would be tedious task for the reviewer to make sure the PR doesn't modify the style attributes in layouts(by\nusing textSize, textColor, padding or similar attributes)"),(0,i.kt)("li",{parentName:"ul"},"So we'll define ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rahul-gill/Mifos-Android-UI/blob/master/lint_check/src/main/java/io/github/rahul_gill/lint_check/StyleAttributeUsageIssue.kt"},"custom lint rules")," that will catch this and make the build fail and report the error. Something\nlike this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> Task :demoApp:lintDebug FAILED\nLint found 54 errors, 84 warnings. First failure:\n\n/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:20: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n        android:textSize="24sp"\n        ~~~~~~~~~~~~~~~~~~~~~~~\n\nThe full lint text report is located at:\n  /home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/build/intermediates/lint_intermediate_text_report/debug/lint-results-debug.txt\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The full report lists all errors")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:20: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n        android:textSize="24sp"\n        ~~~~~~~~~~~~~~~~~~~~~~~\n/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:21: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n        android:textColor="#000000"/>\n        ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:28: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n        android:textSize="18sp"\n        ~~~~~~~~~~~~~~~~~~~~~~~~~~~\n/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:111: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n        android:textColor="?attr/colorPrimary"/>\n        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:119: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n        android:textColor="?attr/colorPrimary"/>\n        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n/home/ashen-one/AndroidStudioProjects/MifosUI/demoApp/src/main/res/layout/tmp.xml:137: Error: Style attribute usage in layout detected [StyleAttributeUsageIssue from mifos]\n            android:backgroundTint="?attr/colorPrimary"\n')),(0,i.kt)("h2",{id:"challenge-dependency-management"},"Challenge: Dependency management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UI library will have the latest dependency versions. But apps' dependencies are not updated. Upgrading a single\nimplementation dependency version may require updating the compileSdkVersion, kotlinVersion, gradlePluginVersion\nwhich may cause many problems.")),(0,i.kt)("h2",{id:"themes-and-styles"},"Themes and styles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"we'll have to extract common styles used in the apps and provide those styles"),(0,i.kt)("li",{parentName:"ul"},"apps consuming the styles would only apply these styles only(not provided by the material android libraries)"),(0,i.kt)("li",{parentName:"ul"},"text styles for these",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"link text for things like ",(0,i.kt)("inlineCode",{parentName:"li"},"forgot password")," with click feedback(",(0,i.kt)("u",{style:{color:"#4444FF"}},"NonClicked")," ",(0,i.kt)("a",{style:{color:"#AAAAFF"}},"Clicked"),")"),(0,i.kt)("li",{parentName:"ul"},"secondary text style for things like all rights reserved @copyright etc.,"),(0,i.kt)("li",{parentName:"ul"},"list header style,"),(0,i.kt)("li",{parentName:"ul"},"main focus text style(like the current account balance on home screen)"))),(0,i.kt)("li",{parentName:"ul"},"Text Field Styles:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"otp fill"),(0,i.kt)("li",{parentName:"ul"},"password field"),(0,i.kt)("li",{parentName:"ul"},"phone number select"),(0,i.kt)("li",{parentName:"ul"},"edit text with action to fill the field(like qr code fetcher)"),(0,i.kt)("li",{parentName:"ul"},"edit text with currency selection"))),(0,i.kt)("li",{parentName:"ul"},"commonly used size and spacing values",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"text fields vertical padding and fillMaxWidth text fields horizontal padding"),(0,i.kt)("li",{parentName:"ul"},"lists:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"spacing between list items"),(0,i.kt)("li",{parentName:"ul"},"card inner padding values"),(0,i.kt)("li",{parentName:"ul"},"card outer padding values"),(0,i.kt)("li",{parentName:"ul"},"item spacer horizontal padding values"),(0,i.kt)("li",{parentName:"ul"},"bottom padding for avoiding list items hiding below the FAB"),(0,i.kt)("li",{parentName:"ul"},"list item minHeight"),(0,i.kt)("li",{parentName:"ul"},"list header left margin and vertical margins"))),(0,i.kt)("li",{parentName:"ul"},"images:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"OrgIcon width and height"),(0,i.kt)("li",{parentName:"ul"},"avatar width and height"),(0,i.kt)("li",{parentName:"ul"},"card icon dimensions"),(0,i.kt)("li",{parentName:"ul"},"basic icon dimension"))),(0,i.kt)("li",{parentName:"ul"},"title subtitle spacing"),(0,i.kt)("li",{parentName:"ul"},"card corner radius and elevation"),(0,i.kt)("li",{parentName:"ul"},"fab margins"),(0,i.kt)("li",{parentName:"ul"},"standard margin"),(0,i.kt)("li",{parentName:"ul"},"bottom navigation height and elevation"),(0,i.kt)("li",{parentName:"ul"},"tooltip(hint) offset(x+,x-,y+,y-)"))),(0,i.kt)("li",{parentName:"ul"},"text focus indication with alpha",(0,i.kt)("div",{style:{background:"white"}},(0,i.kt)("div",{style:{color:"#d1d1d1"}},"AAAAAAAAAAAAAAAAAAAAAA"),(0,i.kt)("div",{style:{color:"#666666bb"}},"BBBBBBBBBBBBBBBBBBBBBB"),(0,i.kt)("div",{style:{color:"#000000"}},"BBBBBBBBBBBBBBBBBBBBBB")))),(0,i.kt)("h2",{id:"custom-widgets"},"Custom widgets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"there are some widgets that are built by combining base widgets, for example:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This kind of cards are used in settings screen, transaction and many other\n",(0,i.kt)("img",{alt:"card",src:a(3428).Z,width:"410",height:"66"})),(0,i.kt)("li",{parentName:"ul"},"list of key value pairs",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"key-val",src:a(3871).Z,width:"344",height:"131"})),(0,i.kt)("li",{parentName:"ul"},"commonly used text field styles: simple, with an action, password, otp\n",(0,i.kt)("img",{alt:"text-fields",src:a(9705).Z,width:"343",height:"213"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dribbble.com/shots/18050792-Mercury-Phone-Input"},"this")," could be a great for phone number fields"),(0,i.kt)("li",{parentName:"ul"},"table view"))),(0,i.kt)("li",{parentName:"ul"},"implementation for these can be provided in the library"),(0,i.kt)("li",{parentName:"ul"},"also, some custom views are already in the apps, these can be moved to the library; like ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mifos-mobile/blob/development/app/src/main/java/org/mifos/mobile/utils/ProcessView.kt"},"ProcessView"),", Circular Image View, AvatarView, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mifos-passcode"},"MifosPassCodeActivity")))),(0,i.kt)("li",{parentName:"ul"},"UI extensions like these can be moved to the library",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Correct input verify",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"password strength ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mobile-wallet/blob/dev/mifospay/src/main/java/org/mifos/mobilewallet/mifospay/utils/PasswordStrength.java"},"this")),(0,i.kt)("li",{parentName:"ul"},"email pattern ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mobile-wallet/blob/dev/mifospay/src/main/java/org/mifos/mobilewallet/mifospay/utils/ValidateUtil.kt"},"this")))),(0,i.kt)("li",{parentName:"ul"},"dropdown like visibility change animation ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mobile-wallet/blob/dev/mifospay/src/main/java/org/mifos/mobilewallet/mifospay/utils/AnimationUtil.java"},"this")),(0,i.kt)("li",{parentName:"ul"},"Dialog builder maybe ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mobile-wallet/blob/dev/mifospay/src/main/java/org/mifos/mobilewallet/mifospay/utils/DialogBox.java"},"this")),(0,i.kt)("li",{parentName:"ul"},"click listener helper for recycler view with sublist ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mobile-wallet/blob/dev/mifospay/src/main/java/org/mifos/mobilewallet/mifospay/utils/RecyclerItemClickListener.java"},"this")),(0,i.kt)("li",{parentName:"ul"},"Drawable by name ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mobile-wallet/blob/dev/mifospay/src/main/java/org/mifos/mobilewallet/mifospay/utils/TextDrawable.java"},"this")),(0,i.kt)("li",{parentName:"ul"},"Divider Decoration ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mifos-mobile/blob/development/app/src/main/java/org/mifos/mobile/utils/DividerItemDecoration.kt"},"this")),(0,i.kt)("li",{parentName:"ul"},"EndlessRecyclerViewScrollListener ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mifos-mobile/blob/development/app/src/main/java/org/mifos/mobile/utils/EndlessRecyclerViewScrollListener.kt"},"this")),(0,i.kt)("li",{parentName:"ul"},"ScrollFabBehavior ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openMF/mifos-mobile/blob/development/app/src/main/java/org/mifos/mobile/utils/ScrollFabBehavior.kt"},"this"))))))}d.isMDXComponent=!0},3428:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,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"},3871:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/83bb344bed6840e7af92f92a30fd8dec-815b7bb069047ac85932bec1c6ee27d6.png"},9705:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/c168c3d558564d9db69977333d962e4d-5e6bd6d5685677497af3c355345102aa.png"}}]);