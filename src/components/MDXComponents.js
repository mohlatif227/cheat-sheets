import { Heading, Text } from '@chakra-ui/core'
import { Code, Image } from '@mdnext/components'

export default {
  code: Code,
  img: Image,
  p: ({ children }) => <Text mb={4}>{children}</Text>,
  h1: ({ children }) => (
    <Heading as="h1" size="2xl" mb={8}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" size="xl" mb={6}>
      {children}
    </Heading>
  ),
}
