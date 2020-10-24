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
        id: 'search-homebrew',
      },
      `Search homebrew`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Search homebrew for apps, cli's, tools`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew search keychain</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'install',
      },
      `Install`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> keychain</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If the item you're looking for is part of a cask:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew cask </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> visual-studio-code-insiders</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'install-multiple-items-in-one-command',
      },
      `Install multiple items in one command`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew cask </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> firefox firefox-developer-edition</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'check-for-and-install-updates',
      },
      `Check for and install updates`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Check for updates on installed apps and upgrade anything that is
outdated.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew update --verbose </span><span style="color: rgb(127, 219, 202);" class="token operator">&amp;&amp;</span><span class="token plain"> brew upgrade </span><span style="color: rgb(214, 222, 235);" class="token variable">\`</span><span style="color: rgb(214, 222, 235);" class="token variable">brew outdated</span><span style="color: rgb(214, 222, 235);" class="token variable">\`</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'cask-upgrade',
      },
      `Cask upgrade`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Brew and casks are treated differently so the upgrade is a different
syntax too.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># check outdated</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew cask outdated</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># update outdated</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew cask upgrade</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Alternatively `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://github.com/buo/homebrew-cask-upgrade',
          }
        ),
        `there's a package`
      ),
      ` you can install.`
    ),
    (0, _preact.mdx)('p', null, `Install:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew tap buo/cask-upgrade</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Usage:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew cu</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
