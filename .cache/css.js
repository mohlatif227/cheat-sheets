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
        id: 'vertically-center-with-margin',
      },
      `Vertically center with margin`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can use `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `margin: auto`
      ),
      ` on both `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `display: flex`
      ),
      ` and
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `display: grid`
      ),
      `.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `It will work on the child of `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `grid`
      ),
      ` or `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `flexbox`
      ),
      ` but not on a block
level element.`
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
            className: 'language-html',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-html p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(127, 219, 202);" class="token tag"> </span><span style="color: rgb(173, 219, 103); font-style: italic;" class="token tag attr-name">class</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation attr-equals">=</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(127, 219, 202);" class="token tag attr-value">margins</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain">Pls center me!</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span></div></pre></div>`
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
            className: 'language-css',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-css p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.margins</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">/* display: flex; */</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">display</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> grid</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.margins</span><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector"> p</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">margin</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> auto</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'vertically-center-with-absolute-positioning',
      },
      `Vertically center with absolute positioning`
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
            className: 'language-html',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-html p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(127, 219, 202);" class="token tag"> </span><span style="color: rgb(173, 219, 103); font-style: italic;" class="token tag attr-name">class</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation attr-equals">=</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(127, 219, 202);" class="token tag attr-value">absolute</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain">Pls center me!</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span></div></pre></div>`
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
            className: 'language-css',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-css p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.absolute</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">position</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> relative</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.absolute</span><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector"> p</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">position</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> absolute</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">top</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">50</span><span class="token unit">%</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">transform</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">translateY</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span style="color: rgb(247, 140, 108);" class="token number">-50</span><span class="token unit">%</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">width</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">100</span><span class="token unit">%</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'vertically-center-with-flexbox',
      },
      `Vertically center with flexbox`
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
            className: 'language-html',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-html p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(127, 219, 202);" class="token tag"> </span><span style="color: rgb(173, 219, 103); font-style: italic;" class="token tag attr-name">class</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation attr-equals">=</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(127, 219, 202);" class="token tag attr-value">flexbox</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain">Pls center me!</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span></div></pre></div>`
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
            className: 'language-css',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-css p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.flexbox</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">display</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> flex</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">align-items</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> center</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">justify-content</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> center</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'vertically-center-with-grid',
      },
      `Vertically center with grid`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Use either `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `align-items: center;`
      ),
      ` or `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `place-items: center;`
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
            className: 'language-html',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-html p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(127, 219, 202);" class="token tag"> </span><span style="color: rgb(173, 219, 103); font-style: italic;" class="token tag attr-name">class</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation attr-equals">=</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(127, 219, 202);" class="token tag attr-value">grid</span><span style="color: rgb(199, 146, 234);" class="token tag attr-value punctuation">&quot;</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain">Pls center me!</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">p</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(127, 219, 202);" class="token tag">div</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span></div></pre></div>`
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
            className: 'language-css',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-css p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.grid</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">display</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> grid</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">/* align-items: center; */</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">place-items</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> center</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'breaking-long-words-and-urls',
      },
      `Breaking Long Words and URLs`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `There are times when a really long string of text can overflow the
container of a layout, use this:`
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
            className: 'language-css',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-css p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234); font-style: italic;" class="token selector class">.don_break_out_of_parent</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">/* These are technically the same, but use both */</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">overflow-wrap</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> break-word</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">word-wrap</span><span style="color: rgb(199, 146, 234);" class="token punctuation">:</span><span class="token plain"> break-word</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
