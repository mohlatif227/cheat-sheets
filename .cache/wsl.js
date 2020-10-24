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
      `There's a few config options as part of the WSL I always forget`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Links for getting Linux programs running in mixed mode:`
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
            href:
              'https://github.com/Microsoft/BashOnWindows/issues/2537',
          }
        ),
        `https://github.com/Microsoft/BashOnWindows/issues/2537`
      )
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
            href:
              'https://virtualizationreview.com/articles/2017/02/08/graphical-programs-on-windows-subsystem-on-linux.aspx',
          }
        ),
        `https://virtualizationreview.com/articles/2017/02/08/graphical-programs-on-windows-subsystem-on-linux.aspx`
      )
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
            href:
              'https://www.addictivetips.com/windows-tips/how-to-run-linux-apps-from-bash-on-windows-10-guide/',
          }
        ),
        `https://www.addictivetips.com/windows-tips/how-to-run-linux-apps-from-bash-on-windows-10-guide/`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'wsl-programs-that-work',
      },
      `WSL Programs that work`
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
            href: 'https://github.com/ethanhs/WSL-Programs',
          }
        ),
        `https://github.com/ethanhs/WSL-Programs`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'linuxbrew',
      },
      `Linuxbrew`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Linuxbrew is like Chocolatey for Windows or Homebrew for OSx`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">brew </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> package</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'what-version-of-ubuntu-is-installed',
      },
      `What version of Ubuntu is installed`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">lsb_release -a</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'lxrunexe',
      },
      `lxrun.exe`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Use `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `lxrun.exe`
      ),
      ` to interact with the WSL from the CMD prompt`
    ),
    (0, _preact.mdx)('p', null, `Burn it all 🔥:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">lxrun /uninstall /full</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
