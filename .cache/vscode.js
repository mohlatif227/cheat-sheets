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
        id: 'want-to-list-out-what-extensions-you-have-installed',
      },
      `Want to list out what extensions you have installed?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Say that you are moving from VS Code to VS Code Insiders and you want
to install the same extensions:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">code --list-extensions </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">xargs</span><span class="token plain"> -L </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">echo</span><span class="token plain"> code-insiders --install-extension</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Moving from VS Code Insiders to VS Code? Then swap round the commands:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">code-insiders --list-extensions </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">xargs</span><span class="token plain"> -L </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">echo</span><span class="token plain"> code --install-extension</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'want-to-have-your-own-keyboard-shortcut',
      },
      `Want to have your own keyboard shortcut?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `In some cases moving from one platform to another (Windows to Linux
say) they keyboard shortcuts are different or just plain not there.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can create your own keyboard shortcuts but it's buried in the GUI
settings for some reason.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `In VSCode goto `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `File -> Preferences -> Keyboard shortcuts.`
      ),
      `, then over
on the top right you can select the icon for Open Keyboard Shortcuts
(JSON).`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Alternatively use the keyboard shortcuts `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `Crtl+Shift+p`
      ),
      ` and search for
"Open Keyboard Shortcuts (JSON)"`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Paste in your shortcut, in this case duplicating lines, which is
missing in Ubuntu VS Code:`
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
            className: 'language-json',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-json p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment">// Place your key bindings in this file to override the defaults</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;key&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;shift+alt+down&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;command&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;editor.action.copyLinesDownAction&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;when&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;editorTextFocus &amp;&amp; !editorReadonly&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;key&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;shift+alt+up&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;command&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;editor.action.copyLinesUpAction&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;when&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;editorTextFocus &amp;&amp; !editorReadonly&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Shout out to `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://twitter.com/calebporzio',
          }
        ),
        `Caleb Porzio`
      ),
      ` for the suggestion of adding in shortcuts
for the sidebar defaults, "explorer", "git" (scm), "debug" and
"extensions". The default shortcuts are a bit inconsistent.`
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
            className: 'language-json',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-json p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;key&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;ctrl+k ctrl+e&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;command&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;workbench.view.explorer&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;key&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;ctrl+k ctrl+g&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;command&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;workbench.view.scm&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;key&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;ctrl+k ctrl+d&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;command&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;workbench.view.debug&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;key&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;ctrl+k ctrl+x&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;command&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;workbench.extensions.action.showInstalledExtensions&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'remove-the-clutter',
      },
      `Remove the clutter`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Another tip from `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://twitter.com/calebporzio',
          }
        ),
        `Caleb Porzio`
      ),
      ` is removing all the clutter in the
editor and moving the sidebar.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Add these "optional" setting to the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `settings.json`
      ),
      ` file, you can
access it with `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `Crtl+Shift+p`
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
            className: 'language-json',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-json p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;workbench.activityBar.visible&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(255, 88, 116);" class="token boolean">false</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;workbench.editor.showTabs&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(255, 88, 116);" class="token boolean">false</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;workbench.sideBar.location&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;right&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;workbench.statusBar.visible&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(255, 88, 116);" class="token boolean">false</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;editor.minimap.enabled&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(255, 88, 116);" class="token boolean">false</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span></div></pre></div>`
      )
    )
  )
}

MDXContent.isMDXComponent = true
