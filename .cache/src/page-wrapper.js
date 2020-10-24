'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _preact = require('@mdx-js/preact')

var _linaria = require('linaria')

var _preact2 = require('preact')

var _reactHelmet = require('react-helmet')

/** @jsx h */
let components = {
  h1: props => (0, _preact2.h)('h1', props),
  inlineCode: ({ children }) =>
    (0, _preact2.h)(
      'code',
      {
        style: {
          backgroundColor: 'rgb(1,22,39)',
          padding: 3,
          margin: 3,
          borderRadius: 5,
          color: '#f0f0f0',
        },
      },
      children
    ),
  pre: props => {
    return (0, _preact2.h)('div', {
      dangerouslySetInnerHTML: {
        __html: props.children.props.children,
      },
    })
  },
}
let wrapper = 'w1hia99a'

var _default = ({ children, ...props }) => {
  return (0, _preact2.h)(
    'main',
    {
      className: wrapper,
    },
    (0, _preact2.h)(
      _reactHelmet.Helmet,
      null,
      (0, _preact2.h)('link', {
        rel: 'stylesheet',
        href: '/styles/src/page-wrapper.css',
      })
    ),
    (0, _preact2.h)(
      'header',
      null,
      (0, _preact2.h)(
        'div',
        null,
        (0, _preact2.h)(
          'h1',
          null,
          (0, _preact2.h)(
            'a',
            {
              href: '/',
            },
            'Cheat Sheets'
          )
        )
      )
    ),
    (0, _preact2.h)(
      _preact.MDXProvider,
      {
        components: components,
      },
      (0, _preact2.h)(
        'div',
        null,
        props.title
          ? (0, _preact2.h)(
              _preact2.Fragment,
              null,
              (0, _preact2.h)('h2', null, props.title),
              (0, _preact2.h)(
                'p',
                null,
                'Created: ',
                props.createdDate
              ),
              (0, _preact2.h)(
                'p',
                null,
                'Updated: ',
                props.updatedDate
              ),
              (0, _preact2.h)(
                'pre',
                null,
                JSON.stringify(props.tocContent, null, 2)
              )
            )
          : null,
        children
      )
    )
  )
}

exports.default = _default
