import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch('https://cms.bidatlanticcars.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPage {
          page(id: "${params.slug}", idType: URI) {
            title
            content
          }
        }
      `,
    }),
    next: { revalidate: 60 }, // Optional: ISR cache
  })

  const json = await res.json()
  const page = json?.data?.page

  if (!page) return notFound()

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </main>
  )
}
