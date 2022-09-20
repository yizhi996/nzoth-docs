import{_ as s,o as a,c as n,a as e}from"./app.f4d26b80.js";const A=JSON.parse('{"title":"FileSystemManager.mkdirSync","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/mkdirSync.md","lastUpdated":1663688878000}'),l={name:"api/file/FileSystemManager/mkdirSync.md"},p=e(`<h1 id="filesystemmanager-mkdirsync" tabindex="-1">FileSystemManager.mkdirSync <a class="header-anchor" href="#filesystemmanager-mkdirsync" aria-hidden="true">#</a></h1><p><a href="./mkdir.html">FileSystemManager.mkdir</a> \u7684\u540C\u6B65\u65B9\u6CD5</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p><strong>string dirPath</strong></p><p>\u521B\u5EFA\u7684\u76EE\u5F55\u8DEF\u5F84 (\u672C\u5730\u8DEF\u5F84)</p><p><strong>boolean recursive</strong></p><p>\u662F\u5426\u5728\u9012\u5F52\u521B\u5EFA\u8BE5\u76EE\u5F55\u7684\u4E0A\u7EA7\u76EE\u5F55\u540E\u518D\u521B\u5EFA\u8BE5\u76EE\u5F55\u3002\u5982\u679C\u5BF9\u5E94\u7684\u4E0A\u7EA7\u76EE\u5F55\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u4E0D\u521B\u5EFA\u8BE5\u4E0A\u7EA7\u76EE\u5F55\u3002\u5982 dirPath \u4E3A a/b/c/d \u4E14 recursive \u4E3A true\uFF0C\u5C06\u521B\u5EFA a \u76EE\u5F55\uFF0C\u518D\u5728 a \u76EE\u5F55\u4E0B\u521B\u5EFA b \u76EE\u5F55\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u76F4\u81F3\u521B\u5EFA a/b/c \u76EE\u5F55\u4E0B\u7684 d \u76EE\u5F55</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mkdirSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/example</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),o=[p];function r(t,c,i,y,F,d){return a(),n("div",null,o)}const m=s(l,[["render",r]]);export{A as __pageData,m as default};
