// app/[slug]/page.tsx
import { notFound } from 'next/navigation'

async function getPage(slug: string) {
  const res = await fetch('https://cms.bidatlanticcars.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          page(id: "${slug}", idType: URI) {
            title
            content
          }
        }
      `,
    }),
    next: { revalidate: 60 }, // кеширай за 60 секунди
  })

  const json = await res.json()
  return json?.data?.page
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug)

  if (!page) return notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      <article
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  )
}
