import { Box, Stack } from '@chakra-ui/core'
import ContentBox from '@components/ContentBox'
import { Layout } from '@components/Layout'
import Search from '@components/Search'
import { SHEETS_CONTENT_PATH } from '@config/constants'
import { getMdxContent } from '@utils/get-mdx-content'

export default function CheatSheet({ allMdx }) {
  const [filteredSheets, setFilteredSheets] = React.useState(allMdx)

  const handleFilter = data => {
    setFilteredSheets(data)
  }

  return (
    <Layout>
      <Box pb={3}>
        {/* Content Area + Input + Tag filter */}
        <Stack
          spacing={[4, 8, 12]}
          justify="center"
          alignItems="center"
        >
          <Search sheets={allMdx} handleFilter={handleFilter} />
          <Stack spacing={[2, 6, 12]}>
            {filteredSheets?.map(sheet => (
              <ContentBox key={sheet.slug} sheet={sheet} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getMdxContent(SHEETS_CONTENT_PATH)
  const allMdx = posts.map(post => ({
    slug: post.slug,
    ...post.data,
  }))

  return {
    props: {
      allMdx,
    },
  }
}
