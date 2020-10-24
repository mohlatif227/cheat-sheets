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
    (0, _preact.mdx)('p', null, `npx, one off command`),
    (0, _preact.mdx)(
      'p',
      null,
      `No need to install create react app if you don't want to`
    ),
    (0, _preact.mdx)('p', null, `## create react app`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">npx create-react-app my-new-app</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Will use latest create react app to make your new app`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'update-all-project-dependencies',
      },
      `update all project dependencies`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Update dependencies with `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `npm-check`
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
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">npx npm-check -u</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'browsers-list',
      },
      `browsers list`
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
            className: 'language-bash',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">npx browserslist </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;last 2 versions, not dead, not &lt; 2%&quot;</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
