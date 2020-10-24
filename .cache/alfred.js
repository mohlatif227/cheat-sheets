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
        id: 'add-custom-search',
      },
      `Add custom search`
    ),
    (0, _preact.mdx)('p', null, `To add a custom search to Alfred.`),
    (0, _preact.mdx)(
      'p',
      null,
      `Open Alfred preferences and select the 'Web Search' tab.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Bottom right click the 'Add Custom Search' button.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Add the following into the form, this is for Startpage.com`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Search URL:
`,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `https://startpage.com/do/search?language=english&query={query}`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Title: `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `Search Startpage for '{query}'`
      )
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Keyword: `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `sp`
      )
    ),
    (0, _preact.mdx)('p', null, `Click 'Save'`),
    (0, _preact.mdx)(
      'h2',
      {
        id: 'change-the-default-search-in-alfred',
      },
      `Change the default search in Alfred`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `To add a your preferred search to Alfred.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Open Alfred preferences and select the 'Default Results' tab.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `At the bottom of the page where 'Fallbacks' is, click the 'Setup
fallback results' button.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Click on the `,
      (0, _preact.mdx)(
        'inlineCode',
        {
          parentName: 'p',
        },
        `+`
      ),
      ` icon and select either a predefined 'Web Search' or
select one of your 'Custom Search' options.`
    ),
    (0, _preact.mdx)(
      'p',
      null,
      `Drag your preferred search to the top of the list.`
    ),
    (0, _preact.mdx)('p', null, `Click 'Save'`)
  )
}

MDXContent.isMDXComponent = true
