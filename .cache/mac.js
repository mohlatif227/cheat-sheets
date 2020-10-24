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
        id: 'screen-snip',
      },
      `Screen snip`
    ),
    (0, _preact.mdx)('p', null, `Select an area to save to a file`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">cmd + </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">shift</span><span class="token plain"> + </span><span style="color: rgb(247, 140, 108);" class="token number">4</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Screen snip to clipboard`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">cmd + </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">shift</span><span class="token plain"> + ctrl + </span><span style="color: rgb(247, 140, 108);" class="token number">4</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'screenshot',
      },
      `Screenshot`
    ),
    (0, _preact.mdx)('p', null, `Window screenshot`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">cmd + </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">shift</span><span class="token plain"> + </span><span style="color: rgb(247, 140, 108);" class="token number">4</span><span class="token plain"> </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">#then spacebar</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Window screenshot to clipboard`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">cmd + </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">shift</span><span class="token plain"> + cmd + </span><span style="color: rgb(247, 140, 108);" class="token number">4</span><span class="token plain"> </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">#then spacebar</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'screenshot-record-screen-ui',
      },
      `Screenshot, record screen UI`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `There's another option for taking screenshots in Mojave.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">cmd + </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">shift</span><span class="token plain"> + </span><span style="color: rgb(247, 140, 108);" class="token number">5</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `This is where you can configure the type of snip you want to take.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Hold dow the option key when taking a screenshot to remove the shadow.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'keys',
      },
      `Keys`
    ),
    (0, _preact.mdx)('p', null, `The '#' character`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">alt + </span><span style="color: rgb(247, 140, 108);" class="token number">3</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'system',
      },
      `System`
    ),
    (0, _preact.mdx)('p', null, `Show hidden files`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">shift</span><span class="token plain"> + cmd + </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">.</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'enable-allow-apps-downloaded-from',
      },
      `Enable "Allow apps downloaded from:"`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You may notice that the option to "Allow apps downloaded from:
Anywhere" is disabled, to enable it use:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">sudo</span><span class="token plain"> spctl --master-disable</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
