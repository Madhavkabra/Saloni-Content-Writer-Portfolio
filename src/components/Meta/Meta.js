import Head from 'next/head';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = 'Dr. Saloni Kabra';
const twitterHandle = '@hamishMW';
const defaultOgImage = `${siteUrl}/social-image.png`;

export const Meta = ({ title, description, prefix = name, ogImage = defaultOgImage }) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return (
    <Head>
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta
        name="keywords"
        content="portfolio, Dr. Saloni Kabra, Doctor, Academic Writer, Medical Content Writer, Technical Writer, SEO Content Writer, Website Content Writer, Blogger"
      />
      <link rel="canonical" href="https://salonikabra.netlify.app" />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Banner for the site" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
