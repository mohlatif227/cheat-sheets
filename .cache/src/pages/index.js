'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _linaria = require('linaria')

var _react = require('linaria/react')

var _preact = require('preact')

var _reactHelmet = require('react-helmet')

/** @jsx h */
const h1Styled = 'h1llnfj4'
const Yo = /*#__PURE__*/ (0, _react.styled)('div')({
  name: 'Yo',
  class: 'y8p6pvv',
})

var _default = props => {
  console.log('=====================')
  console.log(props)
  console.log('=====================')
  return (0, _preact.h)(
    _preact.Fragment,
    null,
    (0, _preact.h)(
      _reactHelmet.Helmet,
      null,
      (0, _preact.h)('link', {
        rel: 'stylesheet',
        href: '/styles/src/pages/index.css',
      })
    ),
    props.posts.map(post => {
      let slug = post.slug.replace(`.md`, ``)
      return (0, _preact.h)(
        Yo,
        null,
        (0, _preact.h)(
          'a',
          {
            href: slug,
            id: slug,
          },
          (0, _preact.h)(
            'h2',
            {
              className: h1Styled,
            },
            post.title
          )
        )
      )
    })
  )
}

exports.default = _default
