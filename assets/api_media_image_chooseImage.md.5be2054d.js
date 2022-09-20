import{r as n,o as i,c as d,d as e,b as a,e as s,a as m}from"./app.f4d26b80.js";const h=e("h1",{id:"ek-chooseimage",tabindex:"-1"},[s("ek.chooseImage "),e("a",{class:"header-anchor",href:"#ek-chooseimage","aria-hidden":"true"},"#")],-1),u=s(" \u652F\u6301 Promise"),_=e("p",null,"\u4ECE\u672C\u5730\u76F8\u518C\u9009\u62E9\u56FE\u7247\u6216\u4F7F\u7528\u76F8\u673A\u62CD\u7167\u3002",-1),y=e("h3",{id:"\u53C2\u6570",tabindex:"-1"},[s("\u53C2\u6570 "),e("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),F=e("h3",{id:"\u8FD4\u56DE",tabindex:"-1"},[s("\u8FD4\u56DE "),e("a",{class:"header-anchor",href:"#\u8FD4\u56DE","aria-hidden":"true"},"#")],-1),A=e("h3",{id:"tempfile",tabindex:"-1"},[s("TempFile "),e("a",{class:"header-anchor",href:"#tempfile","aria-hidden":"true"},"#")],-1),D=m(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chooseImage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">count</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tempFilePaths)</span></span>
<span class="line"></span></code></pre></div>`,2),x=JSON.parse('{"title":"ek.chooseImage","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE","slug":"\u8FD4\u56DE","link":"#\u8FD4\u56DE","children":[]},{"level":3,"title":"TempFile","slug":"tempfile","link":"#tempfile","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/media/image/chooseImage.md","lastUpdated":1663688878000}'),C={name:"api/media/image/chooseImage.md"},k=Object.assign(C,{setup(g){const t=[{name:"count",type:"number",default:"9",required:!1,desc:"\u6700\u591A\u53EF\u4EE5\u9009\u62E9\u7684\u56FE\u7247\u5F20\u6570"},{name:"sizeType",type:"string[]",default:"['original', 'compressed']",required:!1,desc:"\u6240\u9009\u7684\u56FE\u7247\u7684\u5C3A\u5BF8",values:[{value:"original",desc:"\u539F\u56FE"},{value:"compressed",desc:"\u538B\u7F29\u56FE"}]},{name:"sourceType",type:"string[]",default:"['album', 'camera']",required:!1,desc:"\u9009\u62E9\u56FE\u7247\u7684\u6765\u6E90",values:[{value:"album",desc:"\u4ECE\u76F8\u518C\u9009\u56FE"},{value:"camera",desc:"\u4F7F\u7528\u76F8\u673A"}]}],o=[{name:"tempFilePaths",type:"string[]",desc:"\u56FE\u7247\u7684\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84\u5217\u8868 (\u672C\u5730\u8DEF\u5F84)"},{name:"tempFiles",type:"TempFile[]",desc:"\u56FE\u7247\u7684\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u5217\u8868"}],c=[{name:"path",type:"string",desc:"\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u8DEF\u5F84 (\u672C\u5730\u8DEF\u5F84)"},{name:"size",type:"number",desc:"\u672C\u5730\u4E34\u65F6\u6587\u4EF6\u5927\u5C0F\uFF0C\u5355\u4F4D B"}];return(f,v)=>{const p=n("Icon"),r=n("Props"),l=n("Results");return i(),d("div",null,[h,e("blockquote",null,[a(p,{type:"success"}),u]),_,y,a(r,{data:t,options:""}),F,a(l,{data:o}),A,a(l,{data:c}),D])}}});export{x as __pageData,k as default};
