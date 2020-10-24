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
      'p',
      null,
      `A list of terminal commands and flags to help me use `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `npm`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'install-packagejson-dependencies',
      },
      `install package.json dependencies`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">install</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      (0, _preact.mdx)(
        'strong',
        {
          parentName: 'p',
        },
        `Shorthand`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># install</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> i </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">package</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># uninstall</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> un </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">package</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># update</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> up </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">package</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'list-globally-installed-packages',
      },
      `List globally installed packages.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> list -g --depth</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span style="color: rgb(247, 140, 108);" class="token number">0</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'list-available-scripts-to-run',
      },
      `list available scripts to run`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> run</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'update-npm',
      },
      `update npm`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> -g npm@latest</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># using windows? Then use</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">npm-windows-upgrade</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'flags',
      },
      `flags`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `-S`
      ),
      ` is the same as `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `--save`
      ),
      ` not needed in npm 5+ `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `-D`
      ),
      ` is the same as
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `--save-dev`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'installed-version',
      },
      `installed version`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> list </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># for local packages</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'uninstall-global-package',
      },
      `Uninstall global package`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> -g uninstall </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">name</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"> --save</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'upgrade-npm-on-windows',
      },
      `Upgrade NPM on Windows`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `After trying several times to upgrade npm on Windows I found this
whilst poking around.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">npm-windows-upgrade</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'updating-global-packages',
      },
      `Updating global packages`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To update global packages individually you can use:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> update -g </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">package</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To see which packages need updating use:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> outdated -g --depth</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span style="color: rgb(247, 140, 108);" class="token number">0</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'dont-rm--rf-node_modules-npm-install',
      },
      `dont `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'h2',
        },
        `rm -rf node_modules; npm install`
      )
    ),
    (0, _preact.mdx)('p', null, `Instead use:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> ci</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `It will have the same effect but be 2-3x faster 👌`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'bump-version-number',
      },
      `Bump version number`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">npm</span><span class="token plain"> version patch</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># also | major | minor | patch</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
