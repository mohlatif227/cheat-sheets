import {
  Box,
  ChakraProvider,
  cookieStorageManager,
  storageKey,
  useColorMode,
} from '@chakra-ui/core'
import Navbar from '@components/Navbar'
import SEO from '@components/SEO'
import { useEffect } from 'react'
import theme from '../theme'

export function Chakra({
  children,
  cookies = '',
  evaluateThemeLazily,
}) {
  return (
    <ChakraProvider
      resetCSS
      theme={theme}
      storageManager={cookieStorageManager(cookies)}
    >
      <SEO
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
      <Navbar />
      {evaluateThemeLazily && <LazyThemeEvaluator />}
      <Box mx={[2, 0]}>{children}</Box>
    </ChakraProvider>
  )
}

function LazyThemeEvaluator() {
  const { toggleColorMode, colorMode } = useColorMode()

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // currently taken from
      // https://github.com/chakra-ui/chakra-ui/blob/develop/packages/color-mode/src/storage-manager.ts#L35
      // related issue here https://github.com/chakra-ui/chakra-ui/issues/1581
      // its in the nature of user-based themes sadly, cant statically extract
      const match = document.cookie.match(
        new RegExp(`(^| )${storageKey}=([^;]+)`)
      )
      const value = match ? match[2] : 'light'

      if (colorMode !== value) {
        toggleColorMode()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}
