import{_ as p,r as a,o as c,c as t,d as s,b as e,e as n,a as r}from"./app.f4d26b80.js";const f=JSON.parse('{"title":"ek.checkSession","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/open/login/checkSession.md","lastUpdated":1663688878000}'),i={name:"api/open/login/checkSession.md"},d=s("h1",{id:"ek-checksession",tabindex:"-1"},[n("ek.checkSession "),s("a",{class:"header-anchor",href:"#ek-checksession","aria-hidden":"true"},"#")],-1),y=n(" \u652F\u6301 Promise"),D=s("p",null,[n("\u7EDF\u4E00\u7684\u68C0\u67E5\u767B\u5F55\u6001\u662F\u5426\u8FC7\u671F\u63A5\u53E3\uFF0C\u6309\u7167"),s("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html",target:"_blank",rel:"noreferrer"},"\u5FAE\u4FE1"),n("\u8BBE\u8BA1\uFF0C\u9700\u8981\u5728 Native \u81EA\u884C\u5B9E\u73B0\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u4F7F\u7528\u672C\u63A5\u53E3\uFF0C\u76F4\u63A5\u5728 JS \u7AEF\u81EA\u884C\u5B9E\u73B0\u3002")],-1),A=s("h3",{id:"\u53C2\u6570",tabindex:"-1"},[n("\u53C2\u6570 "),s("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),h=r(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">checkSession</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u672A\u8FC7\u671F</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5DF2\u8FC7\u671F</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">login</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ....</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2);function F(_,C,m,k,u,x){const o=a("Icon"),l=a("Props");return c(),t("div",null,[d,s("blockquote",null,[e(o,{type:"success"}),y]),D,A,e(l,{options:""}),h])}const S=p(i,[["render",F]]);export{f as __pageData,S as default};