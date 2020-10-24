import { Text } from '@chakra-ui/core'
import { Code, Image } from '@mdnext/components'

export default {
  code: Code,
  img: Image,
  h1: ({ children }) => (
    <Text fontSize="2xl" fontFamily="heading" mb={3}>
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text fontSize="xl" fontFamily="heading" my={3}>
      {children}
    </Text>
  ),
}
