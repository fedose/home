(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{11:function(e,t,c){},32:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),o=c(13),i=c.n(o),a=c(6),s=c(16),l=c(3),j=c(15),h=(c(32),c(1));var b=function(){var e="Homepage",t="Color Pairs",c="Old Matches",n="Ahrefs / Since 2016",r="Claustrophobia / 2016",o="Art. Lebedev Studio / 2010\u20132016",i="Email / fokinf@gmail.com",l="Facebook / fokinf",b="Instagram / fedose",d=function(){a.a.event({category:e.toString(),action:c.toString()})};return Object(h.jsx)("div",{className:"pattern",children:Object(h.jsxs)("main",{children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)("title",{children:"Fedor Fokin"}),Object(h.jsx)("meta",{charset:"utf-8"}),Object(h.jsx)("meta",{name:"description",content:"Interaction designer"}),Object(h.jsx)("meta",{property:"og:title",content:"Fedor Fokin"}),Object(h.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Fedor Fokin"}),"Interaction designer",Object(h.jsx)("br",{})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Projects"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:d,children:Object(h.jsx)("a",{href:"https://directorsfilms.com",target:"_blank",children:"Directors\u2019 Films"})}),Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:t.toString()})},children:Object(h.jsx)(s.b,{to:"/color-pairs",children:t})}),Object(h.jsx)("li",{onClick:d,children:Object(h.jsx)("a",{href:"https://www.instagram.com/oldmatches/",target:"_blank",children:c})})]})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Work"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:n.toString()})},children:Object(h.jsx)("a",{href:"https://ahrefs.com",target:"_blank",children:n})}),Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:r.toString()})},children:Object(h.jsx)("a",{href:"https://claustrophobia.com/",target:"_blank",children:r})}),Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:o.toString()})},children:Object(h.jsx)("a",{href:"https://www.artlebedev.ru/fedose/",target:"_blank",children:o})})]})]}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:"Contact"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:i.toString()})},children:Object(h.jsx)("a",{href:"mailto:fokinf@gmail.com",children:i})}),Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:l.toString()})},children:Object(h.jsx)("a",{href:"https://www.facebook.com/fokinf",target:"_blank",children:l})}),Object(h.jsx)("li",{onClick:function(){a.a.event({category:e.toString(),action:b.toString()})},children:Object(h.jsx)("a",{href:"https://www.instagram.com/fedose",target:"_blank",children:b})})]})]}),Object(h.jsx)("footer",{children:"2010\u20132024"})]})})},d=c(10),O=c(12),u=c(38);c(11);var f=function(e){return Object(h.jsx)("div",{className:"core",style:{backgroundColor:e.color}})};var x=function(e){return Object(h.jsx)("div",{className:"half",style:{backgroundColor:e.halfColor},children:Object(h.jsx)(f,{color:e.coreColor})})};var g=function(e){return Object(h.jsx)("div",{className:"popover",children:e.children})};var m=function(e){return Object(h.jsx)("div",{className:"popover slim",children:e.children})},v=[{left:"#4F4B6B",right:"#9A84BC",core:"#7C679C"},{left:"#EDB240",right:"#38ADBD",core:"#CBA162"},{left:"#FAEA5C",right:"#7FC5E3",core:"#ACD38D"},{left:"#E3CBAB",right:"#8E9593",core:"#B4AC94"},{left:"#282828",right:"#F3F3F3",core:"#808080"},{left:"#FFE381",right:"#BBA6F4",core:"#90CCF8"},{left:"#7EFFFC",right:"#13587A",core:"#7AD4FF"},{left:"#B5B8BA",right:"#F1F2A1",core:"#D4D4AC"}],p=c.p+"static/media/update.3d6d8854.svg";var C=function(e){var t=v,c=Object(n.useState)(0),r=Object(d.a)(c,2),o=r[0],i=r[1];return Object(h.jsxs)("button",{type:"button",className:"button",onClick:function(){return e.setLeft(t[o].left),e.setRight(t[o].right),e.setCore(t[o].core),function(){if(o==t.length-1)return i(0);i(o+1)}(),void a.a.event({category:"Color Pairs",action:"Click on Another example"})},children:[Object(h.jsx)("img",{className:"icon-small",src:p,alt:"Update"}),"Show example"]})};var k=function(e){return Object(h.jsx)("img",{className:"icon",src:e.src,alt:e.alt})},w=function(e,t){Object(n.useEffect)((function(){var c=!1,n=!1,r=function(r){!c&&n&&e.current&&!e.current.contains(r.target)&&t(r)},o=function(t){n=e.current,c=e.current&&e.current.contains(t.target)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),document.addEventListener("click",r),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o),document.removeEventListener("click",r)}}),[e,t])},F=c.p+"static/media/left-half.baf716be.svg",S=c.p+"static/media/right-half.d6d97a29.svg",E=c.p+"static/media/core.974122f8.svg";c.p;var A=function(){var e="Color Pairs",t=function(){a.a.event({category:e.toString(),action:"Click on pickers"})},c=Object(n.useState)("#B5B8BA"),r=Object(d.a)(c,2),o=r[0],i=r[1],s=Object(n.useState)("#F1F2A1"),l=Object(d.a)(s,2),b=l[0],f=l[1],v=Object(n.useState)("#D4D4AC"),p=Object(d.a)(v,2),A=p[0],y=p[1],N=Object(n.useRef)(),B=Object(n.useCallback)((function(){return M(!1)}),[]);w(N,B);var D=Object(n.useState)(!0),L=Object(d.a)(D,2),I=L[0],P=L[1],_=Object(n.useState)(!1),R=Object(d.a)(_,2),J=R[0],M=R[1];return Object(h.jsxs)("div",{className:"app",onClick:function(){return M(!0),P(!1),void a.a.event({category:e.toString(),action:"Click anywhere"})},children:[Object(h.jsxs)(j.a,{children:[Object(h.jsx)("title",{children:"Color Pairs \u2013 Explore color relativity"}),Object(h.jsx)("meta",{charset:"utf-8"}),Object(h.jsx)("meta",{name:"description",content:"Explore how different backgrounds affect the same color."}),Object(h.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),Object(h.jsx)(u.a,{in:I,timeout:200,classNames:"popover",unmountOnExit:!0,children:Object(h.jsx)(m,{children:Object(h.jsxs)("p",{className:"intro",children:["Explore how background affects the same color.",Object(h.jsx)("br",{}),"Click anywhere to change the colors",Object(h.jsx)("span",{className:"inline-icon"})]})})}),Object(h.jsx)(u.a,{in:J,timeout:200,classNames:"popover",unmountOnExit:!0,children:Object(h.jsx)(g,{children:Object(h.jsxs)("div",{className:"content",ref:N,children:[Object(h.jsxs)("div",{className:"color-settings",children:[Object(h.jsxs)("div",{className:"pickers",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{src:F,alt:"Left half"}),Object(h.jsx)(O.b,{color:o,onChange:i,onClick:t}),Object(h.jsx)(O.a,{className:"input",color:o,onChange:i})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{src:E,alt:"Core"}),Object(h.jsx)(O.b,{color:A,onChange:y,onClick:t}),Object(h.jsx)(O.a,{className:"input",color:A,onChange:y})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(k,{src:S,alt:"Right half"}),Object(h.jsx)(O.b,{color:b,onChange:f,onClick:t}),Object(h.jsx)(O.a,{className:"input",color:b,onChange:f})]})]}),Object(h.jsx)(C,{setLeft:i,setRight:f,setCore:y})]}),Object(h.jsxs)("p",{className:"about",children:["Explore how background affects the same color.",Object(h.jsx)("br",{}),"Inspired by Josef Albers\u2019s ",Object(h.jsx)("i",{children:"Interaction of Color"}),"."]})]})})}),Object(h.jsx)(x,{halfColor:o,coreColor:A}),Object(h.jsx)(x,{halfColor:b,coreColor:A})]})};a.a.initialize("UA-201234884-1");var y=function(){return Object(n.useEffect)((function(){a.a.pageview(window.location.pathname+window.location.search)}),[]),Object(h.jsx)(s.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(b,{})}),Object(h.jsx)(l.a,{path:"/color-pairs",children:Object(h.jsx)(A,{})})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.02584d5a.chunk.js.map