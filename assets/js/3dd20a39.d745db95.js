"use strict";(self.webpackChunkrahul_gill_github_io=self.webpackChunkrahul_gill_github_io||[]).push([[6230],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,N=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(N,r(r({ref:t},p),{},{components:n})):a.createElement(N,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={title:"App Ideas"},s=void 0,u={unversionedId:"mobile-app-dev/Apps",id:"mobile-app-dev/Apps",title:"App Ideas",description:"Cricket app",source:"@site/docs/mobile-app-dev/Apps.md",sourceDirName:"mobile-app-dev",slug:"/mobile-app-dev/Apps",permalink:"/docs/mobile-app-dev/Apps",tags:[],version:"current",frontMatter:{title:"App Ideas"},sidebar:"docs",previous:{title:"Kotlin Flows and channels",permalink:"/docs/mobile-app-dev/kotlin-flows"},next:{title:"App Architecture",permalink:"/docs/mobile-app-dev/Architecture"}},p={},c=[{value:"Cricket app",id:"cricket-app",level:2},{value:"College Space",id:"college-space",level:2},{value:"classes_flow",id:"classes_flow",level:3},{value:"UserMenu",id:"usermenu",level:3},{value:"Some user group ideas",id:"some-user-group-ideas",level:3},{value:"WeekView",id:"weekview",level:3},{value:"Attendance",id:"attendance",level:3},{value:"Expense tracker",id:"expense-tracker",level:2},{value:"Video game apps",id:"video-game-apps",level:2},{value:"Opinions app",id:"opinions-app",level:2},{value:"Topics",id:"topics",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cricket-app"},"Cricket app"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"db for stroring result; and some state machine like thing for app")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Database schema sql"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE TABLE `Tournament` (\n  `tid` int PRIMARY KEY,\n  `winnerTeamId` int,\n  `manOfTheMatchId` int,\n  `ongoing` boolean\n);\n\nCREATE TABLE `TournamentTeamStats` (\n  `statsTeamId` int PRIMARY KEY,\n  `points` int NOT NULL,\n  `matches` int NOT NULL,\n  `wins` int NOT NULL,\n  `losses` int NOT NULL\n);\n\nCREATE TABLE `Match` (\n  `matchId` int PRIMARY KEY AUTO_INCREMENT,\n  `tournamentId` int,\n  `matchStatus` ENUM ('Live', 'Finished', 'Cancelled', 'Drawn') NOT NULL,\n  `matchFormat` MatchFormat,\n  `teamAId` int NOT NULL,\n  `teamBId` int NOT NULL,\n  `currentBattingTeamId` int NOT NULL,\n  `currentBatsmanId` int NOT NULL,\n  `currentonStrikeBatsmanId` int,\n  `currentBowlerId` int NOT NULL,\n  `winnerTeamId` int,\n  `manOfTheMatchId` int\n);\n\nCREATE TABLE `Team` (\n  `teamId` int PRIMARY KEY AUTO_INCREMENT,\n  `name` varchar(255) NOT NULL,\n  `numOvers` int NOT NULL,\n  `numBowlsInCurrentOver` int NOT NULL,\n  `totalRuns` int NOT NULL,\n  `wickets` int NOT NULL\n);\n\nCREATE TABLE `Player` (\n  `playerId` int PRIMARY KEY AUTO_INCREMENT,\n  `teamId` int,\n  `battingRecord` int NOT NULL,\n  `bowlingRecord` int NOT NULL,\n  `isBowling` boolean NOT NULL,\n  `isBatting` boolean NOT NULL,\n  `WicketType` ENUM ('Bold', 'CatchOut', 'Stump', 'RunOut', 'LBW', 'Other')\n);\n\nCREATE TABLE `BattingRecord` (\n  `battingRecordId` int PRIMARY KEY AUTO_INCREMENT,\n  `numOvers` int NOT NULL,\n  `numBowls` int NOT NULL,\n  `totalRuns` int NOT NULL,\n  `sixes` int NOT NULL,\n  `fours` int NOT NULL,\n  `singleRuns` int NOT NULL,\n  `doubleRuns` int NOT NULL,\n  `tripleRuns` int NOT NULL,\n  `dotBowls` int NOT NULL\n);\n\nCREATE TABLE `BowlingRecord` (\n  `bowlingRecordId` int PRIMARY KEY AUTO_INCREMENT,\n  `numOvers` int NOT NULL,\n  `numBowls` int NOT NULL,\n  `wickets` int NOT NULL,\n  `maidenOvers` int NOT NULL,\n  `extraRunsGiven` int NOT NULL,\n  `totalRunsGiven` int NOT NULL,\n  `sixes` int NOT NULL,\n  `fours` int NOT NULL,\n  `singleRuns` int NOT NULL,\n  `doubleRuns` int NOT NULL,\n  `tripleRuns` int NOT NULL,\n  `dotBowls` int NOT NULL\n);\n\nCREATE TABLE `Bowl` (\n  `bowlId` int PRIMARY KEY AUTO_INCREMENT,\n  `teamId` int NOT NULL,\n  `batsmanId` int NOT NULL,\n  `bowlerId` int NOT NULL,\n  `overNumber` int NOT NULL,\n  `bowlNumberOfOver` int NOT NULL,\n  `ballType` ENUM ('Normal', 'Wide', 'NoBall', 'Wicket') NOT NULL,\n  `runType` ENUM ('NoRun', 'SingleRun', 'DoubleRun', 'TripleRun', 'Four', 'Six', 'Wide', 'NoBowl', 'Bye', 'LegBye') NOT NULL,\n  `runType2` ENUM ('NoRun', 'SingleRun', 'DoubleRun', 'TripleRun', 'Four', 'Six', 'Wide', 'NoBowl', 'Bye', 'LegBye')\n);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `Tournament` (`winnerTeamId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Tournament` (`manOfTheMatchId`);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `TournamentTeamStats` (`statsTeamId`);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `Match` (`winnerTeamId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Match` (`manOfTheMatchId`);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `Match` (`currentBattingTeamId`);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `Match` (`teamAId`);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `Match` (`teamBId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Match` (`currentBatsmanId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Match` (`currentonStrikeBatsmanId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Match` (`currentBowlerId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`teamId`) REFERENCES `Team` (`teamId`);\n\nALTER TABLE `BattingRecord` ADD FOREIGN KEY (`battingRecordId`) REFERENCES `Player` (`battingRecord`);\n\nALTER TABLE `BowlingRecord` ADD FOREIGN KEY (`bowlingRecordId`) REFERENCES `Player` (`bowlingRecord`);\n\nALTER TABLE `Team` ADD FOREIGN KEY (`teamId`) REFERENCES `Bowl` (`teamId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Bowl` (`batsmanId`);\n\nALTER TABLE `Player` ADD FOREIGN KEY (`playerId`) REFERENCES `Bowl` (`bowlerId`);\n"))),(0,l.kt)("h2",{id:"college-space"},"College Space"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use of the notification implemented in Recurrence app, also option to set notification at fixed time before start or at end."),(0,l.kt)("li",{parentName:"ul"},"Event types(ClassEvent, ClubEvent, PersonalEvent) different kind of notifications for these(a notification at begining of day of events on that day)"),(0,l.kt)("li",{parentName:"ul"},"A way to post blogs/posts with support for markdow and links to other parts of the app(like embedding events/blog links in them)  "),(0,l.kt)("li",{parentName:"ul"},"A list of events that'll be happening; related to clubs/classes(like a workshop organized by some club)"),(0,l.kt)("li",{parentName:"ul"},"Lists for individual club/classes and a list for all events for the user with filters"),(0,l.kt)("li",{parentName:"ul"},"Comment support on events and blogs"),(0,l.kt)("li",{parentName:"ul"},"A way to disable events with specific properties"),(0,l.kt)("li",{parentName:"ul"},"community admin screen for managing that community(name, pic, description etc.) General purpose, access based on user type"),(0,l.kt)("li",{parentName:"ul"},"managing communities: joining a new one or exiting a joined one and list of all joined"),(0,l.kt)("li",{parentName:"ul"},"will/won't join class or something"),(0,l.kt)("li",{parentName:"ul"},"class attendance"),(0,l.kt)("li",{parentName:"ul"},"notes and material space; just drive links"),(0,l.kt)("li",{parentName:"ul"},"User Entity: name, email, college, password, communities, subscriptions(events for which the user will get notification)"),(0,l.kt)("li",{parentName:"ul"},"organize events like share cab, organize a late night fun event etc.")),(0,l.kt)("h3",{id:"classes_flow"},"classes_flow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"admin adds you to a class/club group"),(0,l.kt)("li",{parentName:"ul"},"you can leave the group if you want"),(0,l.kt)("li",{parentName:"ul"},"classes/club events automatically get added to your list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pref:")," you can choose if you want to show classes to weekView/compactView/notifications"),(0,l.kt)("li",{parentName:"ul"},"you have a chat screen to chat with members"),(0,l.kt)("li",{parentName:"ul"},"each group have archives for links to previous related things")),(0,l.kt)("h3",{id:"usermenu"},"UserMenu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name, pic"),(0,l.kt)("li",{parentName:"ul"},"result, rank"),(0,l.kt)("li",{parentName:"ul"},"atttendence record")),(0,l.kt)("h3",{id:"some-user-group-ideas"},"Some user group ideas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"share cab"),(0,l.kt)("li",{parentName:"ul"},"fresher guide")),(0,l.kt)("h3",{id:"weekview"},"WeekView"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"weekly repeating classes"),(0,l.kt)("li",{parentName:"ul"},"assignment deadlines"),(0,l.kt)("li",{parentName:"ul"},"infinite scrolling event list"),(0,l.kt)("li",{parentName:"ul"},"event screen axis switch"),(0,l.kt)("li",{parentName:"ul"},"firebase synced ao that CR can remove classes")),(0,l.kt)("h3",{id:"attendance"},"Attendance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"saving classes on different time on different weekdays"),(0,l.kt)("li",{parentName:"ul"},"notifications",(0,l.kt)("details",null,(0,l.kt)("summary",null,"Screen UI"),(0,l.kt)("ul",null,(0,l.kt)("li",null,"attendence goal(75% for us)"),(0,l.kt)("img",{src:"/img/docs/51f7ba17634098a2928c3aa85297a955.png"}),(0,l.kt)("li",null,"sections like this"),(0,l.kt)("img",{src:"/img/docs/25b8704adf8903c03e333a81d37786ba.png"}),(0,l.kt)("li",null,"attendence report section"),(0,l.kt)("img",{src:"/img/docs/7dda7f16e41dc09d737356d6f7bd6b8b.png"}),(0,l.kt)("li",null,"week view for class schedule"),(0,l.kt)("li",null,"timline view"),(0,l.kt)("img",{src:"/img/docs/b6e9728bf2c5a88810aea3068e4b8a48.png"}),(0,l.kt)("li",null,"data export-import"),(0,l.kt)("li",null,"subject details: name, total classes happended, total attended(no info also: class was scheduled but no attended/not info)"),(0,l.kt)("li",null,"monthly data show(like habit tracker app)"),(0,l.kt)("img",{src:"/img/docs/6e83ba1f27da3bc0804ff1d2a6c29282.png"}),(0,l.kt)("img",{src:"/img/docs/e5067d36b845e80d65ce999a17465ed6.png"}),(0,l.kt)("li",null,"maybe this kind of screen"),(0,l.kt)("img",{src:"/img/docs/ab9ca083b0786ec030529c97c0aced63.png"}))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"other things",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"swipe to reveal edit of subject"),(0,l.kt)("li",{parentName:"ul"},"subject rearrange"),(0,l.kt)("li",{parentName:"ul"},"app pin"),(0,l.kt)("li",{parentName:"ul"},"late or similar option option")))),(0,l.kt)("h2",{id:"expense-tracker"},"Expense tracker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tracker model which which will contain all this info",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"categories cache(sorted by most used&recent) chips"),(0,l.kt)("li",{parentName:"ul"},"set an icon (by default set by major category"),(0,l.kt)("li",{parentName:"ul"},"goals"))),(0,l.kt)("li",{parentName:"ul"},"Details of transactions with filter daily/weekly/monthly etc summary"),(0,l.kt)("li",{parentName:"ul"},"recurring type of expense/income"),(0,l.kt)("li",{parentName:"ul"},"pending type of"),(0,l.kt)("li",{parentName:"ul"},"incoming type of")),(0,l.kt)("h2",{id:"video-game-apps"},"Video game apps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"lets play together"),(0,l.kt)("li",{parentName:"ul"},"stats"),(0,l.kt)("li",{parentName:"ul"},"share your achievement and results(today I scored this much)")),(0,l.kt)("h2",{id:"opinions-app"},"Opinions app"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Groups nad inside that group opinions and these are upvoted devoted"),(0,l.kt)("li",{parentName:"ul"},"A way to find the opinion you have and if someone has posted it already on the app ")),(0,l.kt)("h2",{id:"topics"},"Topics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"room database migration and nested objects"),(0,l.kt)("li",{parentName:"ul"},"a file sharing application"),(0,l.kt)("li",{parentName:"ul"},"dagger2"),(0,l.kt)("li",{parentName:"ul"},"**create copy of prateikjena/Attend"),(0,l.kt)("li",{parentName:"ul"},"encrypted shared preferences and other security things")))}m.isMDXComponent=!0}}]);