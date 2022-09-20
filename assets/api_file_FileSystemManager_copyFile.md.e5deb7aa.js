import{r as l,o,c as p,b as t,d as s,e as a,a as r}from"./app.f4d26b80.js";const c=s("h1",{id:"filesystemmanager-copyfile",tabindex:"-1"},[a("FileSystemManager.copyFile "),s("a",{class:"header-anchor",href:"#filesystemmanager-copyfile","aria-hidden":"true"},"#")],-1),i=s("blockquote",null,[s("p",null,"\u4EE5 Promise \u98CE\u683C\u8C03\u7528\uFF1A\u4E0D\u652F\u6301")],-1),y=s("p",null,"\u590D\u5236\u6587\u4EF6\u3002",-1),D=s("h3",{id:"\u53C2\u6570",tabindex:"-1"},[a("\u53C2\u6570 "),s("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),F=r('<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copyFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">srcPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello.txt</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">destPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello_copy.txt</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"></span></code></pre></div>',2),m=JSON.parse('{"title":"FileSystemManager.copyFile","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/copyFile.md","lastUpdated":1663688878000}'),d={name:"api/file/FileSystemManager/copyFile.md"},u=Object.assign(d,{setup(A){const e=[{name:"srcPath",type:"string",default:"",required:!0,desc:"\u6E90\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u672C\u5730\u8DEF\u5F84"},{name:"destPath",type:"string",default:"",required:!0,desc:"\u76EE\u6807\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u672C\u5730\u8DEF\u5F84"}];return(_,C)=>{const n=l("Props");return o(),p("div",null,[c,i,y,D,t(n,{data:e,options:""}),F])}}});export{m as __pageData,u as default};