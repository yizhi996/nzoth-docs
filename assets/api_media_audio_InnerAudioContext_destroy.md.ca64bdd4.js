import{_ as s,o as a,c as n,a as e}from"./app.f4d26b80.js";const D=JSON.parse('{"title":"InnerAudioContext.destroy","description":"","frontmatter":{},"headers":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"api/media/audio/InnerAudioContext/destroy.md","lastUpdated":1663688878000}'),o={name:"api/media/audio/InnerAudioContext/destroy.md"},t=e(`<h1 id="inneraudiocontext-destroy" tabindex="-1"><a href="./../InnerAudioContext.html">InnerAudioContext</a>.destroy <a class="header-anchor" href="#inneraudiocontext-destroy" aria-hidden="true">#</a></h1><p>\u9500\u6BC1\u5F53\u524D\u5B9E\u4F8B\u3002</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ctx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ek</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInnerAudioContext</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/test.mp3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,4),l=[t];function p(r,c,i,d,A,y){return a(),n("div",null,l)}const F=s(o,[["render",p]]);export{D as __pageData,F as default};
