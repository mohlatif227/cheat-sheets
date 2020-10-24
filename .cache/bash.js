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
        id: 'change-default-shell',
      },
      `Change default shell`
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
        `chsh`
      ),
      ` utility to change your default shell:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># list out the shells available with -l</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">chsh -l</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># if that doesn't work try</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">cat</span><span class="token plain"> /etc/shells</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># /bin/bash</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># /bin/zsh</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># /bin/fish</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># set the default shell (with -s) to fish</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">chsh -s /bin/fish</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># set the default shell (with -s) to zsh</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">chsh -s /bin/zsh</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'kill-process-on-port',
      },
      `Kill process on port`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `List any process running on port 8000`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">lsof</span><span class="token plain"> -i:8000</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Output will look similar to this.`),
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
            className: 'language-text',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-text p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">COMMAND   PID  USER</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">chrome  16085  iamuser</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then kill it with `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `kill`
      ),
      `.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">kill</span><span class="token plain"> -9 </span><span style="color: rgb(247, 140, 108);" class="token number">16085</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'add-an-alias',
      },
      `Add an alias`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># open your bash_profile with nano</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">nano</span><span class="token plain"> ~/.bash_profile</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># add your alias</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> </span><span style="color: rgb(214, 222, 235);" class="token assign-left variable">f</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span style="color: rgb(173, 219, 103);" class="token string">'fish'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># ctrl+x then y to save</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'sort-alphabetically',
      },
      `Sort alphabetically`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You may find that commands like `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `ll`
      ),
      ` are under your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.bashrc`
      ),
      ` file,
if not then add the following as an alias:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ls</span><span class="token plain"> -lart </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">sort</span><span class="token plain"> -k9,9</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'see-file-permissions',
      },
      `See file permissions`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you need to set the permission on a file (with `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `chmod`
      ),
      `) but don't
know what the permissions of similar files are like you can use
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `stat`
      ),
      `, the following command displays the permissions of the contents
of the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.ssh/`
      ),
      ` folder:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">stat</span><span class="token plain"> -c </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;%a %n&quot;</span><span class="token plain"> ~/.ssh/*</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'open-the-ssh-agent-each-time-you-open-a-new-terminal',
      },
      `Open the SSH agent each time you open a new terminal.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Tired of having to enter your SSH password each time you want to do a
git operation?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Add the following to your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.bashrc`
      ),
      ` file.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># nano ~/.bashrc</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain"> -z </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span style="color: rgb(130, 170, 255);" class="token string environment constant">$SSH_AUTH_SOCK</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">&amp;&amp;</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">eval</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;\\</span><span style="color: rgb(214, 222, 235);" class="token string variable">$(</span><span style="color: rgb(214, 222, 235);" class="token string variable">ssh-agent -s</span><span style="color: rgb(214, 222, 235);" class="token string variable">)</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'search-bash-history',
      },
      `Search Bash history`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Want to search for an entry in your Bash history?`
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
        `Ctrl+r`
      ),
      ` then enter your search term.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'remove-command-from-bash-history',
      },
      `Remove command from bash history`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Accidentally added your password as a bash command?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To remove that from the bash history:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># list out history with</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">history</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then take the number from the output:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(247, 140, 108);" class="token number">471</span><span class="token plain">  ssh-agent</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(247, 140, 108);" class="token number">472</span><span class="token plain">  </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">exit</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(247, 140, 108);" class="token number">473</span><span class="token plain">  </span><span style="color: rgb(130, 170, 255);" class="token function">kill</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">53111</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(247, 140, 108);" class="token number">474</span><span class="token plain">  super secret password</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(247, 140, 108);" class="token number">475</span><span class="token plain">  </span><span style="color: rgb(130, 170, 255);" class="token function">history</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then delete the line you want removed:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">history</span><span class="token plain"> -d </span><span style="color: rgb(247, 140, 108);" class="token number">474</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Check your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `history`
      ),
      ` again and gone until you do it again.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'move-the-contents-of-a-folder-to-another-folder',
      },
      `Move the contents of a folder to another folder`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `This will move everything in the Downloads folder to the Videos folder
including any folders inside Downloads.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">mv</span><span class="token plain"> ~/Downloads/* ~/Videos</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
