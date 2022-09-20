import{_ as s,o as a,c as n,a as e}from"./app.f4d26b80.js";const d=JSON.parse('{"title":"FileSystemManager.renameSync","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/renameSync.md","lastUpdated":1663688878000}'),l={name:"api/file/FileSystemManager/renameSync.md"},p=e(`<h1 id="filesystemmanager-renamesync" tabindex="-1">FileSystemManager.renameSync <a class="header-anchor" href="#filesystemmanager-renamesync" aria-hidden="true">#</a></h1><p><a href="./rename.html">FileSystemManager.rename</a> \u7684\u540C\u6B65\u65B9\u6CD5</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p><strong>string oldPath</strong></p><p>\u6E90\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u672C\u5730\u8DEF\u5F84</p><p><strong>string newPath</strong></p><p>\u65B0\u6587\u4EF6\u8DEF\u5F84\uFF0C\u652F\u6301\u672C\u5730\u8DEF\u5F84</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">renameSync</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello.txt</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello_new.txt</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),o=[p];function t(r,c,y,D,F,i){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{d as __pageData,m as default};