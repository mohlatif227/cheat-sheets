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
      `This is just stuff that I have put down that I find I use a lot of the
time for my own reference.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'update-dependencies',
      },
      `Update dependencies`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Update all project dependencies to lates versions.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> upgrade --latest</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'globally-add-a-package',
      },
      `Globally add a package`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> global </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> netlify-cli</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'upgrade-global-packages',
      },
      `Upgrade global packages`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> global upgrade</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'displays-the-location-of-the-yarn-bin-folder',
      },
      `displays the location of the yarn bin folder.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> bin</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'list-installed-packages',
      },
      `list installed packages.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">ls</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'create-react-app',
      },
      `create-react-app`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Couple of good one here from
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://twitter.com/beedesignllc',
          }
        ),
        `@beedesignllc`
      ),
      ` 👌`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> create react-app my-app-name</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `☝️ downloads and runs latest `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `create-react-app`
      ),
      ` works for other
similarly named pkgs`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'flow',
      },
      `flow`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> flow</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `☝️ will run `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `node_modules/.bin/flow`
      ),
      ` without you having to add it as a
package.json script.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'npm-ci',
      },
      `npm ci`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `The equivalent to `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `npm ci`
      ),
      ` for yarn:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">yarn</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> --frozen-lockfile</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
