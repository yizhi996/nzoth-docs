import{r as l,o as p,c as o,b as t,d as s,e as a,a as c}from"./app.f4d26b80.js";const r=s("h1",{id:"filesystemmanager-appendfile",tabindex:"-1"},[a("FileSystemManager.appendFile "),s("a",{class:"header-anchor",href:"#filesystemmanager-appendfile","aria-hidden":"true"},"#")],-1),y=s("blockquote",null,[s("p",null,"\u4EE5 Promise \u98CE\u683C\u8C03\u7528\uFF1A\u4E0D\u652F\u6301")],-1),D=s("p",null,"\u5728\u6587\u4EF6\u7ED3\u5C3E\u8FFD\u52A0\u5185\u5BB9\u3002",-1),F=s("h3",{id:"\u53C2\u6570",tabindex:"-1"},[a("\u53C2\u6570 "),s("a",{class:"header-anchor",href:"#\u53C2\u6570","aria-hidden":"true"},"#")],-1),i=c(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello.txt</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">some text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,2),f=JSON.parse('{"title":"FileSystemManager.appendFile","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/appendFile.md","lastUpdated":1663688878000}'),A={name:"api/file/FileSystemManager/appendFile.md"},h=Object.assign(A,{setup(d){const e=[{name:"filePath",type:"string",default:"",required:!0,desc:"\u8981\u8FFD\u52A0\u5185\u5BB9\u7684\u6587\u4EF6\u8DEF\u5F84 (\u672C\u5730\u8DEF\u5F84)"},{name:"data",type:"string | ArrayBuffer",default:"",required:!0,desc:"\u8981\u8FFD\u52A0\u7684\u6587\u672C\u6216\u4E8C\u8FDB\u5236\u6570\u636E"},{name:"encoding",type:"string",default:"utf8",required:!1,desc:"\u6307\u5B9A\u5199\u5165\u6587\u4EF6\u7684\u5B57\u7B26\u7F16\u7801",values:[{value:"ascii",desc:""},{value:"base64",desc:""},{value:"binary",desc:""},{value:"hex",desc:""},{value:"ucs2",desc:"\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6"},{value:"ucs-2",desc:"\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6"},{value:"utf16le",desc:"\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6"},{value:"utf-16le",desc:"\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6"},{value:"utf-8",desc:""},{value:"utf8",desc:""},{value:"latin1",desc:""}]}];return(C,u)=>{const n=l("Props");return p(),o("div",null,[r,y,D,F,t(n,{data:e,options:""}),i])}}});export{f as __pageData,h as default};
