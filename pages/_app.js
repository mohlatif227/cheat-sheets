import { ChakraProvider } from '@chakra-ui/core'
import theme from '@theme'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo
        title="Cheat Sheets"
        description="Everyday commands, config, hints and tips used for modern web development."
        url="https://cheatsheets.xyz"
        ogImage={{
          url: 'https://cheatsheets.xyz',
          title: 'OG Image title',
          description: 'Describe the OG image',
          image: ``,
          siteName: 'Cheat Sheets',
        }}
        twitter={{
          handle: '@spences10',
          site: 'https://twitter.com/spences10',
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
