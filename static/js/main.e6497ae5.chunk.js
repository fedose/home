(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{12:function(e,t,c){},32:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),r=c(13),i=c.n(r),a=c(6),s=c(16),l=c(3),j=c(15),b=(c(32),c(1));var h=function(){var e="Homepage",t="Color Pair",c="Old Matches",n="Ahrefs / Since 2016",o="Claustrophobia / 2016",r="Art. Lebedev Studio / 2010\u20132016",i="Email / fokinf@gmail.com",l="Facebook / fokinf",h="Instagram / fedose";return Object(b.jsx)("div",{className:"pattern",children:Object(b.jsxs)("main",{children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)("title",{children:"Fedor Fokin"}),Object(b.jsx)("meta",{charset:"utf-8"}),Object(b.jsx)("meta",{name:"description",content:"A Russian interaction designer living in Singapore."}),Object(b.jsx)("meta",{property:"og:title",content:"Fedor Fokin"}),Object(b.jsx)("meta",{property:"og:description",content:"A Russian interaction designer living in Singapore."}),Object(b.jsx)("meta",{property:"og:url",content:"https://fedorfokin.com"}),Object(b.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Fedor Fokin"}),"User interface designer",Object(b.jsx)("br",{}),"Russia / Singapore"]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Projects"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:t.toString()})},children:Object(b.jsx)(s.b,{to:"/color-pair",children:t})}),Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:c.toString()})},children:Object(b.jsx)("a",{href:"https://www.instagram.com/oldmatches/",target:"_blank",children:c})})]})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Work"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:n.toString()})},children:Object(b.jsx)("a",{href:"https://ahrefs.com",target:"_blank",children:n})}),Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:o.toString()})},children:Object(b.jsx)("a",{href:"https://claustrophobia.com/",target:"_blank",children:o})}),Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:r.toString()})},children:Object(b.jsx)("a",{href:"https://www.artlebedev.ru/fedose/",target:"_blank",children:r})})]})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Contact"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:i.toString()})},children:Object(b.jsx)("a",{href:"mailto:fokinf@gmail.com",children:i})}),Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:l.toString()})},children:Object(b.jsx)("a",{href:"https://www.facebook.com/fokinf",target:"_blank",children:l})}),Object(b.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:h.toString()})},children:Object(b.jsx)("a",{href:"https://www.instagram.com/fedose",target:"_blank",children:h})})]})]}),Object(b.jsx)("footer",{children:"2010\u20132021"})]})})},d=c(10),u=c(11),O=c(38);c(12);var f=function(e){return Object(b.jsx)("div",{className:"core",style:{backgroundColor:e.color}})};var x=function(e){return Object(b.jsx)("div",{className:"half",style:{backgroundColor:e.halfColor},children:Object(b.jsx)(f,{color:e.coreColor})})};var g=function(e){return Object(b.jsx)("div",{className:"popover",children:e.children})},m=[{left:"#4F4B6B",right:"#9A84BC",core:"#7C679C"},{left:"#EDB240",right:"#38ADBD",core:"#CBA162"},{left:"#FAEA5C",right:"#7FC5E3",core:"#ACD38D"},{left:"#E3CBAB",right:"#8E9593",core:"#B4AC94"},{left:"#282828",right:"#F3F3F3",core:"#808080"},{left:"#B5B8BA",right:"#F1F2A1",core:"#D4D4AC"}],p=c.p+"static/media/update.3d6d8854.svg";var v=function(e){var t=m,c=Object(n.useState)(0),o=Object(d.a)(c,2),r=o[0],i=o[1];return Object(b.jsxs)("button",{type:"button",className:"button",onClick:function(){return e.setLeft(t[r].left),e.setRight(t[r].right),e.setCore(t[r].core),function(){if(r==t.length-1)return i(0);i(r+1)}(),void a.a.event({category:"Color Pair",action:"Click on Another example"})},children:[Object(b.jsx)("img",{src:p,alt:"Update"}),"Show example"]})};var C=function(e){return Object(b.jsx)("img",{className:"icon",src:e.src,alt:e.alt})},k=function(e,t){Object(n.useEffect)((function(){var c=!1,n=!1,o=function(o){!c&&n&&e.current&&!e.current.contains(o.target)&&t(o)},r=function(t){n=e.current,c=e.current&&e.current.contains(t.target)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),document.addEventListener("click",o),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r),document.removeEventListener("click",o)}}),[e,t])},w=c.p+"static/media/left-half.baf716be.svg",S=c.p+"static/media/right-half.d6d97a29.svg",y=c.p+"static/media/core.974122f8.svg";c.p;var A=function(){var e="Color Pair",t=function(){a.a.event({category:e.toString(),action:"Click on pickers"})},c=Object(n.useState)("#B5B8BA"),o=Object(d.a)(c,2),r=o[0],i=o[1],s=Object(n.useState)("#F1F2A1"),l=Object(d.a)(s,2),h=l[0],f=l[1],m=Object(n.useState)("#D4D4AC"),p=Object(d.a)(m,2),A=p[0],E=p[1],F=Object(n.useRef)(),N=Object(n.useCallback)((function(){return J(!1)}),[]);k(F,N);var B=Object(n.useState)(!0),L=Object(d.a)(B,2),D=L[0],P=L[1],R=Object(n.useState)(!1),_=Object(d.a)(R,2),I=_[0],J=_[1];return Object(b.jsxs)("div",{className:"app",onClick:function(){return J(!0),P(!1),void a.a.event({category:e.toString(),action:"Click anywhere"})},children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)("title",{children:"Color Pair \u2013 Explore color relativity"}),Object(b.jsx)("meta",{charset:"utf-8"}),Object(b.jsx)("meta",{name:"description",content:"Explore how different backgrounds affect the same color."}),Object(b.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),Object(b.jsx)(O.a,{in:D,timeout:200,classNames:"popover",unmountOnExit:!0,children:Object(b.jsx)(g,{children:Object(b.jsxs)("p",{className:"intro",children:["Explore how background affects the same color.",Object(b.jsx)("br",{}),"Click anywhere to change the colors",Object(b.jsx)("span",{className:"inline-icon"})]})})}),Object(b.jsx)(O.a,{in:I,timeout:200,classNames:"popover",unmountOnExit:!0,children:Object(b.jsx)(g,{children:Object(b.jsxs)("div",{className:"content",ref:F,children:[Object(b.jsxs)("div",{className:"color-settings",children:[Object(b.jsxs)("div",{className:"pickers",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{src:w,alt:"Left half"}),Object(b.jsx)(u.b,{color:r,onChange:i,onClick:t}),Object(b.jsx)(u.a,{className:"input",color:r,onChange:i})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{src:y,alt:"Core"}),Object(b.jsx)(u.b,{color:A,onChange:E,onClick:t}),Object(b.jsx)(u.a,{className:"input",color:A,onChange:E})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(C,{src:S,alt:"Right half"}),Object(b.jsx)(u.b,{color:h,onChange:f,onClick:t}),Object(b.jsx)(u.a,{className:"input",color:h,onChange:f})]})]}),Object(b.jsx)(v,{setLeft:i,setRight:f,setCore:E})]}),Object(b.jsxs)("p",{className:"about",children:["Explore how background affects the same color.",Object(b.jsx)("br",{}),"Inspired by Josef Albers\u2019s ",Object(b.jsx)("i",{children:"Interaction of Color"}),"."]})]})})}),Object(b.jsx)(x,{halfColor:r,coreColor:A}),Object(b.jsx)(x,{halfColor:h,coreColor:A})]})};a.a.initialize("UA-201234884-1");var E=function(){return Object(n.useEffect)((function(){a.a.pageview(window.location.pathname+window.location.search)}),[]),Object(b.jsx)(s.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(h,{})}),Object(b.jsx)(l.a,{path:"/color-pair",children:Object(b.jsx)(A,{})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),F()}},[[36,1,2]]]);
//# sourceMappingURL=main.e6497ae5.chunk.js.map