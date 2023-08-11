"use strict";(self.webpackChunkgatsbydecapblog=self.webpackChunkgatsbydecapblog||[]).push([[230],{8847:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),a=r(7747),o=r(2675),l=r(2757),i=r(2883),m=r(4160),c=r(4323);function s(e){let{post:t}=e;const{date:r,title:s,preview:u,slug:d,category:g}=t.frontmatter;return n.createElement(a.xu,null,n.createElement(o.x,{color:"#757575",fontSize:"0.875rem"},r),n.createElement(c.Z,{category:g}),n.createElement(l.X,{color:"#292929",as:"h3",fontWeight:"400",fontSize:"1.5rem"},s),n.createElement(o.x,{lineHeight:"1.54",my:"1rem",fontSize:"1.125rem",as:"p",color:"rgba(0,0,0,.8)"},u),n.createElement(i.r,{as:m.rU,to:"/blog/"+d},n.createElement(o.x,{fontSize:"1rem",textDecoration:"underline",_hover:{color:"#0074d9"}},"Read Article")),n.createElement(a.xu,{h:"1px",bg:"#e6e6e6",my:"3rem"}))}var u=r(8702),d=r(5893),g=e=>(0,d.jsx)(u.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});g.displayName="StackItem";var p=r(5432);Object.freeze(["base","sm","md","lg","xl","2xl"]);var f=(0,r(6554).G)(((e,t)=>{const{isInline:r,direction:a,align:o,justify:l,spacing:i="0.5rem",wrap:m,children:c,divider:s,className:f,shouldWrapChildren:h,...E}=e,b=r?"row":null!=a?a:"column",y=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(a=r,o=e=>n[e],Array.isArray(a)?a.map((e=>null===e?null:o(e))):(0,p.Kn)(a)?Object.keys(a).reduce(((e,t)=>(e[t]=o(a[t]),e)),{}):null!=a?o(a):null)};var a,o}({spacing:i,direction:b})),[i,b]),x=!!s,v=!h&&!x,k=(0,n.useMemo)((()=>{const e=function(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(c);return v?e:e.map(((t,r)=>{const a=void 0!==t.key?t.key:r,o=r+1===e.length,l=h?(0,d.jsx)(g,{children:t},a):t;if(!x)return l;const i=(0,n.cloneElement)(s,{__css:y}),m=o?null:i;return(0,d.jsxs)(n.Fragment,{children:[l,m]},a)}))}),[s,y,x,v,h,c]),w=(0,p.cx)("chakra-stack",f);return(0,d.jsx)(u.m.div,{ref:t,display:"flex",alignItems:o,justifyContent:l,flexDirection:b,flexWrap:m,gap:x?void 0:i,className:w,...E,children:k})}));function h(e){let{currentPage:t,numberOfPages:r}=e;const a=t-1==0||t-1==1?"/blog":"/blog/"+(t-1),l=t===r?"/blog":"/blog/"+(t+1);return n.createElement(f,{mb:"1.5rem",direction:"row",justify:"center"},n.createElement(f,{direction:"row"},n.createElement(i.r,{_hover:{underline:"none"},as:m.rU,to:a},n.createElement(o.x,{fontSize:"1.125rem"},"← Prev")),n.createElement(i.r,{_hover:{underline:"none"},as:m.rU,to:l},n.createElement(o.x,{fontSize:"1.125rem"}," Next → "))))}f.displayName="Stack";var E=r(3717);function b(e){let{posts:t,cats:r,title:o,currentPage:i,numberOfPages:m,isHome:u}=e;return n.createElement(a.xu,{pt:"3rem",px:"1rem"},n.createElement(l.X,{mb:"1rem",fontWeight:"400",lineHeight:"1.3",as:"h2",fontSize:"1.875rem"},o),r&&n.createElement(E.k,{mt:"0.5rem",mb:"1rem"},r.map((e=>n.createElement(c.Z,{key:e,category:e})))),n.createElement(a.xu,{h:"1px",bg:"#e6e6e6",mb:"3rem"}),t.map((e=>n.createElement(s,{post:e,key:e.frontmatter.slug}))),u&&n.createElement(h,{currentPage:i,numberOfPages:m}))}},4323:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(4160),o=r(2883),l=r(2675);function i(e){let{category:t}=e;return n.createElement(o.r,{as:a.rU,to:"/blog/"+t},n.createElement(l.x,{_hover:{color:"#0074d9"},mt:"0.5rem",mr:"0.5rem",mb:"1rem",color:"#757575",fontSize:"0.875rem"},"#",t))}},1443:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(4160);const o=()=>(0,a.K2)("370345306").site.siteMetadata;function l(e){let{title:t,description:r,pathname:a,children:l,published:i}=e;const{title:m,author:c,description:s,image:u,icon:d,siteUrl:g,twitterUsername:p}=o(),f={title:t||m,description:r||s,image:""+g+u,icon:""+g+d,url:""+g+(a||""),twitterUsername:p,author:c,published:i};return n.createElement(n.Fragment,null,n.createElement("title",null,f.title+" - "+f.description),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"google-site-verification",content:"igOICjk9bCW_fL7huhobl9wiAwCzVll7ichYyw41Vs8"}),n.createElement("meta",{name:"description",content:f.description}),n.createElement("meta",{name:"image",content:f.image}),n.createElement("meta",{name:"author",content:f.author}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:creator",content:f.twitterUsername}),n.createElement("meta",{property:"article:published_time",content:f.published}),n.createElement("meta",{property:"og:title",content:f.title}),n.createElement("meta",{property:"og:description",content:f.description}),n.createElement("meta",{property:"og:url",content:f.url}),n.createElement("meta",{property:"og:image",content:f.image}),n.createElement("meta",{property:"og:image:alt",content:"my social media banner"}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("link",{rel:"icon",href:f.icon}),l)}},7448:function(e,t,r){r.r(t),r.d(t,{Head:function(){return d},default:function(){return u}});var n=r(7294),a=r(7747),o=r(2757),l=r(2675),i=r(2250);function m(){return n.createElement(a.xu,{px:"1rem",pt:"3rem"},n.createElement(o.X,{as:"h1",fontSize:"3rem",fontWeight:"400",lineHeight:"1.3"},"Hello World"),n.createElement(l.x,{mt:"1rem",mb:"1.5rem",fontSize:"1.5rem",fontWeight:"400",lineHeight:"1.3"},"Eleventy Duo is a minimal and beautiful Eleventy theme for personal blogs. Checkout the project's github repo for more info."),n.createElement(i.Z,null))}var c=r(1443),s=r(8847);function u(e){let{data:t}=e;const r=t.allMdx.nodes;return n.createElement(n.Fragment,null,n.createElement(m,null),n.createElement(s.Z,{title:"Recent Posts",posts:r}))}const d=()=>n.createElement(c.Z,null)},2757:function(e,t,r){r.d(t,{X:function(){return c}});var n=r(6554),a=r(2381),o=r(3179),l=r(8702),i=r(5432),m=r(5893),c=(0,n.G)((function(e,t){const r=(0,a.mq)("Heading",e),{className:n,...c}=(0,o.Lr)(e);return(0,m.jsx)(l.m.h2,{ref:t,className:(0,i.cx)("chakra-heading",e.className),...c,__css:r})}));c.displayName="Heading"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-d617561d9bcb45164fe3.js.map