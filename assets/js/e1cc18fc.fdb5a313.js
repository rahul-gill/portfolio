"use strict";(self.webpackChunkrahul_gill_github_io=self.webpackChunkrahul_gill_github_io||[]).push([[5740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"Synchronization"},i=void 0,o={unversionedId:"os/Synchronization",id:"os/Synchronization",title:"Synchronization",description:"Critical section problem",source:"@site/docs/os/4. Synchronization.md",sourceDirName:"os",slug:"/os/Synchronization",permalink:"/notes/os/Synchronization",draft:!1,editUrl:"https://github.com/rahul-gill/rahul-gill.github.io/issues/new?title=Problem+on+page+deployed+at+/notes/os/Synchronization&body=%5Bfile%20to%20be%20edited%5D%28https%3A%2F%2Fgithub.com%2Frahul-gill%2Frahul-gill.github.io%2Ftree%2Fmaster%2Fdocs%2Fos/4. Synchronization.md%29",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Synchronization"},sidebar:"docs",previous:{title:"Scheduling",permalink:"/notes/os/Scheduling"}},s={},c=[{value:"Critical section problem",id:"critical-section-problem",level:2},{value:"Locks with hardware support",id:"locks-with-hardware-support",level:2},{value:"Better locks with os support",id:"better-locks-with-os-support",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"critical-section-problem"},"Critical section problem"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"critical section: piece of code that accesses shared resources"),(0,r.kt)("li",{parentName:"ul"},"race condition: if multiple threads enter the critical section at the same time"),(0,r.kt)("li",{parentName:"ul"},"indeterminant program: have some race conditions existing in it"),(0,r.kt)("li",{parentName:"ul"},"mutual exclusion: guarantees that only single thread at a time enters the critical section"),(0,r.kt)("li",{parentName:"ul"},"atomic operations: all/none group of instructions: either all sub-operations happen together or non of them happen"),(0,r.kt)("li",{parentName:"ul"},"group of actions as a single atomic action is also called transaction in database systems"),(0,r.kt)("li",{parentName:"ul"},"in a nonpreemptive kernel, a process running in kernel mode cannot be preempted. The process will run until it exits, blocks or voluntarilty yield the cpu."),(0,r.kt)("li",{parentName:"ul"},"nonpreemptive kernel won't cause race conditions but preemptive kernel is more responsive and less risk of kernel process running arbitrarily long")),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the data structure used to provide mutual exclusion called mutex")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"lock_t mutex;\ninit(&mutex);\nlock(&mutex);\n//critical section\nunlocK(&mutex);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"once a process locks the mutex, it has locked on the critical section and no other process can enter the critical section; they'll have to wait until this process exits the critical section"),(0,r.kt)("li",{parentName:"ul"},"enabling and disabling interrupts for locking and unlocking mutexes is not good solution because",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"we have to trust the process"),(0,r.kt)("li",{parentName:"ul"},"doesn't work with multi-processor systems"),(0,r.kt)("li",{parentName:"ul"},"inefficient(masking/unmasking interrupts slow)"),(0,r.kt)("li",{parentName:"ul"},"missing interrupts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"peterson's solution"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int flag[2], turn;\nvoid init(lock_t *mutex){\n    flag[0] = flag[1] = 0;// 1->thread wants to grab lock\n    turn = 0;// whose turn? (thread 0 or 1?)\n}\nvoid lock(lock_t *mutex){\n    flag[self] = 1;// self: thread ID of caller\n    turn = 1 - self;// make it other thread\u2019s turn\n    while ((flag[1-self] == 1) && (turn == 1 - self))\n        ;// spin-wait\n\n}\nvoid unlock(lock_t motex){\n    flag[self] = 0;// simply undo your intent\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"won't work on modern architectures")),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lock software based solution(bad because of incorrectness and bad performance)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct __lock_t{ int flag; } lock_t;\nvoid init(lock_t *mutex){\n    mutex->flag = 0;//0 means lock available\n}\nvoid lock(lock_t *mutex){\n    while(mutex->flag==1)\n        ;//spin wait\n    mutex->flag=1;\n}\nvoid unlock(lock_t *mutex){\n    mutex->flag=0;\n}\n")),(0,r.kt)("h2",{id:"locks-with-hardware-support"},"Locks with hardware support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"some atomic instructions provided by cpu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"test and set"),"(atomic exchange) cpu instructions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"use of instructions like xchg(x86) and ldstub(sparc)"),(0,r.kt)("li",{parentName:"ul"},"pseudo code:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int test_and_set(int *old_ptr, int new){\n    int old = *old_ptr;\n    *old_ptr = new;\n    return old;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},"with it, the previous lock code will be modified as",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"while(test_and_set(&mutex->flag, 1) == 1) ;\n"))),(0,r.kt)("li",{parentName:"ul"},"it doesn't provide any fairness guarantees"),(0,r.kt)("li",{parentName:"ul"},"bad performance of single core(imagine N processes waiting for the lock, only ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"N"),(0,r.kt)("mrow",{parentName:"msup"},(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"h")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1/N^{th}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1/"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h")))))))))))))," of total cpu time will do the main work"),(0,r.kt)("li",{parentName:"ul"},"on multi core reasonably well performance if number of threads roughly equals to number of cores"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"compare and swap"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pseudo code")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int compare_and_swap(int *ptr, expected, new) {\n    int actual = *ptr;\n    if (actual == expected) *ptr = new;\n    return actual;\n}\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"with it, the previous lock code will be modified as")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"while(compare_and_swap(&mutex->flag ,0 , 1) == 1) ;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"load linked and store conditional"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pseudo code",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int load_linked(int *ptr){ return *ptr }\nint store_conditional(int *ptr, int expected, int new) {\n    if (/*no one has updated *ptr since the LoadLinked to this address*/) {\n        *ptr = value;\n        return 1;//success\n    }\n    else return 0;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},"with it, the previous lock code will be modified as",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"while (LoadLinked(&lock->flag)||\n       !StoreConditional(&lock->flag, 1))\n     ;//spin\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetch and add"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pseudo code",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int fetch_and_add(int *ptr){\n    int old = *ptr;\n    *ptr = old + 1;\n    return old;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},"ticket lock based on it",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct __lock_t {\n     int now_serving; \n     int next_ticket;\n } lock_t;\nvoid lock_init(lock_t *lock) {\n    lock->now_serving = lock->next_ticket = 0; \n}\nvoid lock(lock_t *lock){ \n    int = my_ticket;\n    fetch_and_add(lock->next_ticket); \n    while (lock->now_serving != my_ticket)\n        ;\n }\n void unlock (lock_t *lock)  { lock->now_serving++; }\n"))))),(0,r.kt)("li",{parentName:"ul"},"this lock is fair. Every process will get the chance to run critical section after all processes with tickets less that its finish")),(0,r.kt)("h2",{id:"better-locks-with-os-support"},"Better locks with os support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"spinning is also called busy waiting"),(0,r.kt)("li",{parentName:"ul"},"getting ahead of spin locks: yield(give up cpu) but still context switches happen and thats pretty heavy")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void init(lock_t *lock) {\nlock->flag = 0;\n}\nvoid lock(lock_t *lock) {\nwhile (test_and_set(&lock->flag, 1) == 1) \n    yield(); // give up the CPU\n}\nvoid unlock(lock_t *lock) {\nlock->flag = 0;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using park, unpark(in solaris) and ",(0,r.kt)("strong",{parentName:"li"},"queue"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sycall ",(0,r.kt)("inlineCode",{parentName:"li"},"park")," makes the process sleep"),(0,r.kt)("li",{parentName:"ul"},"sycall ",(0,r.kt)("inlineCode",{parentName:"li"},"unpark")," makes the process wake up from the instruction just next to the ",(0,r.kt)("inlineCode",{parentName:"li"},"park")," syscall")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct __lock_t {\n    int flag;\n    int guard; \n    queue_t *q;\n} lock_t;\nvoid lock_init(lock_t *m) {\n    m->flag = 0;\n    m->guard = 0; \n    queue_init(m->q);\n}\nvoid lock(lock_t *m) {\n    while (test_and_set(&m->guard, 1) == 1)\n        ; //acquire guard lock by spinning\n    if (m->flag == 0) {\n        m->flag = 1; // lock is acquired \n        m->guard = 0;\n    } else {\n        queue_add(m->q, gettid()); \n        m->guard = 0; \n        park();\n    }\n}\nvoid unlock(lock_t *m) {\n    while (test_and_set(&m->guard, 1) == 1)\n        ; //acquire guard lock by spinning\n    if (queue_empty(m->q)) \n        m->flag = 0; // let go of lock; no one wants it \n    else \n        unpark(queue_remove(m->q)); // hold lock (for next thread!) \n    m->guard = 0;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"important points about it",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if the release of the guard lock came after the  ",(0,r.kt)("inlineCode",{parentName:"li"},"park")," problems will occur because the process will sleep before releasing guard and the process currently in the critical section won't be able to do the work in unlock subroutine."),(0,r.kt)("li",{parentName:"ul"},"flag is not set to 0 in unlock subroutine because calling unpark will resume the parked process from just the next instruction to call to park. The parked thread will straight go into the critical section after being unparked"),(0,r.kt)("li",{parentName:"ul"},"If a thread calling lock subroutine finds that another thread has acquired the lock and it has executed the ",(0,r.kt)("inlineCode",{parentName:"li"},"guard= 0; ")," line. If now a context switch to the thread currently in critical section happen and that thread calls unlock: wakeup/waiting race"),(0,r.kt)("li",{parentName:"ul"},"to fix this solaris ha s ",(0,r.kt)("inlineCode",{parentName:"li"},"setpark")," syscall. Calling it indicates that thread is about to sleep. If it happens to be interrupted and another thread calls unpark before park is actually called, the subsequent park returns immediately instead of sleeping."),(0,r.kt)("li",{parentName:"ul"},"we just have to add ",(0,r.kt)("inlineCode",{parentName:"li"},"setpark();")," line between ",(0,r.kt)("inlineCode",{parentName:"li"},"queue _add")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"lock->guard=0;")),(0,r.kt)("li",{parentName:"ul"},"a different solution could be to let kernel handle the ",(0,r.kt)("inlineCode",{parentName:"li"},"guard")," variable.")))),(0,r.kt)("br",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux has ",(0,r.kt)("strong",{parentName:"li"},"futex")," for these things"),(0,r.kt)("li",{parentName:"ul"},"futex consists of a kernelspace wait queue that is attached to an atomic integer in userspace. Multiple processes or thread operate on the integer entirely in userspace (using atomic operations), and only resort to relatively expensive syscalls to request operations on the wait queue (for example to wake up waiting processes, or to put the current process on the wait queue)."),(0,r.kt)("li",{parentName:"ul"},"call to futex wait(address,expected) puts the calling thread to sleep, assuming the value at address is equal to expected. If it is not equal, the call returns immediately. The call to the routine futex wake(address)wakes one thread that is waiting on the queue"),(0,r.kt)("li",{parentName:"ul"},"code snippet from lowlevellock.h in the nptl library (part of the gnu libc library)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void mutex_lock (int *mutex) {\n    int v;\n    /* Bit 31 was clear, we got the mutex (this is the fastpath)*/\n    if (atomic_bit_test_set (mutex, 31) == 0)\n        return;\n    atomic_increment (mutex);\n    while (1) {\n        if (atomic_bit_test_set (mutex, 31) == 0) {\n        atomic_decrement (mutex);\n        return;\n    }\n        /* We have to wait now. First make sure the futex value\n        we are monitoring is truly negative (i.e. locked). */\n        v = *mutex;\n        if (v >= 0) continue;\n        futex_wait (mutex, v);\n    }\n}\nvoid mutex_unlock (int *mutex) {\n    /* Adding 0x80000000 to the counter results in 0 if and only if there are not other interested threads */\n/* Its same as zeroing ms bit*/\n    if (atomic_add_zero (mutex, 0x80000000))\n        return;\n    /* There are other threads waiting for this mutex, wake one of them up. */\n    futex_wake (mutex);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"two phase locking: the lock spin once(or k times) to check if lock got free"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/10.1145/2517349.2522714"},"Everything You Always Wanted to Know About Synchronization but Were Afraid to Ask"))))}u.isMDXComponent=!0}}]);