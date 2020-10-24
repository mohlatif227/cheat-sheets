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
        id: 'use-nvm-with-zsh',
      },
      `Use nvm with zsh`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you are using Oh My ZSH! then you can install the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `zsh-nvm`
      ),
      ` plugin.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Clone the plugin into your zsh plugins folder:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then load as a plugin in your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.zshrc`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(214, 222, 235);" class="token assign-left variable">plugins</span><span style="color: rgb(127, 219, 202);" class="token operator">+=</span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">zsh-nvm</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Take a look a the `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://github.com/lukechilds/zsh-nvm/issues/14',
          }
        ),
        `Permission denied when trying to install the
plugin`
      ),
      ` issue on GitHub for permission errors.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'include-aliases',
      },
      `include aliases`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'oh-my-zsh',
      },
      `oh my zsh`
    )
  )
}

MDXContent.isMDXComponent = true
