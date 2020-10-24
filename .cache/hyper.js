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
        id: 'use-git-bash',
      },
      `use Git bash`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Windows user? Want to use commands like `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `ls`
      ),
      ` and `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `pwd`
      ),
      ` in the hyper
terminal?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://github.com/zeit/hyper/issues/1252',
          }
        ),
        `https://github.com/zeit/hyper/issues/1252`
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
            className: 'language-javascript',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-javascript p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// the shell to run when spawning a new session (i.e. /usr/local/bin/fish)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// if left empty, your system's login shell will be used by default</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">shell</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'C:\\\\Program Files\\\\Git\\\\git-cmd.exe'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// by default ['--login'] will be used</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">shellArgs</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span style="color: rgb(173, 219, 103);" class="token string">'--command=usr/bin/bash.exe'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'-l'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'-i'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
