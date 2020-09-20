(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=(n(0),n(90));const i={id:"list",title:"Data structure"},l={unversionedId:"python/list",id:"python/list",isDocsHomePage:!1,title:"Data structure",description:"\uc2dc\ud000\uc2a4\ud615 \uc790\ub8cc\uad6c\uc870",source:"@site/docs/python/list.md",slug:"/python/list",permalink:"/docs/python/list",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/list.md",version:"current",sidebar:"someSidebar",previous:{title:"Definition",permalink:"/docs/python/def"},next:{title:"Class",permalink:"/docs/python/class"}},c=[{value:"List",id:"list",children:[{value:"List\uc5d0 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ud568\uc218",id:"list\uc5d0-\uc790\uc8fc-\uc0ac\uc6a9\ub418\ub294-\ud568\uc218",children:[]},{value:"Queue",id:"queue",children:[]},{value:"\ub9ac\uc2a4\ud2b8 \ucef4\ud504\ub9ac\ud5e8\uc158",id:"\ub9ac\uc2a4\ud2b8-\ucef4\ud504\ub9ac\ud5e8\uc158",children:[]}]},{value:"Tuple",id:"tuple",children:[{value:"\ud56d\ubaa9\uc774 \uc5c6\uac70\ub098 \ud558\ub098\ub9cc \uc788\ub294 \ud29c\ube14",id:"\ud56d\ubaa9\uc774-\uc5c6\uac70\ub098-\ud558\ub098\ub9cc-\uc788\ub294-\ud29c\ube14",children:[]},{value:"Tuple Unpacking",id:"tuple-unpacking",children:[]}]},{value:"Set",id:"set",children:[{value:"Set Comprehension",id:"set-comprehension",children:[]}]},{value:"Dictionary (dict)",id:"dictionary-dict",children:[{value:"\uc790\uc8fc\uc0ac\uc6a9\ud558\ub294 \ubc18\ubcf5\ubb38 \ud328\ud134",id:"\uc790\uc8fc\uc0ac\uc6a9\ud558\ub294-\ubc18\ubcf5\ubb38-\ud328\ud134",children:[]}]}],o={rightToc:c};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"\uc2dc\ud000\uc2a4\ud615-\uc790\ub8cc\uad6c\uc870"},"\uc2dc\ud000\uc2a4\ud615 \uc790\ub8cc\uad6c\uc870"),Object(r.b)("h2",{id:"list"},"List"),Object(r.b)("h3",{id:"list\uc5d0-\uc790\uc8fc-\uc0ac\uc6a9\ub418\ub294-\ud568\uc218"},"List\uc5d0 \uc790\uc8fc \uc0ac\uc6a9\ub418\ub294 \ud568\uc218"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"list.append(x) - \ub05d\uc5d0 \ud558\ub098 \ucd94\uac00 ",Object(r.b)("inlineCode",{parentName:"li"},"a[len(a):] = [x]")),Object(r.b)("li",{parentName:"ul"},"list.extend(iterable) - \ub9ac\uc2a4\ud2b8 \ub05d\uc5d0 \uc774\ud130\ub7ec\ube14\uc758 \ubaa8\ub4e0 \ud56d\ubaa9\uc744 \ub367\ubd99\uc784 ",Object(r.b)("inlineCode",{parentName:"li"},"a[len(a):] = iterable")),Object(r.b)("li",{parentName:"ul"},"list.insert(i, x)"),Object(r.b)("li",{parentName:"ul"},"list.remove(x)"),Object(r.b)("li",{parentName:"ul"},"list.pop(","[i]",") "),Object(r.b)("li",{parentName:"ul"},"list.clear()"),Object(r.b)("li",{parentName:"ul"},"list.index(x[, start","[, end]","]) -- \ub9ac\uc2a4\ud130\uc5d0\uc11c x\uc758 \ud56d\ubaa9\uc5d0 \uc778\ub371\uc2a4\ub97c \ub9ac\ud134 \uac12\uc774 \uc5c6\uc73c\uba74 ValueError\ub97c \ub9ac\ud134\ud568"),Object(r.b)("li",{parentName:"ul"},"list.count(x) - \ub9ac\uc2a4\ud2b8\uc5d0\uc11c x\uc758 \ub4f1\uc7a5 \ud69f\uc218\ub97c \ub9ac\ud134"),Object(r.b)("li",{parentName:"ul"},"list.sort(key=None, reverse=False) "),Object(r.b)("li",{parentName:"ul"},"list.reverse()"),Object(r.b)("li",{parentName:"ul"},"list.copy() - \uc587\uc740 \uc0ac\ubcf8 ",Object(r.b)("inlineCode",{parentName:"li"},"a[:]"),"\uc640 \ub3d9\uc77c")),Object(r.b)("h3",{id:"queue"},"Queue"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# \ud050\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c\ub294 collections.deque \ub97c \uc0ac\uc6a9\ud558\ub77c\n>>> queue = deque([\"Eric\", \"John\", \"Michael\"])\n>>> queue.append(\"Terry\")           # Terry arrives\n>>> queue.append(\"Graham\")          # Graham arrives\n>>> queue.popleft()                 # The first to arrive now leaves\n'Eric'\n>>> queue.popleft()                 # The second to arrive now leaves\n'John'\n>>> queue                           # Remaining queue in order of arrival\ndeque(['Michael', 'Terry', 'Graham'])\n")),Object(r.b)("h3",{id:"\ub9ac\uc2a4\ud2b8-\ucef4\ud504\ub9ac\ud5e8\uc158"},"\ub9ac\uc2a4\ud2b8 \ucef4\ud504\ub9ac\ud5e8\uc158"),Object(r.b)("p",null,"\ub9ac\uc2a4\ud2b8 \ucef4\ud504\ub9ac\ud5e8\uc158\uc740 \ub9ac\uc2a4\ud2b8\ub97c \ub9cc\ub4dc\ub294 \uac04\uacb0\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"squares = list(map(lambda x: x**2, range(10)))\n\nsquares = [x**2 for x in range(10)]\n")),Object(r.b)("h2",{id:"tuple"},"Tuple"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"tuple\uc740 \ubd88\ubcc0\uc774\uace0 \ub2e4\ub978 \ud0c0\uc785\uc744 \ub2f4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),Object(r.b)("li",{parentName:"ul"},"\uc5b8\ud328\ud0b9\ud558\uac70\ub098 \uc778\ub371\uc2a4\ub97c \ud1b5\ud574\uc11c \uc811\uadfc\ud569\ub2c8\ub2e4.")),Object(r.b)("h3",{id:"\ud56d\ubaa9\uc774-\uc5c6\uac70\ub098-\ud558\ub098\ub9cc-\uc788\ub294-\ud29c\ube14"},"\ud56d\ubaa9\uc774 \uc5c6\uac70\ub098 \ud558\ub098\ub9cc \uc788\ub294 \ud29c\ube14"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),">>> empty = ()\n>>> singleton = 'hello',    # <-- note trailing comma\n>>> len(empty)\n0\n>>> len(singleton)\n1\n>>> singleton\n('hello',)\n")),Object(r.b)("h3",{id:"tuple-unpacking"},"Tuple Unpacking"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),">>> t = 12345, 54321, 'hello!'\n>>> x, y, z = t\n>>> x\n12345\n>>> y\n54321\n>>> z\n'hello!'\n")),Object(r.b)("h1",{id:"\uc9d1\ud569\ud615-\uc790\ub8cc\uad6c\uc870-\ud574\uc2dc\uac00\ub2a5"},"\uc9d1\ud569\ud615 \uc790\ub8cc\uad6c\uc870, \ud574\uc2dc\uac00\ub2a5"),Object(r.b)("h2",{id:"set"},"Set"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc9d1\ud569\uc740 \uc911\ubcf5\ub418\ub294 \uc694\uc18c\uac00 \uc5c6\ub294 \uc21c\uc11c \uc5c6\ub294 \uceec\ub809\uc158"),Object(r.b)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc778 \uc6a9\ub3c4\ub294 \uba64\ubc84\uc2ed \uac80\uc0ac(exists)\uc640 \uc911\ubcf5 \uc5d4\ud2b8\ub9ac \uc81c\uac70(unique)\uc785\ub2c8\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\uc9d1\ud569 \uac1d\uccb4\ub294 \ud569\uc9d1\ud569, \uad50\uc9d1\ud569, \ucc28\uc9d1\ud569, \ub300\uce6d \ucc28\uc9d1\ud569\uacfc \uac19\uc740 \uc218\ud559\uc801\uc778 \uc5f0\uc0b0\ub4e4\ub3c4 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),Object(r.b)("li",{parentName:"ul"},"\ube48\uc9d1\ud569\uc740 {}\uac00 \uc544\ub2cc Set() \uc785\ub2c8\ub2e4. {}\uc740 dict\uc5d0\uc11c \uc0ac\uc6a9 ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),">>> basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}\n>>> print(basket)                      # show that duplicates have been removed\n{'orange', 'banana', 'pear', 'apple'}\n>>> 'orange' in basket                 # fast membership testing\nTrue\n>>> 'crabgrass' in basket\nFalse\n\n>>> a = set('abracadabra')\n>>> b = set('alacazam')\n>>> a                                  # unique letters in a\n{'a', 'r', 'b', 'c', 'd'}\n>>> a - b                              # letters in a but not in b\n{'r', 'd', 'b'}\n>>> a | b                              # letters in a or b or both\n{'a', 'c', 'r', 'd', 'b', 'm', 'z', 'l'}\n>>> a & b                              # letters in both a and b\n{'a', 'c'}\n>>> a ^ b                              # letters in a or b but not both\n{'r', 'd', 'b', 'm', 'z', 'l'}\n")),Object(r.b)("h3",{id:"set-comprehension"},"Set Comprehension"),Object(r.b)("p",null,"\ub9ac\uc2a4\ud2b8\uc758 \uacbd\uc6b0 [], Set\uc758 \uacbd\uc6b0 {}"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),">>> a = {x for x in 'abracadabra' if x not in 'abc'}\n>>> a\n{'r', 'd'}\n")),Object(r.b)("h1",{id:"\ub9e4\ud551\ud615-\uc790\ub8cc\uad6c\uc870"},"\ub9e4\ud551\ud615 \uc790\ub8cc\uad6c\uc870"),Object(r.b)("h2",{id:"dictionary-dict"},"Dictionary (dict)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub2e4\ub978 \uc5b8\uc5b4\uc5d0\uc11c\ub294 associate memories, associative array"),Object(r.b)("li",{parentName:"ul"},"\uc22b\uc790\ub85c \uc778\ub371\uc2f1 \ub418\ub294 \uc2dc\ud000\uc2a4\uc640 \ub2ec\ub9ac, \ub515\uc154\ub108\ub9ac\ub294 \ud0a4\ub85c \uc778\ub371\uc2f1\ub418\ub294\ub370 \ubaa8\ub4e0 \ubd88\ubcc0\ud615\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"),Object(r.b)("li",{parentName:"ul"},"\ud29c\ud50c\uc774 \ubb38\uc790\uc5f4, \uc22b\uc790, \ud29c\ud50c\ub4e4\ub9cc \ud3ec\ud568\ud558\uba74, \ud0a4\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4; \ud29c\ud50c\uc774 \uc9c1\uc811\uc801\uc774\ub098 \uac04\uc811\uc801\uc73c\ub85c \uac00\ubcc0 \uac1d\uccb4\ub97c \ud3ec\ud568\ud558\uba74, \ud0a4\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\ube48\uac12\uc740 {}")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),">>> tel = {'jack': 4098, 'sape': 4139}\n>>> tel['guido'] = 4127\n>>> tel\n{'jack': 4098, 'sape': 4139, 'guido': 4127}\n>>> tel['jack']\n4098\n>>> del tel['sape']\n>>> tel['irv'] = 4127\n>>> tel\n{'jack': 4098, 'guido': 4127, 'irv': 4127}\n>>> list(tel) # \ud0a4\uac00 \uc5bb\uc5b4\uc9d0\n['jack', 'guido', 'irv']\n>>> sorted(tel) # \ud0a4\ub97c \uc815\ub82c\ud55c \uac12\n['guido', 'irv', 'jack']\n>>> 'guido' in tel\nTrue\n>>> 'jack' not in tel\nFalse\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# \ud29c\ube14\uc758 \uc2dc\ud000\uc2a4\ub97c \ud1b5\ud574\uc11c dict\ub97c \uc0dd\uc131\n>>> dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])\n\n# dict comprehansion\n>>> {x: x**2 for x in (2, 4, 6)}\n\n# \ud0a4\uac00 \ubb38\uc790\uc778 \uacbd\uc6b0 \ud0a4\uc6cc\ub4dc \uc778\uc790 \ubc29\uc2dd\uc73c\ub85c \uc9c0\uc815 \uac00\ub2a5\n>>> dict(sape=4139, guido=4127, jack=4098)\n")),Object(r.b)("h3",{id:"\uc790\uc8fc\uc0ac\uc6a9\ud558\ub294-\ubc18\ubcf5\ubb38-\ud328\ud134"},"\uc790\uc8fc\uc0ac\uc6a9\ud558\ub294 \ubc18\ubcf5\ubb38 \ud328\ud134"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),">>> knights = {'gallahad': 'the pure', 'robin': 'the brave'}\n>>> for k, v in knights.items():\n...     print(k, v)\n\n### \uc2dc\ud000\uc2a4\ub97c \ubc18\ubcf5\ud560\ub54c \uc778\ub371\uc2a4\ub97c \uc5bb\uace0 \uc2f6\uc73c\uba74 enumerate\ub97c \uc0ac\uc6a9\n>>> for i, v in enumerate(['tic', 'tac', 'toe']):\n...     print(i, v)\n\n### sorted\ub294 \uc6d0\ubcf8\uc744 \ubc14\uafb8\uc9c0 \uc54a\uace0 \uc815\ub82c\ub41c \uac12\uc744 \ubc1b\uace0 \uc2f6\uc744\ub54c \uc0ac\uc6a9\n>>> basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']\n>>> for f in sorted(set(basket)):\n...     print(f)\n")))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);