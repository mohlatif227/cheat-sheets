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
        id: 'nvm-not-recognised-in-fish',
      },
      `NVM not recognised in Fish?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Install the `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: '#Oh-My-Fish',
          }
        ),
        `Oh My Fish`
      ),
      ` package `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `nvm`
      ),
      ` with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">omf </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> nvm</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'aliases',
      },
      `Aliases`
    ),
    (0, _preact.mdx)('p', null, `Quick list for aliasing:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions aliasname</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Displays function contents</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions -n</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Displays a list of currently-defined functions</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions -c newalias aliasname</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Copies the 'aliasname' function to a new function called 'newalias'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions -e aliasname</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Erases the function \`aliasname\`</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To list what aliases you have already defined:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ls</span><span class="token plain"> -la ~/.config/fish/functions/</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To see what is contained in the functions, use:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">type</span><span class="token plain"> functionName</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># or use functions</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions functionName</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `To create an alias:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Sort alphabetically</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> lss </span><span style="color: rgb(173, 219, 103);" class="token string">'ls -lart | sort -k9,9'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `To save said alias:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">funcsave lss</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `View the contents of the function:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions lss</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># output</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Defined in /home/scott/.config/fish/functions/lss.fish @ line 2</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> lss --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias lss ls -lart | sort -k9,9'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">        </span><span style="color: rgb(130, 170, 255);" class="token function">ls</span><span class="token plain"> -lart </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">sort</span><span class="token plain"> -k9,9 </span><span style="color: rgb(214, 222, 235);" class="token variable">$argv</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">end</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `To remove an alias:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">rm</span><span class="token plain"> ~/.config/fish/functions/aliasname.fish</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `or use:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">functions -e aliasname</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'oh-my-fish',
      },
      `Oh My Fish`
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
            href: 'https://github.com/oh-my-fish/oh-my-fish',
          }
        ),
        `https://github.com/oh-my-fish/oh-my-fish`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'use-nvm-with-fish',
      },
      `Use nvm with fish`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you have Oh My Fish installed then install the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `bass`
      ),
      ` plugin:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">omf </span><span style="color: rgb(130, 170, 255);" class="token function">install</span><span class="token plain"> bass</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then add the following to your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `config.fish`
      ),
      ` file:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nvm</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">   bass </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">source</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">brew --prefix nvm</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain">/nvm.sh --no-use </span><span style="color: rgb(173, 219, 103);" class="token string">';'</span><span class="token plain"> nvm </span><span style="color: rgb(214, 222, 235);" class="token variable">$argv</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">end</span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">set</span><span class="token plain"> -x NVM_DIR ~/.nvm</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">nvm use default --silent</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `source`
      ),
      ` the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `config.fish`
      ),
      ` file:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">source</span><span class="token plain"> ~/.config/fish/config.fish</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'list-out-added-aliases',
      },
      `List out added aliases`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `I found this `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://stackoverflow.com/a/50803805/1138354',
          }
        ),
        `handy function`
      ),
      ` on Stack Overflow which will list out
your functions:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> aliases --description </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;list all fish aliases&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(127, 219, 202);" class="token keyword">for</span><span class="token plain"> </span><span style="color: rgb(214, 222, 235);" class="token for-or-select variable">f</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token keyword">in</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">functions</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">functions </span><span style="color: rgb(214, 222, 235);" class="token variable">$f</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">grep</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">\\</span><span class="token plain">'alias</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">end</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">end</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then you save it `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `funcsave aliases`
      ),
      ` and use it:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">aliases</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> c --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias c code .'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> g --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias g git'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> lss --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias lss ls -lart | sort -k9,9'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> ni --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias ni npm i'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nid --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nid npm i -D'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nig --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nig npm i -g'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> no --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias no npm outdated'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nog --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nog npm outdated -g --depth=0'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nr --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nr npm run'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nrb --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nrb npm run build'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nrd --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nrd npm run dev'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nrf --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nrf npm run format'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nrs --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nrs npm run start'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nug --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nug npm -g un'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> nun --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias nu npm un'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> r --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias r cd /mnt/d/repos/'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> yd --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias yd yarn dev'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> yg --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias yg yarn go'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(127, 219, 202);" class="token keyword">function</span><span class="token plain"> ys --description </span><span style="color: rgb(173, 219, 103);" class="token string">'alias ys yarn start'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `The following you can copy paste into fish:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> c </span><span style="color: rgb(173, 219, 103);" class="token string">'code .'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave c</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> g </span><span style="color: rgb(173, 219, 103);" class="token string">'git'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave g</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> lss </span><span style="color: rgb(173, 219, 103);" class="token string">'ls -lart | sort -k9,9'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave lss</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> ni </span><span style="color: rgb(173, 219, 103);" class="token string">'npm i'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave ni</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nid </span><span style="color: rgb(173, 219, 103);" class="token string">'npm i -D'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nid</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nig </span><span style="color: rgb(173, 219, 103);" class="token string">'npm i -g'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nig</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> no </span><span style="color: rgb(173, 219, 103);" class="token string">'npm outdated'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave no</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nog </span><span style="color: rgb(173, 219, 103);" class="token string">'npm outdated -g --depth=0'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nog</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nr </span><span style="color: rgb(173, 219, 103);" class="token string">'npm run'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nr</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nrb </span><span style="color: rgb(173, 219, 103);" class="token string">'npm run build'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nrb</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nrd </span><span style="color: rgb(173, 219, 103);" class="token string">'npm run dev'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nrd</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nrf </span><span style="color: rgb(173, 219, 103);" class="token string">'npm run format'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nrf</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nrs </span><span style="color: rgb(173, 219, 103);" class="token string">'npm run start'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nrs</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nug </span><span style="color: rgb(173, 219, 103);" class="token string">'npm -g un'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nug</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> nu </span><span style="color: rgb(173, 219, 103);" class="token string">'npm un'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave nu</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> r </span><span style="color: rgb(173, 219, 103);" class="token string">'cd /mnt/d/repos/'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave r</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> yd </span><span style="color: rgb(173, 219, 103);" class="token string">'yarn dev'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave yd</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> yg </span><span style="color: rgb(173, 219, 103);" class="token string">'yarn go'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave yg</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> ys </span><span style="color: rgb(173, 219, 103);" class="token string">'yarn start'</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span><span class="token plain">funcsave ys</span><span style="color: rgb(199, 146, 234);" class="token punctuation">;</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
