import { Box, Flex, Text } from '@chakra-ui/core'
import ThemeTogglebutton from '@components/ThemeToggleButton'
import { useImage } from 'use-cloudinary'

export default function Navbar() {
  const { generateUrl, url, isLoading } = useImage({
    cloudName: 'testing-hooks-upload',
  })

  React.useEffect(() => {
    generateUrl({
      publicId: 'transparent_dom_logo',
      transforms: {
        height: 30,
        width: 30,
      },
    })
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Image src={url} boxSize={30} alt="Navbar logo" /> */}
        <Text pl={3}>Cheat Sheets</Text>
      </Flex>
      <Box>
        <ThemeTogglebutton />
      </Box>
    </Flex>
  )
}
