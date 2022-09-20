import{r as e,o as t,c as r,d as s,b as n,e as a,a as c}from"./app.f4d26b80.js";const i=s("h1",{id:"ek-previewimage",tabindex:"-1"},[a("ek.previewImage "),s("a",{class:"header-anchor",href:"#ek-previewimage","aria-hidden":"true"},"#")],-1),D=a(" \u652F\u6301 Promise"),d=s("p",null,"\u5728\u65B0\u9875\u9762\u4E2D\u5168\u5C4F\u9884\u89C8\u56FE\u7247\u3002",-1),y=s("h3",{id:"\u53C2\u6570",tabindex:"-1"},[a("\u53C2\u6570 "),s("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),_=c(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> urls </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/1.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/2.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nzfile://usr/test.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nzfile://tmp_{random}.png</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">previewImage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  urls</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">current</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> urls[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2),h=JSON.parse('{"title":"ek.previewImage","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/media/image/previewImage.md","lastUpdated":1663688878000}'),C={name:"api/media/image/previewImage.md"},g=Object.assign(C,{setup(F){const l=[{name:"urls",type:"string[]",default:"",required:!0,desc:"\u9700\u8981\u9884\u89C8\u7684\u56FE\u7247\u94FE\u63A5\u5217\u8868"},{name:"current",type:"string",default:"urls[0]",required:!1,desc:"\u5F53\u524D\u663E\u793A\u56FE\u7247\u7684\u94FE\u63A5"}];return(m,A)=>{const p=e("Icon"),o=e("Props");return t(),r("div",null,[i,s("blockquote",null,[n(p,{type:"success"}),D]),d,y,n(o,{data:l,options:""}),_])}}});export{h as __pageData,g as default};