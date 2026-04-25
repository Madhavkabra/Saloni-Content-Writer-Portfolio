import Head from 'next/head';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = 'Dr. Saloni Kabra';
const twitterHandle = '@hamishMW';
const defaultOgImage = `${siteUrl}/social-image.png`;
const defaultDescription =
  'Dr. Saloni Kabra — Licensed BHMS and medical content writer with 6+ years creating SEO-optimized healthcare content for leading US and EU brands.';

export const Meta = ({
  title,
  description = defaultDescription,
  prefix = name,
  ogTitle,
  ogDescription,
  ogImage = defaultOgImage,
  ogUrl,
  canonicalUrl,
  keywords,
  structuredData,
}) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const resolvedOgTitle = ogTitle || titleText;
  const resolvedOgDescription = ogDescription || description;
  const resolvedOgUrl = ogUrl || siteUrl;
  const resolvedCanonicalUrl = canonicalUrl || resolvedOgUrl || siteUrl;

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta
        name="keywords"
        content={
          keywords ||
          'portfolio, Dr. Saloni Kabra, Doctor, Academic Writer, Medical Content Writer, Technical Writer, SEO Content Writer, Website Content Writer, Blogger'
        }
      />
      <link rel="canonical" href={resolvedCanonicalUrl} />

      <meta property="og:image" content={ogImage} />
      <meta
        property="og:image:alt"
        content="Dr. Saloni Kabra medical content writer and clinical strategist brand banner"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />

      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedOgUrl} />
      <meta property="og:description" content={resolvedOgDescription} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData ? (
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
    </Head>
  );
};
