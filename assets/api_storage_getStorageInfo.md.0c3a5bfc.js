import{r as a,o as c,c as p,d as e,b as t,e as s,a as i}from"./app.f4d26b80.js";const d=e("h1",{id:"ek-getstorageinfo",tabindex:"-1"},[s("ek.getStorageInfo "),e("a",{class:"header-anchor",href:"#ek-getstorageinfo","aria-hidden":"true"},"#")],-1),_=s(" \u652F\u6301 Promise"),h=e("p",null,"\u5F02\u6B65\u83B7\u53D6\u5F53\u524D storage \u7684\u76F8\u5173\u4FE1\u606F\u3002",-1),g=e("h3",{id:"\u53C2\u6570",tabindex:"-1"},[s("\u53C2\u6570 "),e("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),u=e("h3",{id:"\u8FD4\u56DE",tabindex:"-1"},[s("\u8FD4\u56DE "),e("a",{class:"header-anchor",href:"#\u8FD4\u56DE","aria-hidden":"true"},"#")],-1),m=i(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getStorageInfo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keys)</span></span>
<span class="line"></span></code></pre></div>`,2),k=JSON.parse('{"title":"ek.getStorageInfo","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE","slug":"\u8FD4\u56DE","link":"#\u8FD4\u56DE","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/storage/getStorageInfo.md","lastUpdated":1663688878000}'),y={name:"api/storage/getStorageInfo.md"},F=Object.assign(y,{setup(A){const n=[{name:"keys",type:"string[]",desc:"\u5F53\u524D storage \u4E2D\u6240\u6709\u7684 key"},{name:"currentSize",type:"number",desc:"\u5F53\u524D\u5360\u7528\u7684\u7A7A\u95F4\u5927\u5C0F, \u5355\u4F4D KB"},{name:"limitSize",type:"number",desc:"\u9650\u5236\u7684\u7A7A\u95F4\u5927\u5C0F\uFF0C\u5355\u4F4D KB"}];return(D,C)=>{const o=a("Icon"),l=a("Props"),r=a("Results");return c(),p("div",null,[d,e("blockquote",null,[t(o,{type:"success"}),_]),h,g,t(l,{options:""}),u,t(r,{data:n}),m])}}});export{k as __pageData,F as default};