'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = MDXContent

var _preact = require('@mdx-js/preact')

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

/* @jsx mdx */
const layoutProps = {}
const MDXLayout = 'wrapper'

function MDXContent({ components, ...props }) {
  return (0, _preact.mdx)(
    MDXLayout,
    _extends({}, layoutProps, props, {
      components: components,
      mdxType: 'MDXLayout',
    }),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'document-design-mode',
      },
      `Document Design Mode`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Edit a web page, set the design mode to on.`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(214, 222, 235);" class="token dom variable">document</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">designMode</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'on'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// make edits, then</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(214, 222, 235);" class="token dom variable">document</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">designMode</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'off'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'copy-an-array',
      },
      `Copy an array`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// initial array</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> cats </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Darcy</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Leo</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Boris</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// copy array</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> copyCats </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">cats</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Darcy&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Leo&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Boris&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'combine-two-arrays',
      },
      `Combine two arrays`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// array 1</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> cats </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Darcy</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Leo</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Boris</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// array 2</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> people </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Scott</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Islem</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Tom</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">George</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// all</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> catsAndPeople </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">cats</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">people</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Darcy&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Leo&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Boris&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Scott&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Islem&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Tom&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;George&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'remove-item-without-mutating',
      },
      `Remove item without mutating`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// array 1</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> cats </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Darcy</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Leo</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Boris</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// array 2</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> people </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Scott</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Islem</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Tom</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">George</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// all</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> catsAndPeople </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">cats</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">people</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// remove Tom</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> withoutTom </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">catsAndPeople</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">slice</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">5</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">catsAndPeople</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">slice</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(247, 140, 108);" class="token number">6</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Tom is left out of the new array party, sorry Tom`
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Darcy&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Leo&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Boris&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Scott&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Islem&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;George&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'reverse-an-array',
      },
      `Reverse an array`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `So, `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.reverse()`
      ),
      ` will mutate the original array so it's a good idea to
make a new array.`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> cats </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Darcy</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Leo</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Boris</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// reverse array</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> reverseCatNames </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">cats</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">reverse</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># cats</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Darcy&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Leo&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Boris&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># reverseCatNames</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Boris&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Leo&quot;</span><span class="token plain">, </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;Darcy&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'reverse-a-string',
      },
      `Reverse a string`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `There's a `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.reverse()`
      ),
      ` method for arrays, so if you split your sting
into an array then you'll be able to reverse it.`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token string">'racecar'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">split</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">reverse</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">racecar</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'new-array-from-existing',
      },
      `New array from existing`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Return one new entry for every existing entry: `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.map()`
      )
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> originalArray </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">3</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> newArray </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> originalArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">map</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">item</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> item </span><span style="color: rgb(127, 219, 202);" class="token operator">*</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">newArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {}
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-undefined p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">[ 2, 4, 6 ]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'return-new-array-filter',
      },
      `Return new array filter`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Return a new array with only some of the existing entries: `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.filter()`
      )
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> originalArray </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">9</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">4</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">42</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> newArray </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> originalArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">filter</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">item</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> item </span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">5</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">newArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {}
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-undefined p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">[ 9, 42 ]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'return-one-new-thing-only',
      },
      `Return one new thing only`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Return one new thing only: `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.reduce()`
      )
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> originalArray </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(173, 219, 103);" class="token string">'Alice'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(173, 219, 103);" class="token string">'Bob'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(173, 219, 103);" class="token string">'Charlie'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(173, 219, 103);" class="token string">'Bob'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(173, 219, 103);" class="token string">'Bob'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(173, 219, 103);" class="token string">'Charlie'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> numberOfBobs </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> originalArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">reduce</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">accumulator</span><span style="color: rgb(199, 146, 234);" class="token parameter punctuation">,</span><span class="token parameter"> item</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">if</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">item </span><span style="color: rgb(127, 219, 202);" class="token operator">===</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'Bob'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> accumulator </span><span style="color: rgb(127, 219, 202);" class="token operator">+</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">else</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> accumulator</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">numberOfBobs</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {}
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-undefined p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">3</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'sum-all-even-numbers-from-array',
      },
      `Sum all even numbers from array`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> arr </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">3</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">4</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">5</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword null nil">null</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">6</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">9</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">addEven</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">reduce</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">acc</span><span style="color: rgb(199, 146, 234);" class="token parameter punctuation">,</span><span class="token parameter"> cur</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">cur </span><span style="color: rgb(127, 219, 202);" class="token operator">%</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">===</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">?</span><span class="token plain"> acc </span><span style="color: rgb(127, 219, 202);" class="token operator">+</span><span class="token plain"> cur </span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> acc</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">addEven</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'return-the-first-duplicate-number',
      },
      `Return the first duplicate number`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">firstDuplicate</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// empty array to use to check incoming array against</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">let</span><span class="token plain"> checkArray </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// loop it</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">for</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(127, 219, 202);" class="token keyword">let</span><span class="token plain"> i </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"> i </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain"> arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">length</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"> i</span><span style="color: rgb(127, 219, 202);" class="token operator">++</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// check that array element against</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// checkArray</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">if</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">checkArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain">arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain">i</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">!==</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword nil">undefined</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// if there's no matching item then</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain">i</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// append to the checkArray</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">else</span><span class="token plain"> checkArray</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain">arr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain">i</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> i</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">-</span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'async-await-with-axios-and-graphql',
      },
      `Async await with axios and GraphQL`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> axios </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">require</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'axios'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">axios</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  url</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'https://spotify-graphql-server.herokuapp.com/graphql'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  method</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'post'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  data</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    query</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string"></span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">      {</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">        queryArtists(byName:&quot;Andy C&quot;) {</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">          name</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">          id</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">          image</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">          albums {</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">            name</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">            image</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">          }</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">        }</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">      }</span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token template-string string">      </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">then</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">result</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">result</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">data</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'remove-vowels-from-string',
      },
      `Remove vowels from string`
    ),
    (0, _preact.mdx)('p', null, `Use a regular expression:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token string">'replace vowels from string'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">replace</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token regex regex-delimiter">/</span><span style="color: rgb(199, 146, 234);" class="token regex language-regex charset charset-punctuation punctuation">[</span><span class="token regex language-regex charset">aeiou</span><span style="color: rgb(199, 146, 234);" class="token regex language-regex charset charset-punctuation punctuation">]</span><span class="token regex regex-delimiter">/</span><span class="token regex regex-flags">gi</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token string">&quot;rplc vwls frm strng&quot;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `With JavaScript functions:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token string">'replace vowels from string'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">split</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'a'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">split</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'e'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">split</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'i'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">split</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'o'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">split</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'u'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(173, 219, 103);" class="token string">&quot;rplc vwls frm strng&quot;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'closure-examples',
      },
      `Closure examples`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Closures are the ability for a child function (or inner function) to
access variables from a higher level scope even after the functions
have been called (closed or closed over).`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `The running of a function within a function:`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">greeting</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">salutation </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function-variable function">sarcasm</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(127, 219, 202);" class="token spread operator">...</span><span class="token plain">salutation</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">map</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">char</span><span style="color: rgb(199, 146, 234);" class="token parameter punctuation">,</span><span class="token parameter"> i</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> char</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">to</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span class="token template-string interpolation">i </span><span style="color: rgb(127, 219, 202);" class="token template-string interpolation operator">%</span><span class="token template-string interpolation"> </span><span style="color: rgb(247, 140, 108);" class="token template-string interpolation number">2</span><span class="token template-string interpolation"> </span><span style="color: rgb(127, 219, 202);" class="token template-string interpolation operator">?</span><span class="token template-string interpolation"> </span><span style="color: rgb(173, 219, 103);" class="token template-string interpolation string">'Upper'</span><span class="token template-string interpolation"> </span><span style="color: rgb(127, 219, 202);" class="token template-string interpolation operator">:</span><span class="token template-string interpolation"> </span><span style="color: rgb(173, 219, 103);" class="token template-string interpolation string">'Lower'</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Case</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">join</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">name</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span style="color: rgb(130, 170, 255);" class="token template-string interpolation function">sarcasm</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string string"> </span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span class="token template-string interpolation">name</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// run the function</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> sayHiya </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">greeting</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'Hiiiya'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> sayHello </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">greeting</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'Hellooo'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// now the function is closed but we can still</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// access the variables inside it</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">sayHiya</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'scott'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">sayHello</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'margret'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Private variables:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">createGame</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">gameType</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">let</span><span class="token plain"> score </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">increment</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    score</span><span style="color: rgb(127, 219, 202);" class="token operator">++</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">Your game of </span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span class="token template-string interpolation">gameType</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string string"> score is </span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span class="token template-string interpolation">score</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string string">.</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> cribbage </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">createGame</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'Cribbage'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> bridge </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">createGame</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'Bridge'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">cribbage</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">cribbage</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">cribbage</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">cribbage</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">bridge</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">bridge</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(130, 170, 255);" class="token function">cribbage</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Cribbage score is </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain">.</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Cribbage score is </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span class="token plain">.</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Cribbage score is </span><span style="color: rgb(247, 140, 108);" class="token number">3</span><span class="token plain">.</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Cribbage score is </span><span style="color: rgb(247, 140, 108);" class="token number">4</span><span class="token plain">.</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Bridge score is </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain">.</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Bridge score is </span><span style="color: rgb(247, 140, 108);" class="token number">2</span><span class="token plain">.</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Your game of Cribbage score is </span><span style="color: rgb(247, 140, 108);" class="token number">5</span><span class="token plain">.</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'mock-and-endpoint',
      },
      `Mock and endpoint`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Use a mock endpoint to test against for auth forms.`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function-variable function">wait</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span class="token parameter">n</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">new</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token class-name">Promise</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">setTimeout</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">resolve</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> n</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function-variable function">mockFetch</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span class="token parameter">url</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(130, 170, 255);" class="token function">wait</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(247, 140, 108);" class="token number">1000</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">then</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    status</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">200</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    body</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      url</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'http://bbc.co.uk'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">mockFetch</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span class="token template-string interpolation">endpoint</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">then</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">response</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'====================='</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">response</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">status</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">form</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">userEmail</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">value</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">form</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">userPassword</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">value</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'====================='</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  response</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">status</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">===</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">200</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token operator">?</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(214, 222, 235);" class="token dom variable">location</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> response</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">body</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">url</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">error</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(173, 219, 103);" class="token template-string string">incorrect</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'list-all-image-urls-from-a-web-page',
      },
      `List all image URLs from a web page`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Need to quickly grab a load of images from a page?`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">let</span><span class="token plain"> images </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(214, 222, 235);" class="token dom variable">document</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">querySelectorAll</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'img'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token known-class-name class-name">Array</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(127, 219, 202);" class="token keyword module">from</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">images</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">map</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">i</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token arrow operator">=&gt;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">i</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">src</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'div-cannot-appear-as-a-descendant-of-p',
      },
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'h2',
        },
        `<div>`
      ),
      ` cannot appear as a descendant of `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'h2',
        },
        `<p>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you're looking for where this is happening, in console you can use:`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(214, 222, 235);" class="token dom variable">document</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">querySelectorAll</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">' p * div '</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'truncate-a-string',
      },
      `Truncate a string`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Shorten a string! Define the start and the end of the string you want
to return:`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> myString </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'ABCDEFG'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> myTruncatedString </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> myString</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">substring</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">3</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// The value of myTruncatedString is &quot;ABC&quot;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'current-year-one-liner',
      },
      `Current year one liner`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> copyrightYear </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">new</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token class-name">Date</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">getFullYear</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'fizz-buzz',
      },
      `Fizz Buzz`
    ),
    (0, _preact.mdx)('p', null, `Classic FizzBuzz loop.`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">for</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(127, 219, 202);" class="token keyword">let</span><span class="token plain"> i </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"> i </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;=</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">100</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">++</span><span class="token plain">i</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">let</span><span class="token plain"> output </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">if</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">i </span><span style="color: rgb(127, 219, 202);" class="token operator">%</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">3</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">===</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    output </span><span style="color: rgb(127, 219, 202);" class="token operator">+=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'Fizz'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">if</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">i </span><span style="color: rgb(127, 219, 202);" class="token operator">%</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">5</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">===</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    output </span><span style="color: rgb(127, 219, 202);" class="token operator">+=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'Buzz'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">if</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">output </span><span style="color: rgb(127, 219, 202);" class="token operator">===</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">''</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    output </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> i</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">output</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'prototypal-instantiation',
      },
      `Prototypal Instantiation`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Instantiation patterns are ways to create something in JavaScript.`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-js',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-js p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">var</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function-variable function">person</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">name</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">var</span><span class="token plain"> obj </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token known-class-name class-name">Object</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">create</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">objMethods</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  obj</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">name</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> name</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(127, 219, 202);" class="token keyword">return</span><span class="token plain"> obj</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">var</span><span class="token plain"> objMethods </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(130, 170, 255);" class="token function-variable function">sayHello</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span style="color: rgb(127, 219, 202);" class="token template-string interpolation keyword">this</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation punctuation">.</span><span class="token template-string interpolation property-access">name</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string string"> says hello!</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(130, 170, 255);" class="token function-variable function">changeName</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token parameter">newName</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">var</span><span class="token plain"> oldName </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">this</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">name</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(127, 219, 202);" class="token keyword">this</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">name</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> newName</span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(255, 203, 139);" class="token console class-name">console</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">log</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span class="token template-string interpolation">oldName</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string string"> has changed their name to </span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">\${</span><span style="color: rgb(127, 219, 202);" class="token template-string interpolation keyword">this</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation punctuation">.</span><span class="token template-string interpolation property-access">name</span><span style="color: rgb(199, 146, 234);" class="token template-string interpolation interpolation-punctuation punctuation">}</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// Implementation</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">var</span><span class="token plain"> person1 </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">person</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'Austin'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">person1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">sayHello</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">person1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">changeName</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'Derek'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">person1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">sayHello</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Output:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">Austin says hello</span><span style="color: rgb(127, 219, 202);" class="token operator">!</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Austin has changed their name to Derek</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Derek says hello</span><span style="color: rgb(127, 219, 202);" class="token operator">!</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'change-page-font-size',
      },
      `Change Page Font Size`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Want to change the font size on a page? Here you can target the while
document, but could change `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `html`
      ),
      ` with `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `p`
      ),
      `, `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `span`
      ),
      ` whatever.`
    ),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {
            className: 'language-javascript',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-javascript p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(214, 222, 235);" class="token dom variable">document</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span style="color: rgb(130, 170, 255);" class="token method function property-access">getElementsByTagName</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(173, 219, 103);" class="token string">'html'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(247, 140, 108);" class="token number">0</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">style</span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">'font-size'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'10px'</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
