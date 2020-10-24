import { Layout } from '@components/Layout'
import components from '@components/MDXComponents'
import { SHEETS_CONTENT_PATH } from '@config/constants'
import { getMdxContent } from '@utils/get-mdx-content'
import hydrate from 'next-mdx-remote/hydrate'

export default function BlogPost({ mdxSource, frontMatter }) {
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
  const posts = await getMdxContent(SHEETS_CONTENT_PATH)
  const paths = posts.map(({ slug }) => ({
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
  const posts = await getMdxContent(SHEETS_CONTENT_PATH)
  const postSlug = slug.join('/')
  const [post] = posts.filter(post => post.slug === postSlug)

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`)
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  }
}
