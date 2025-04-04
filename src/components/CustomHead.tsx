import Head from 'next/head';

type Props = {
  title: string;
  content: string;
  pageSlug: string;
  pageType?: string;
  ogImage?: string;
};

export default function CustomHead({
  title,
  content,
  pageSlug,
  pageType = 'website',
  ogImage = "",
}: Props) {
  const ogTitle = title.replace(' - Alamin Shaikh', '');
  const pageURL = pageSlug;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel='canonical' href={pageURL} />
      <meta property='og:type' content={pageType} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={content} />
      <meta property='og:url' content={pageURL} />
      <meta property='og:image' content={ogImage} />
    </Head>
  );
}