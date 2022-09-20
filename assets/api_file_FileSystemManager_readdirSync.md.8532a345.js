import{_ as s,o as a,c as n,a as e}from"./app.f4d26b80.js";const A=JSON.parse('{"title":"FileSystemManager.readdirSync","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/readdirSync.md","lastUpdated":1663688878000}'),l={name:"api/file/FileSystemManager/readdirSync.md"},p=e(`<h1 id="filesystemmanager-readdirsync" tabindex="-1">FileSystemManager.readdirSync <a class="header-anchor" href="#filesystemmanager-readdirsync" aria-hidden="true">#</a></h1><p><a href="./readdir.html">FileSystemManager.readdir</a> \u7684\u540C\u6B65\u65B9\u6CD5</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p><strong>string dirPath</strong></p><p>\u8981\u8BFB\u53D6\u7684\u76EE\u5F55\u8DEF\u5F84 (\u672C\u5730\u8DEF\u5F84)</p><h3 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><p><strong>string[] files</strong></p><p>\u6307\u5B9A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u540D\u6570\u7EC4</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readdirSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/example</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,10),o=[p];function r(t,c,i,y,d,F){return a(),n("div",null,o)}const h=s(l,[["render",r]]);export{A as __pageData,h as default};
