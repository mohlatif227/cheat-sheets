import { Layout } from '@components/Layout'
import components from '@components/MDXComponents'
import { SHEETS_CONTENT_PATH } from '@config/constants'
import { getMdxContent } from '@utils/get-mdx-content'
import hydrate from 'next-mdx-remote/hydrate'

export default function CheatSheet({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components })

  return (
    <Layout>
      <div>
        <h1>{frontMatter.title}</h1>
        {content}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const sheets = await getMdxContent(SHEETS_CONTENT_PATH)
  const paths = sheets.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const sheets = await getMdxContent(SHEETS_CONTENT_PATH)
  const sheetSlug = slug.join('/')
  const [sheet] = sheets.filter(sheet => sheet.slug === sheetSlug)

  if (!sheet) {
    console.warn(`No content found for slug ${sheetSlug}`)
  }

  return {
    props: {
      mdxSource: sheet.mdx,
      frontMatter: sheet.data,
    },
  }
}
