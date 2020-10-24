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
      `The awesome now from zeit! It has a great cli with probably all of
this detailed in there under `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `-h`
      ),
      ` somewhere 😁`
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'add-a-txt-record',
      },
      `Add a TXT record`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Need to add a verification for something like the Google Search
console.`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">now dns </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> yoursite.xyz </span><span style="color: rgb(173, 219, 103);" class="token string">'@'</span><span class="token plain"> TXT someTextRecordYouNeedToAdd</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'add-a-cname',
      },
      `Add a CNAME`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">now dns </span><span style="color: rgb(130, 170, 255);" class="token function">add</span><span class="token plain"> yoursitename.com subdomainreference CNAME dnsprovider.org</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'aliases',
      },
      `Aliases`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Got your own domain name? You can alias your latest `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `now`
      ),
      ` deployment`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">now </span><span style="color: rgb(255, 203, 139);" class="token builtin class-name">alias</span><span class="token plain"> now-generated-url.now.sh your-awesome-domain-name.af</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'scale-your-deployment',
      },
      `Scale your deployment`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Want your site to not get frozen? And have visitors have to wait for
the instance to spin up?`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `This is straight from the CLI with `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `now scale -h`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Create an deployment with 3 instances, never sleeps:</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">now scale my-deployment-ntahoeato.now.sh </span><span style="color: rgb(247, 140, 108);" class="token number">3</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Create an automatically scaling deployment:</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">now scale my-deployment-ntahoeato.now.sh </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain"> </span><span style="color: rgb(247, 140, 108);" class="token number">5</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Create an automatically scaling deployment without specifying max:</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">now scale my-deployment-ntahoeato.now.sh </span><span style="color: rgb(247, 140, 108);" class="token number">1</span><span class="token plain"> auto</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Create an automatically scaling deployment without specifying min or max:</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">now scale my-deployment-ntahoeato.now.sh auto</span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain"></span><span style="color: rgb(99, 119, 119); font-style: italic;" class="token comment"># Create an deployment that is always active and never &quot;sleeps&quot;:</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">now scale my-deployment-ntahoeato.now.sh </span><span style="color: rgb(247, 140, 108);" class="token number">1</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'environment-variables',
      },
      `Environment variables`
    ),
    (0, _preact.mdx)('p', null, `Config stuff I always forget!`),
    (0, _preact.mdx)(
      'p',
      null,
      `If it's keys, then use secrets and configure them in the
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `package.json`
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
            className: 'language-json',
          }
        ),
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-json p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span style="color: rgb(128, 203, 196);" class="token property">&quot;now&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;alias&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;cool&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;env&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(199, 146, 234);" class="token punctuation">{</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;AWS_ACCESS_KEY_ID&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;@aws_access_key_id&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;AWS_SECRET_ACCESS_KEY&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;@aws_secret_access_key&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;MONGODB_URI&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;@mongodb_uri&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;S3_BUCKET_NAME&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;@s3_bucket_name&quot;</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">      </span><span style="color: rgb(128, 203, 196);" class="token property">&quot;SECRET&quot;</span><span style="color: rgb(127, 219, 202);" class="token operator">:</span><span class="token plain"> </span><span style="color: rgb(173, 219, 103);" class="token string">&quot;@secret&quot;</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">    </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span class="token plain"></span></div><div style="color: #d6deeb;" class="token-line"><span class="token plain">  </span><span style="color: rgb(199, 146, 234);" class="token punctuation">}</span><span style="color: rgb(199, 146, 234);" class="token punctuation">,</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `If you have a lot of configuration variables and you dont want to make
a mess in the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `package.json`
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
        `<div class="codeBlock toast-highlight mb-4 shadow-xl text-sm"><pre style="color: #d6deeb; background-color: #011627; border-top: unset;" class="prism-code language-bash p-5 mt-0 overflow-auto"><div style="color: #d6deeb;" class="token-line"><span class="token plain">now -E</span></div></pre></div>`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `That will pull your `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `.env`
      ),
      ` file and use that in place of adding
individual vars via `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `now -e var`
      ),
      `. I have always used `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `dotenv`
      ),
      ` and I
understand that `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `now`
      ),
      ` uses `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `dotenv`
      ),
      ` for this and using without is
untested by me?`
    )
  )
}

MDXContent.isMDXComponent = true
