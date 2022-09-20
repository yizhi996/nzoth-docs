import{_ as s,o as a,c as n,a as t}from"./app.f4d26b80.js";const h=JSON.parse('{"title":"FileSystemManager.readFileSync","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/file/FileSystemManager/readFileSync.md","lastUpdated":1663688878000}'),e={name:"api/file/FileSystemManager/readFileSync.md"},l=t(`<h1 id="filesystemmanager-readfilesync" tabindex="-1">FileSystemManager.readFileSync <a class="header-anchor" href="#filesystemmanager-readfilesync" aria-hidden="true">#</a></h1><p><a href="./readFile.html">FileSystemManager.readFile</a> \u7684\u540C\u6B65\u65B9\u6CD5</p><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p><strong>string dirPath</strong></p><p>\u8981\u8BFB\u53D6\u7684\u6587\u4EF6\u7684\u8DEF\u5F84 (\u672C\u5730\u8DEF\u5F84)</p><p><strong>string encoding</strong></p><p>\u6307\u5B9A\u8BFB\u53D6\u6587\u4EF6\u7684\u5B57\u7B26\u7F16\u7801\uFF0C\u5982\u679C\u4E0D\u4F20 encoding\uFF0C\u5219\u4EE5 ArrayBuffer \u683C\u5F0F\u8BFB\u53D6\u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u5185\u5BB9</p><p>encoding \u7684\u5408\u6CD5\u503C</p><table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ascii</td><td></td></tr><tr><td>base64</td><td></td></tr><tr><td>binary</td><td></td></tr><tr><td>hex</td><td></td></tr><tr><td>ucs2</td><td>\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6</td></tr><tr><td>ucs-2</td><td>\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6</td></tr><tr><td>utf16le</td><td>\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6</td></tr><tr><td>utf-16le</td><td>\u4EE5\u5C0F\u7AEF\u5E8F\u8BFB\u53D6</td></tr><tr><td>utf-8</td><td></td></tr><tr><td>utf8</td><td></td></tr><tr><td>latin1</td><td></td></tr></tbody></table><p><strong>number position</strong></p><p>\u4ECE\u6587\u4EF6\u6307\u5B9A\u4F4D\u7F6E\u5F00\u59CB\u8BFB\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u4ECE\u6587\u4EF6\u5934\u5F00\u59CB\u8BFB\u3002\u8BFB\u53D6\u7684\u8303\u56F4\u5E94\u8BE5\u662F\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4 [position, position+length)\u3002\u6709\u6548\u8303\u56F4\uFF1A[0, fileLength - 1]\u3002\u5355\u4F4D\uFF1Abyte</p><p><strong>number length</strong></p><p>\u6307\u5B9A\u6587\u4EF6\u7684\u957F\u5EA6\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u8BFB\u5230\u6587\u4EF6\u672B\u5C3E\u3002\u6709\u6548\u8303\u56F4\uFF1A[1, fileLength]\u3002\u5355\u4F4D\uFF1Abyte</p><h3 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><p><strong>string | ArrayBuffer data</strong></p><p>\u6587\u4EF6\u5185\u5BB9</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getFileSystemManager</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFileSync</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">ek</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">USER_DATA_PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/hello.txt</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">catch</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,18),p=[l];function o(r,c,d,i,y,F){return a(),n("div",null,p)}const A=s(e,[["render",o]]);export{h as __pageData,A as default};
