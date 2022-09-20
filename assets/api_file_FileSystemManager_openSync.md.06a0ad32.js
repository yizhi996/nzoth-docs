import{r as n,o as l,c as p,b as o,a as s}from"./app.f4d26b80.js";const t=s('<h1 id="filesystemmanager-opensync" tabindex="-1">FileSystemManager.openSync <a class="header-anchor" href="#filesystemmanager-opensync" aria-hidden="true">#</a></h1><p><a href="./open.html">FileSystemManager.open</a> \u7684\u540C\u6B65\u65B9\u6CD5</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3>',3),c=s(`<h3 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><p><strong>string fd</strong></p><p>\u6587\u4EF6\u63CF\u8FF0\u7B26</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello.txt</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> flag</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fd</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),d=JSON.parse('{"title":"FileSystemManager.openSync","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/openSync.md","lastUpdated":1663688878000}'),r={name:"api/file/FileSystemManager/openSync.md"},A=Object.assign(r,{setup(y){const a=[{name:"filePath",type:"string",default:"",required:!0,desc:"\u6587\u4EF6\u8DEF\u5F84 (\u672C\u5730\u8DEF\u5F84)"},{name:"flag",type:"string",default:"r",required:!1,desc:"\u6587\u4EF6\u7CFB\u7EDF\u6807\u5FD7\uFF0C\u9ED8\u8BA4\u503C: 'r'",values:[{value:"a",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8FFD\u52A0\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u6587\u4EF6"},{value:"ax",desc:"\u7C7B\u4F3C\u4E8E 'a'\uFF0C\u4F46\u5982\u679C\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u5931\u8D25"},{value:"a+",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8BFB\u53D6\u548C\u8FFD\u52A0\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u6587\u4EF6"},{value:"ax+",desc:"\u7C7B\u4F3C\u4E8E 'a+'\uFF0C\u4F46\u5982\u679C\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u5931\u8D25"},{value:"as",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8FFD\u52A0\uFF08\u5728\u540C\u6B65\u6A21\u5F0F\u4E2D\uFF09\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u6587\u4EF6"},{value:"as+",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8BFB\u53D6\u548C\u8FFD\u52A0\uFF08\u5728\u540C\u6B65\u6A21\u5F0F\u4E2D\uFF09\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\u8BE5\u6587\u4EF6"},{value:"r",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8BFB\u53D6\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u53D1\u751F\u5F02\u5E38"},{value:"r+",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8BFB\u53D6\u548C\u5199\u5165\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u53D1\u751F\u5F02\u5E38"},{value:"w",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u5199\u5165\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u5B58\u5728\u5219\u622A\u65AD\u6587\u4EF6"},{value:"wx",desc:"\u7C7B\u4F3C\u4E8E 'w'\uFF0C\u4F46\u5982\u679C\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u5931\u8D25"},{value:"w+",desc:"\u6253\u5F00\u6587\u4EF6\u7528\u4E8E\u8BFB\u53D6\u548C\u5199\u5165\u3002 \u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u5B58\u5728\u5219\u622A\u65AD\u6587\u4EF6"},{value:"wx+",desc:"\u7C7B\u4F3C\u4E8E 'w+'\uFF0C\u4F46\u5982\u679C\u8DEF\u5F84\u5B58\u5728\uFF0C\u5219\u5931\u8D25"}]}];return(F,D)=>{const e=n("Props");return l(),p("div",null,[t,o(e,{data:a}),c])}}});export{d as __pageData,A as default};