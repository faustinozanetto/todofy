import React from "react";
import NextHead from "next/head";

export type CoreLayoutHeadProps = {
  seoTitle?: string;
  seoDescription?: string;
  seoUrl?: string;
  seoCanonicalUrl?: string;
  seoFavIcon?: string;
  seoImage?: string;
};

const CoreLayoutHead: React.FC<CoreLayoutHeadProps> = (props) => {
  const { seoTitle, seoDescription, seoUrl, seoCanonicalUrl, seoFavIcon, seoImage } = props;

  return (
    <NextHead>
      {/* Base SEO */}
      <title>{seoTitle}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={seoDescription} />
      <link rel="icon" href={seoFavIcon} />
      <link rel="canonical" href={seoCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
    </NextHead>
  );
};

export default CoreLayoutHead;
