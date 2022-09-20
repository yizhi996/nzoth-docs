import{r as n,o as p,c,d as s,b as e,e as a,a as r}from"./app.f4d26b80.js";const i=s("h1",{id:"ek-startlocationupdate",tabindex:"-1"},[a("ek.startLocationUpdate "),s("a",{class:"header-anchor",href:"#ek-startlocationupdate","aria-hidden":"true"},"#")],-1),d=a(" \u652F\u6301 Promise"),D=s("blockquote",null,[s("p",null,[a("\u9700\u8981\u7528\u6237\u6388\u6743 "),s("code",null,"scope.userLocation"),a("\u3002")])],-1),y=s("p",null,"\u5F00\u542F\u5C0F\u7A0B\u5E8F\u5728\u524D\u53F0\u65F6\u63A5\u6536\u4F4D\u7F6E\u66F4\u65B0\u6D88\u606F\u3002",-1),F=s("h3",{id:"\u53C2\u6570",tabindex:"-1"},[a("\u53C2\u6570 "),s("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),A=r(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onLocationChange</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F53\u524D\u4F4D\u7F6E: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">latitude</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">longitude</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startLocationUpdate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gcj02</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2),g=JSON.parse('{"title":"ek.startLocationUpdate","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/location/startLocationUpdate.md","lastUpdated":1663688878000}'),_={name:"api/location/startLocationUpdate.md"},k=Object.assign(_,{setup(C){const o=[{name:"type",type:"string",default:"gcj02",required:!1,desc:"\u8FD4\u56DE\u7684 gps \u5750\u6807\u7CFB",values:[{value:"wgs84",desc:"\u5730\u7403\u5750\u6807"},{value:"gcj02",desc:"\u706B\u661F\u5750\u6807"}]}];return(u,h)=>{const l=n("Icon"),t=n("Props");return p(),c("div",null,[i,s("blockquote",null,[e(l,{type:"success"}),d]),D,y,F,e(t,{data:o,options:""}),A])}}});export{g as __pageData,k as default};