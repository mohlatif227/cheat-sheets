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
        id: 'conditionally-use-a-style',
      },
      `conditionally use a style`
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
            className: 'language-jsx',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-jsx p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;</span><span style="color: rgb(255, 203, 139);" class="token tag class-name">StyledButton</span><span style="color: rgb(127, 219, 202);" class="token tag"></span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token tag">  </span><span style="color: rgb(173, 219, 103); font-style: italic;" class="token tag attr-name">active</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript script-punctuation punctuation">=</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript punctuation">{</span><span style="color: rgb(255, 88, 116);" class="token tag script language-javascript boolean">true</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript punctuation">}</span><span style="color: rgb(127, 219, 202);" class="token tag"></span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token tag">  </span><span style="color: rgb(173, 219, 103); font-style: italic;" class="token tag attr-name">onClick</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript script-punctuation punctuation">=</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript punctuation">{</span><span style="color: rgb(127, 219, 202);" class="token tag script language-javascript keyword">this</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript punctuation">.</span><span style="color: rgb(127, 219, 202);" class="token tag script language-javascript property-access">handleButton</span><span style="color: rgb(199, 146, 234);" class="token tag script language-javascript punctuation">}</span><span style="color: rgb(127, 219, 202);" class="token tag"></span></div><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token tag"></span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&lt;/</span><span style="color: rgb(255, 203, 139);" class="token tag class-name">StyledButton</span><span style="color: rgb(199, 146, 234);" class="token tag punctuation">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `And in your styles something like this:`
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
            className: 'language-jsx',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-jsx p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">const</span><span class="token plain"> </span><span class="token maybe-class-name">StyledButton</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain"> styled</span><span style="color: rgb(199, 146, 234);" class="token punctuation">.</span><span class="token property-access">button</span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span><span class="token template-string embedded-code css"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">  align-items: center;</span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">  line-height: 0.2;</span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token template-string embedded-code css"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">  \${({ active }) =&gt;</span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">    active &amp;&amp;</span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">    \`</span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">    background: blue;</span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css">  \`}</span></div><div style="color: #d6deeb;" class="token-line"><span class="token template-string embedded-code css"></span><span style="color: rgb(173, 219, 103);" class="token template-string template-punctuation string">\`</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
