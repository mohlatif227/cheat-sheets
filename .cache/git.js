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
        id: 'use-a-git-patch-file',
      },
      `Use a git patch file`
    ),
    (0, _preact.mdx)('p', null, `How to apply a git patch file.`),
    (0, _preact.mdx)(
      'p',
      null,
      `Good resource here:
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href:
              'https://www.devroom.io/2009/10/26/how-to-create-and-apply-a-patch-with-git/',
          }
        ),
        `https://www.devroom.io/2009/10/26/how-to-create-and-apply-a-patch-with-git/`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># see the changes in the patch file</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> apply --stat the-patch-file.patch</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># test if ther's going to be issues</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> apply --check the-patch-file.patch</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># no issues, cool</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> apply the-patch-file.patch</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'change-the-git-init-default-branch-name',
      },
      `Change the git init default branch name`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Don't want to have the default branch called master?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Thanks to `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href:
              'https://twitter.com/mathias/status/1277896371455090688',
          }
        ),
        `Mathias Bynens`
      ),
      ` for this one.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">mkdir</span><span class="token plain"> -p ~/.config/git/template</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">echo</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">'ref: refs/heads/main'</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"> ~/.config/git/template/HEAD</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --global init.templateDir ~/.config/git/template/</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'add-a-repo-from-your-machine-to-github',
      },
      `Add a repo from your machine to GitHub`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Create a new repo and push it to GitHub.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">echo</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;# name-of-your-awesome-repo&quot;</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;&gt;</span><span class="token plain"> README.md </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># add repo name to README.md</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> init </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># init the repository</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> README.md</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> commit -m </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;first commit&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> origin https://github.com/your-username/name-of-your-awesome-repo.git</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> push -u origin master</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `The first four commands can be ignored if you have a repo you're
already working on (git)committing to.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'latest-changes-from-repo-to-your-machine',
      },
      `Latest changes from repo to your machine`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> pull</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'add-tracking-information-to-your-work',
      },
      `Add tracking information to your work`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Assuming that you are working on the master branch then`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch --set-upstream-to</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain">origin/master</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can set it to whatever branch you want to track changes for`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch --set-upstream-to</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain">origin/</span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">branch</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `This will mean you can just do `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `git pull`
      ),
      ` and the latest changes will
be pulled to your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `origin`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'what-branch',
      },
      `What branch`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># shows what branch you're on</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch -r </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># shows remote branches</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch -a </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># shows all branches</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'create-a-local-branch-and-push-it-to-github',
      },
      `Create a local branch and push it to GitHub`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Want to make your feature branch and get it on GitHub?`
    ),
    (0, _preact.mdx)('p', null, `Make your branch first then:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> push --set-upstream origin </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">branch-you-just-created</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'create-a-pr-pull-request',
      },
      `Create a PR `,
      `[Pull Request]`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Fork other users repo in GitHub, then clone to your machine.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> clone https://github.com/your-username/awesome-awesome-repo</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Add the remote repo:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> upstream https://github.com/other-username/awesome-awesome-repo</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Create your branch:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch your-awesome-branch</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Check it out:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout your-awesome-branch</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `If adding a folder use.`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> nameOfFolder/</span><span style="color: rgb(199, 146, 234);" class="token punctuation">\\</span><span style="color: rgb(199, 146, 234);" class="token punctuation">\\</span><span class="token plain">*</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Make your commit and push to your new branch.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">.</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> commit -m </span><span style="color: rgb(173, 219, 103);" class="token string">'initial commit'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> push origin your-awesome-branch</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Manage the rest of the PR via GitHub`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'check-remotes',
      },
      `Check remotes`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote -v</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'sync-a-remote-fork-on-your-machine',
      },
      `Sync a remote fork on your machine`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `First configure the local to point to the remote upstream`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote -v</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote -v</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> fetch upstream</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout master</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> merge upstream/master</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You then use `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `git merge`
      ),
      ` to update any branch on the upstream
repository:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> merge upstream/dev</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Take a look at `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://help.github.com/articles/syncing-a-fork/',
          }
        ),
        `syncing a fork`
      ),
      ` for more details.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'sync-a-remote-fork-on-github',
      },
      `Sync a remote fork on Github`
    ),
    (0, _preact.mdx)(
      'ol',
      null,
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Open your fork on GitHub.`
      ),
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Click on Pull Requests.`
      ),
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Click on New Pull Request. By default, GitHub will compare the
original with your fork, and there shouldn't be anything to
compare if you didn't make any changes.`
      ),
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Click on Try `,
        (0, _preact.mdx)(
          'inlineCode',
          {
            parentName: 'li',
          },
          `switching the base`
        ),
        `. Now GitHub will compare your
fork with the original, and you should see all the latest changes.`
      ),
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Click on Click to create a pull request for this comparison and
assign a predictable name to your pull request (e.g., Update from
original).`
      ),
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Click on Send pull request.`
      ),
      (0, _preact.mdx)(
        'li',
        {
          parentName: 'ol',
        },
        `Scroll down and click Merge pull request and finally Confirm
merge. If your fork didn't have any changes, you will be able to
merge it automatically.`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: '2fa',
      },
      `2fa`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Using two factor authentication? Then use the following so you're not
adding in your auth token each time you want to `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `push`
      ),
      ` your code.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote set-url origin https://your-username:your-token@github.com/your-username/your-repo.git</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'change-origin-url',
      },
      `Change `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'h2',
        },
        `origin`
      ),
      ` url`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you want to change the origin url you can use the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `set-url`
      ),
      ` command`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote set-url origin https://github.com/username/new-repo-name</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'add-code-on-your-machine-to-new-repo',
      },
      `Add code on your machine to new repo`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Via terminal navigate to your code folder.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> init</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Add your files.`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">.</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Adding a folder use the following syntax or it'll get added as a BLOB.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> nameOfFolder/</span><span style="color: rgb(199, 146, 234);" class="token punctuation">\\</span><span style="color: rgb(199, 146, 234);" class="token punctuation">\\</span><span class="token plain">*</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Commit to local repo.`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> commit -m </span><span style="color: rgb(173, 219, 103);" class="token string">'some detailed message'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To add your files to the remote repo,
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://help.github.com/articles/adding-a-remote/',
          }
        ),
        `first add your remote repo`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> origin </span><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain">remote repository URL</span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"> </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Sets the new remote</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote -v </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Verifies the new remote URL</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> push origin master</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `For more info check out: `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href:
              'https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/',
          }
        ),
        `adding an existing project to github using
the command line`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'delete-branches',
      },
      `Delete branches`
    ),
    (0, _preact.mdx)('p', null, `Delete local branch.`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch -D branch-name</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Remove local branches that are not on the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `remote`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote prune origin --dry-run</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># remove --dry-run if you're happy to delete</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Remove local branches that were created from remote branches.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch --merged master </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">grep</span><span class="token plain"> -v </span><span style="color: rgb(173, 219, 103);" class="token string">'^[ *]*master$'</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">|</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">xargs</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch -d</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'merge-master-branch-into-feature-branch',
      },
      `Merge master branch into feature branch`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `How to merge the master branch into the feature branch? This will come
up often if you are working on a team with other devs and you want to
update your feature branch to include the latest changes.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># checkout your feature branch</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout feature1</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># merge master into it</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> merge master</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'merge-two-repos',
      },
      `Merge two repos`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you want to merge project-a into project-b:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">cd</span><span class="token plain"> path/to/project-b</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> project-a path/to/project-a</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> fetch project-a</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> merge --allow-unrelated-histories project-a/master </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># or whichever branch you want to merge</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote remove project-a</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'stop-tracking-a-file',
      },
      `Stop tracking a file`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you have `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.env`
      ),
      ` files that are tracked by Git and want to ignore
them so your API keys don't get added to GitHub use:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> update-index --assume-unchanged </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">file</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'stop-tracking-a-previously-tracked-folder',
      },
      `Stop tracking a previously tracked folder`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `First add the folder to your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.gitignore`
      ),
      ` then remove the folder from
your local git tracking with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">rm</span><span class="token plain"> -r --cached </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">folder</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'start-tracking-a-previously-un-tracked-file',
      },
      `Start tracking a previously un-tracked file`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> update-index --no-assume-unchanged </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">file</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id:
          'cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github',
      },
      `Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `So you make a clone, make some changes then realise that you need to
add it to your GitHub account before making a pull`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote -v</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">origin  https://github.com/OtherUser/other-username/other-repo </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">fetch</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">origin  https://github.com/OtherUser/other-username/other-repo </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">push</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You just need to set the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `origin`
      ),
      ` to yours then add the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `upstream`
      ),
      ` as
the original `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `origin`
      ),
      ` make sense?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `So change `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `origin`
      ),
      ` to yours:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote set-url origin http://github.com/your-username/your-repo</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then add `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `upsrtream`
      ),
      ` as theirs:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> upstream https://github.com/other-username/other-repo</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Now it should look something like this:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote -v</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">origin  http://github.com/your-username/your-repo </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">fetch</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">origin  http://github.com/your-username/your-repo </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">push</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">upstream  https://github.com/other-username/other-repo </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">fetch</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">upstream  https://github.com/other-username/other-repo </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">push</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'remove-an-upstream-repository',
      },
      `Remove an `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'h2',
        },
        `upstream`
      ),
      ` repository`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you no longer need a reference to a forked repository then remove
it with the following:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote </span><span style="color: rgb(130, 170, 255);" class="token function">rm</span><span class="token plain"> upstream</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'clone-a-repo-and-give-it-a-different-name',
      },
      `Clone a repo and give it a different name`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> clone https://github.com/your-username/repo-name new-repo-name</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'using-husky',
      },
      `Using Husky?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you are pushing right after a commit, you can use
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `git push --no-verify`
      ),
      ` to avoid running all the tests again.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you make a trivial change and want to commit
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `git commit -m 'some detailed message' --no-verify`
      ),
      ` will skip your
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `precommit`
      ),
      ` and `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `prepush`
      ),
      ` scripts.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'how-to-read-last-commit-comment',
      },
      `How to read last commit comment?`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> show </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># is the fastest to type, but shows you the diff as well.</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> log -1 </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># is fast and simple.</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> log -1 --pretty</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain">%B </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># if you need just the commit message and nothing else.</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'remove-commit-from-pull-request',
      },
      `Remove commit from pull request`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Read
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href:
              'http://stackoverflow.com/questions/34519665/how-to-move-head-back-to-a-previous-location-detached-head/34519716#34519716',
          }
        ),
        `this`
      ),
      `
for more detail on how to revert.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `This was the simplest approach I found:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Checkout the desired branch</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">branch</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Undo the desired commit</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> revert </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">commit</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Update the remote with the undo of the code</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> push origin </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">branch</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Rather than use the last part I unstaged the changes in VSCode which I
think did the same thing.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'show-gitconfig-details',
      },
      `Show `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'h2',
        },
        `.gitconfig`
      ),
      ` details`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `There are three levels for Git config:`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      (0, _preact.mdx)(
        'strong',
        {
          parentName: 'p',
        },
        `System level`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to view</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --list --system</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to set</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --system color.ui </span><span style="color: rgb(255, 88, 116);" class="token boolean">true</span></div></pre></div>`
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
        `Global level`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to view</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --list --global</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to set</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --global user.name xyz</span></div></pre></div>`
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
        `Repository level`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to view</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --list --local</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to set</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --local core.ignorecase </span><span style="color: rgb(255, 88, 116);" class="token boolean">true</span><span class="token plain"> </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># (--local optional)</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># to edit repository config file</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --edit --local </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># (--local optional)</span></div></pre></div>`
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
        `View All Settings`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --list --show-origin</span></div></pre></div>`
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
            href: 'https://stackoverflow.com/a/46986031/1138354',
          }
        ),
        `info`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'conflicts-between-windows-git-and-wsl-git',
      },
      `Conflicts between Windows Git and WSL Git?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you are having issues with changes showing in Windows Git and not
Windows Subsystem Linux Git (For a Windows WSL Dev set-up) then check
the settings of each environment by using:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --list --show-origin</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Remove any conflicting settings then try again.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id:
          'if-you-want-to-rename-a-branch-while-pointed-to-any-branch-do',
      },
      `If you want to rename a branch while pointed to any branch, do:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch -m </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">oldname</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">newname</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you want to rename the current branch, you can do:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> branch -m </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain">newname</span><span style="color: rgb(127, 219, 202);" class="token operator">&gt;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `A way to remember this, is `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `-m`
      ),
      ` is for "move" (or `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `mv`
      ),
      `), which is how
you rename files.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'git-ref-log',
      },
      `Git ref log`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Want to know what work you have done on a repo? Use `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `git reflog`
      ),
      ` to
displpay all the commits.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># show all changes for the last 90 days</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> reflog show -a</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># show changes with a date</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> reflog --date</span><span style="color: rgb(127, 219, 202);" class="token operator">=</span><span class="token plain">iso</span></div></pre></div>`
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
              'https://stackoverflow.com/questions/17369254/is-there-a-way-to-cause-git-reflog-to-show-a-date-alongside-each-entry',
          }
        ),
        `https://stackoverflow.com/questions/17369254/is-there-a-way-to-cause-git-reflog-to-show-a-date-alongside-each-entry`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'use-ssh-in-place-of-https',
      },
      `Use SSH in place of HTTPS`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Get your SSH set up on your machine and add a key to GitHub, more on
that here:
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href:
              'https://egghead.io/lessons/javascript-how-to-authenticate-with-github-using-ssh',
          }
        ),
        `https://egghead.io/lessons/javascript-how-to-authenticate-with-github-using-ssh`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You will then need to pick your `,
      (0, _preact.mdx)(
        'strong',
        {
          parentName: 'p',
        },
        `Clone with SSH`
      ),
      ` option from the
`,
      (0, _preact.mdx)(
        'strong',
        {
          parentName: 'p',
        },
        `Clone or download`
      ),
      ` section on your repo page.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Once you have taken the link from there you will need to set the repo
remote to the SSH URL`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> remote set-url origin git@github.com:username/repo-name-here.git</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Where username is the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `username`
      ),
      ` of the repo owner and
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `repo-name-here`
      ),
      ` is the name of that user's repository.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'how-to-authenticate-with-github-using-ssh',
      },
      `How to authenticate with GitHub using SSH`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Check that there are no `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `rsa`
      ),
      ` files here before continuing, use (bash
or Git bash if you're on Windows):`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ls</span><span class="token plain"> -al ~/.ssh</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If there's nothing there then generate a new keygen with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-keygen -t rsa -b </span><span style="color: rgb(247, 140, 108);" class="token number">4096</span><span class="token plain"> -C your@email.com </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># add your email address 👍</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'blockquote',
      null,
      (0, _preact.mdx)(
        'p',
        {
          parentName: 'blockquote',
        },
        `If you decide to use a password for your SSH key see
`,
        (0, _preact.mdx)(
          'a',
          _extends(
            {
              parentName: 'p',
            },
            {
              href: '#ssh-keys-with-passwords',
            }
          ),
          `SSH Keys With Passwords`
        )
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Now using `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `ls -al ~/.ssh`
      ),
      ` will show our `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `id_rsa.pub`
      ),
      ` file.`
    ),
    (0, _preact.mdx)('p', null, `Add the SSH key to the SSH agent:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># for mac and Linux from bash, also from Windows Git Bash</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">eval</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span style="color: rgb(214, 222, 235);" class="token string variable">$(</span><span style="color: rgb(214, 222, 235);" class="token string variable">ssh-agent -s</span><span style="color: rgb(214, 222, 235);" class="token string variable">)</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># for Git Bash on Windows</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">eval</span><span class="token plain"> </span><span style="color: rgb(214, 222, 235);" class="token variable">\`</span><span style="color: rgb(214, 222, 235);" class="token variable">ssh-agent -s</span><span style="color: rgb(214, 222, 235);" class="token variable">\`</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># fir Fish shell</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">eval</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">(</span><span class="token plain">ssh-agent -c</span><span style="color: rgb(199, 146, 234);" class="token punctuation">)</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Add RSA key to SSH with:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-add ~/.ssh/id_rsa</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Copy your key to clipboard with one of the following:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">clip </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain"> ~/.ssh/id_rsa.pub </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Windows</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">cat</span><span class="token plain"> ~/.ssh/id_rsa.pub </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Linux</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">pbcopy </span><span style="color: rgb(127, 219, 202);" class="token operator">&lt;</span><span class="token plain"> ~/.ssh/id_github.pub </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Mac</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Add a new SSH Key to your GitHub profile from the `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://github.com/settings/keys',
          }
        ),
        `settings`
      ),
      ` page by
clicking the `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://github.com/settings/ssh/new',
          }
        ),
        `New SSH key`
      ),
      ` button and paste in your key. Save it...`
    ),
    (0, _preact.mdx)('p', null, `Then authenticate with:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ssh</span><span class="token plain"> -T git@github.com</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you go back to the GitHub setting page and refresh the key icon
should go from black to green. 🎉`
    ),
    (0, _preact.mdx)(
      'h3',
      {
        id: 'ssh-keys-with-passwords',
      },
      `SSH Keys With Passwords`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you add a password to your SSH key you will find yourself entering
the password to authenticate on each `,
      `[pull, push]`,
      ` operation. This can
get tedious, especially if you have a long password in your keys.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Add the following line to your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.ssh/config/`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">AddKeysToAgent </span><span style="color: rgb(130, 170, 255);" class="token function">yes</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Open or create the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.ssh/config`
      ),
      ` file with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">nano</span><span class="token plain"> ~/.ssh/config</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `The SSH agent will also need to be started on each terminal session
now to store the keys in, add the following to your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.bashrc`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(199, 146, 234);" class="token punctuation">[</span><span class="token plain"> -z </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span style="color: rgb(130, 170, 255);" class="token string environment constant">$SSH_AUTH_SOCK</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">]</span><span class="token plain"> </span><span style="color: rgb(127, 219, 202);" class="token operator">&amp;&amp;</span><span class="token plain"> </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">eval</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span style="color: rgb(214, 222, 235);" class="token string variable">$(</span><span style="color: rgb(214, 222, 235);" class="token string variable">ssh-agent -s</span><span style="color: rgb(214, 222, 235);" class="token string variable">)</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Open the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.bashrc`
      ),
      ` file with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">nano</span><span class="token plain"> ~/.bashrc</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Now the SSH agent will start on each terminal session and you will
only be prompted for the password on the first `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `pull`
      ),
      `, `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `push`
      ),
      `
operation.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'use-multiple-ssh-keys',
      },
      `Use multiple SSH keys`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you have more than one GitHub account or if you have AWS code
commit account then you will need to set up a `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `config`
      ),
      ` file, add your
SSH key the same as detailed in
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: '#how-to-authenticate-with-github-using-ssh',
          }
        ),
        `How to authenticate with GitHub using SSH`
      ),
      `
and give the key a different name:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># ls ~/.ssh</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">~/.ssh/id_rsa_github_1</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">~/.ssh/id_rsa_github_2</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">~/.ssh/id_rsa_git_aws</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can delete all cached keys before, with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-add -D</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can check your saved keys, with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-add -l</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Set up the SSH config file, check to see if you haven't got a `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `config`
      ),
      `
file already set up with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ls</span><span class="token plain"> -al ~/.ssh/</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you haven't got a `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `config`
      ),
      ` file there then:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">cd</span><span class="token plain"> ~/.ssh/</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">touch</span><span class="token plain"> config</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Use your text editor of choice, in this example we'll use `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `nano`
      ),
      `:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">nano</span><span class="token plain"> config</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Add your configuration:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">AddKeysToAgent </span><span style="color: rgb(130, 170, 255);" class="token function">yes</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># github_1 account</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Host github.com-github_1</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    HostName github.com</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    User </span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    IdentityFile ~/.ssh/id_rsa_github_1</span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># github_2 account</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Host github.com-github_2</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    HostName github.com</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    User </span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    IdentityFile ~/.ssh/id_rsa_github_2</span></div><div style="color: #d6deeb;" class="token-line"><span style="display: inline-block;" class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># AWS code commit account</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">Host git-codecommit.*.amazonaws.com</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    User AWSUSERNAME</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    IdentityFile ~/.ssh/id_rsa_git_aws</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Clone your repo and modify the config file of the repo as detailed
here:
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: '#specify-multiple-users-for-myself-in-gitconfig',
          }
        ),
        `Specify multiple users for myself in .gitconfig?`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `There's a great Gist detailing this
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://gist.github.com/jexchan/2351996',
          }
        ),
        `here`
      ),
      ` for more detail if
needed.`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 're-use-ssh-keys-from-one-machine-to-another',
      },
      `Re-use SSH keys, from one machine to another`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you want to avoid creating multiple SSH keys for different
environments and move your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.ssh`
      ),
      ` folder from one machine to another
then you can do the following:`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Copy your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.ssh`
      ),
      ` and `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.gitconfig`
      ),
      ` files:`
    ),
    (0, _preact.mdx)('p', null, `Copy from Linux to Windows`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">cp</span><span class="token plain"> ~/.ssh/* /c/Users/Scott.Spence/.linuxFiles/.ssh/</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">cp</span><span class="token plain"> ~/.gitconfig /c/Users/Scott.Spence/.linuxFiles/</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Copy from Windows to Linux`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">cp</span><span class="token plain"> /mnt/c/Users/Scott.Spence/.linuxFiles/.ssh/* ~/.ssh/</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Reset the permissions back to default:</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">sudo</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">chmod</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">600</span><span class="token plain"> ~/.ssh/id_rsa</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">sudo</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">chmod</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">600</span><span class="token plain"> ~/.ssh/id_rsa.pub</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">cp</span><span class="token plain"> /mnt/c/Users/Scott.Spence/.linuxFiles/.* ~/</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">chmod</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">644</span><span class="token plain"> ~/.gitconfig</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Start the SSH agent with:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(255, 203, 139);" class="token builtin class-name">eval</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span style="color: rgb(214, 222, 235);" class="token string variable">$(</span><span style="color: rgb(214, 222, 235);" class="token string variable">ssh-agent -s</span><span style="color: rgb(214, 222, 235);" class="token string variable">)</span><span style="color: rgb(173, 219, 103);" class="token string">&quot;</span><span class="token plain"> </span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># for mac and Linux from bash, also from Windows Git Bash</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Add your SSH key to the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `ssh-agent`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-add ~/.ssh/id_rsa</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Then authenticate with:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># GitHub</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">ssh</span><span class="token plain"> -T git@github.com</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Bitbucket</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">ssh</span><span class="token plain"> -T git@bitbucket.org</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'using-ssh-over-the-https-port',
      },
      `Using SSH over the HTTPS port`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `SSH can be tunnelled over HTTPS if the network you are on blocks the
SSH port.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Test if SSH over HTTPS is possible with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ssh</span><span class="token plain"> -T -p </span><span style="color: rgb(247, 140, 108);" class="token number">443</span><span class="token plain"> git@ssh.github.com</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you get a response then, edit your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.ssh/config`
      ),
      ` file and add
this section:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">Host github.com</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  Hostname ssh.github.com</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  Port </span><span style="color: rgb(247, 140, 108);" class="token number">443</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Check that you have a key already added with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-add -l</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If nothing is listed then add in your key with:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-add ~/.ssh/id_rsa</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Test that is has worked with:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">ssh</span><span class="token plain"> -T git@github.com</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'change-ssh-key-password',
      },
      `Change SSH key password`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Tired of typing your SSH key password because you made it a 32
characters and can't stand the monotony anymore?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Still want to have a SSH key password on your existing SSH key?`
    ),
    (0, _preact.mdx)('p', null, `Use:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">ssh-keygen -p -f ~/.ssh/id_rsa</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'specify-multiple-users-for-myself-in-gitconfig',
      },
      `Specify multiple users for myself in .gitconfig?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Want to have different git credentials for one specific repository?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can configure an individual git repo to use a specific user/email
address which overrides the global configuration.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To list out the config for the repo:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --list --local</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `From the root of the repo, run:`),
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config user.name </span><span style="color: rgb(173, 219, 103);" class="token string">'Your Name'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config user.email </span><span style="color: rgb(173, 219, 103);" class="token string">'your@email.com'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Whereas the default user / email is configured in your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `~/.gitconfig`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --global user.name </span><span style="color: rgb(173, 219, 103);" class="token string">'Your Name'</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> config --global user.email </span><span style="color: rgb(173, 219, 103);" class="token string">'your@email.com'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'cant-remember-what-your-last-git-commit-said',
      },
      `Cant remember what your last git commit said?`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> show</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'rebase-changes',
      },
      `Rebase changes`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you're working on a team and there have been changes to the main
branch you want to push your changes to, you can rebase before
submitting a PR.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `In this scenario we're going to rebase our `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `feature`
      ),
      ` branch off of the
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `develop`
      ),
      ` branch`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># switch from your feature to get latest develop changes</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout develop</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> pull</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># checkout the feature branch and rebase</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout feature</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> rebase develop</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then use the prompts from there in conjunction with your text editor
to add in the changes.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># add a change</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># continue the rebase</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> rebase --continue</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># have an unrelated change, nothing to correct</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> rebase --skip</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># oh DERP! Want to start over?</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> rebase --abort</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'rebase-accept-incoming-in-bulk',
      },
      `Rebase accept incoming in bulk`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you have a large file (like a `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `package-lock.json`
      ),
      `) that you want to
accept all the incoming changes from then.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Whilst you're in rebase you'll need to check out the file from your
incoming branch then add it as the new file.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># checkout the file</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> checkout temp-branch -- package-lock.json</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># add the file whilst in rebase</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> package-lock.json</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># continue with the things</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> rebase --continue</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'see-differences-between-two-branches',
      },
      `See differences between two branches`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you want to see the difference between two branches then use the
git built in diff tool.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">diff</span><span class="token plain"> branch1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">..</span><span class="token plain">branch2</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'see-differences-between-two-files',
      },
      `See differences between two files`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you want to see the difference between two file across different
branches then use.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> </span><span style="color: rgb(130, 170, 255);" class="token function">diff</span><span class="token plain"> branch1</span><span style="color: rgb(199, 146, 234);" class="token punctuation">..</span><span class="token plain">branch2 package.json</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'revert-to-a-previous-commit',
      },
      `Revert to a previous commit`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Find the commit you want to revert to, then:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> reset hashOfCommit</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Then reset to the branch on the origin:`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># if I wanted to push back to the develop branch on GitHub say</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(130, 170, 255);" class="token function">git</span><span class="token plain"> reset --soft origin/develop</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Reference:
`,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href:
              'https://stackoverflow.com/questions/11829911/push-changes-without-pull',
          }
        ),
        `https://stackoverflow.com/questions/11829911/push-changes-without-pull`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'gitignore',
      },
      `Gitignore`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `You can automate the creation of your projects `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `gitignore`
      ),
      ` file using
the `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://docs.gitignore.io/install/command-line',
          }
        ),
        `gitignore API`
      ),
      `.`
    ),
    (0, _preact.mdx)('p', null, `Setup the API:`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {}
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-undefined p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">git config --global alias.ignore \\</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">'!gi() { curl -sL https://www.gitignore.io/api/$@ ;}; gi'</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)('p', null, `Add to your shell configuration:`),
    (0, _preact.mdx)('p', null, `Bash`),
    (0, _preact.mdx)(
      'pre',
      null,
      (0, _preact.mdx)(
        'code',
        _extends(
          {
            parentName: 'pre',
          },
          {}
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-undefined p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">echo &quot;function gi() { curl -sL https://www.gitignore.io/api/\\$@ ;}&quot; &gt;&gt; \\</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">~/.bashrc &amp;&amp; source ~/.bashrc</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `checkout `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `gi list`
      ),
      ` for the languages and editors supported. You can
issue the following command inside your project`
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
          {}
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-undefined p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">gi linux,visualstudiocode,node &gt;&gt; ./.gitignore</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you find yourself using the same `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.gitignore`
      ),
      ` on your projects you
can create a global file (i.e. `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.gitignore_global`
      ),
      `), and copy to your
new project.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Reference: `,
      (0, _preact.mdx)(
        'a',
        _extends(
          {
            parentName: 'p',
          },
          {
            href: 'https://docs.gitignore.io/install/command-line',
          }
        ),
        `https://docs.gitignore.io/install/command-line`
      )
    )
  )
}

MDXContent.isMDXComponent = true
