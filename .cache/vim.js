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
        id: 'exit-vim',
      },
      `Exit Vim`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Hit the Esc key to enter "Normal mode". Then you can type `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `:`
      ),
      ` to enter
"Command-line mode". A colon `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `:`
      ),
      ` will appear at the bottom of the
screen.`
    ),
    (0, _preact.mdx)('p', null, `To quit:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">:q</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># enter</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `To quit without saving:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">:q</span><span style="color: rgb(127, 219, 202);" class="token operator">!</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># enter</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
