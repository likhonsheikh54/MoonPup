import Head from "next/head"

interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
}

export function SEO({ title, description, canonicalUrl }: SEOProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: canonicalUrl,
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}

