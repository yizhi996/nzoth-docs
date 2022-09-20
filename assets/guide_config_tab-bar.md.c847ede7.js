import{_ as s,o as a,c as l,a as n}from"./app.f4d26b80.js";const h=JSON.parse('{"title":"tabBar","description":"","frontmatter":{},"headers":[{"level":2,"title":"color","slug":"color","link":"#color","children":[]},{"level":2,"title":"selectedColor","slug":"selectedcolor","link":"#selectedcolor","children":[]},{"level":2,"title":"backgroundColor","slug":"backgroundcolor","link":"#backgroundcolor","children":[]},{"level":2,"title":"borderStyle","slug":"borderstyle","link":"#borderstyle","children":[]},{"level":2,"title":"list","slug":"list","link":"#list","children":[]},{"level":2,"title":"Tab.path","slug":"tab-path","link":"#tab-path","children":[]},{"level":2,"title":"Tab.text","slug":"tab-text","link":"#tab-text","children":[]},{"level":2,"title":"Tab.iconPath","slug":"tab-iconpath","link":"#tab-iconpath","children":[]},{"level":2,"title":"Tab.selectedIconPath","slug":"tab-selectediconpath","link":"#tab-selectediconpath","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"guide/config/tab-bar.md","lastUpdated":1663688878000}'),o={name:"guide/config/tab-bar.md"},e=n(`<h1 id="tabbar" tabindex="-1">tabBar <a class="header-anchor" href="#tabbar" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u8BBE\u7F6E\u5C0F\u7A0B\u5E8F\u7684\u5E95\u90E8 Tab \u680F\u3002</p><h2 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>HexColor</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <code>#353535</code></li></ul><p>Tab \u7684\u6587\u5B57\u9ED8\u8BA4\u7684\u989C\u8272\u3002</p><h2 id="selectedcolor" tabindex="-1">selectedColor <a class="header-anchor" href="#selectedcolor" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>HexColor</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <code>#1989fa</code></li></ul><p>Tab \u7684\u6587\u5B57\u88AB\u9009\u4E2D\u65F6\u7684\u989C\u8272\u3002</p><h2 id="backgroundcolor" tabindex="-1">backgroundColor <a class="header-anchor" href="#backgroundcolor" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>HexColor</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <code>#ffffff</code></li></ul><p>Tab \u7684\u80CC\u666F\u8272\u3002</p><h2 id="borderstyle" tabindex="-1">borderStyle <a class="header-anchor" href="#borderstyle" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>&#39;white&#39; | &#39;black&#39;</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <code>black</code></li></ul><p>Tab \u4E0A\u8FB9\u6846\u7684\u989C\u8272\u3002</p><h2 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>Tab[]</code></li></ul><p>Tab \u7684\u5217\u8868\u3002</p><h2 id="tab-path" tabindex="-1">Tab.path <a class="header-anchor" href="#tab-path" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>string</code></li></ul><p>\u9875\u9762\u8DEF\u5F84\uFF0C\u5FC5\u987B\u5728 pages \u4E2D\u5148\u5B9A\u4E49\u3002</p><h2 id="tab-text" tabindex="-1">Tab.text <a class="header-anchor" href="#tab-text" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>string</code></li></ul><p>Tab \u4E0A\u6309\u94AE\u6587\u5B57\u3002</p><h2 id="tab-iconpath" tabindex="-1">Tab.iconPath <a class="header-anchor" href="#tab-iconpath" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>string</code></li></ul><p>\u56FE\u7247\u8DEF\u5F84\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\u4E3A 81px * 81px\uFF0C\u4E0D\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u3002</p><h2 id="tab-selectediconpath" tabindex="-1">Tab.selectedIconPath <a class="header-anchor" href="#tab-selectediconpath" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>string</code></li></ul><p>\u9009\u4E2D\u65F6\u7684\u56FE\u7247\u8DEF\u5F84\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\u4E3A 81px * 81px\uFF0C\u4E0D\u652F\u6301\u7F51\u7EDC\u56FE\u7247\u3002</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">tabBar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">backgroundColor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#1989fa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages/Index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">iconPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/tab-bar/index.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">selectedIconPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/tab-bar/index_selected.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pages/Me</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Me</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">iconPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/tab-bar/me.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">selectedIconPath</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/tab-bar/me_selected.png</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,31),t=[e];function p(r,c,D,i,F,d){return a(),l("div",null,t)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};