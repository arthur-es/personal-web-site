import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import ogImage from "../assets/images/ogImage.jpg";

const siteQuery = graphql`
  query defaultQuerySEO {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default function SEO({ pageTitle, description, keywords, meta }) {
  return (
    <StaticQuery
      query={siteQuery}
      render={data => (
        <Helmet
          htmlAttributes={{ lang: "en" }}
          title={pageTitle || data.site.siteMetadata.title}
          titleTemplate={pageTitle && `%s | ${data.site.siteMetadata.title}`}
          meta={[
            { name: "description", content: description },
            { name: "keywords", content: keywords },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: data.site.siteMetadata.author },
            { name: "twitter:title", content: pageTitle },
            { name: "twitter:description", content: description },
            { property: "og:title", content: pageTitle },
            { property: "og:description", content: description },
            { property: "og:type", content: "website" },
            { property: "og:url", content: data.site.siteMetadata.siteUrl },
            {
              property: "og:image",
              content: `${data.site.siteMetadata.siteUrl}${ogImage}`
            },
            { property: "og:image:alt", content: description },
            { property: "og:image:type", content: "image/jpg" },
            { property: "og:image:width", content: "960" },
            { property: "og:image:height", content: "768" }
          ].concat(meta)}
        />
      )}
    ></StaticQuery>
  );
}

SEO.propTypes = {
  pageTitle: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
};

SEO.defaultProps = {
  pageTitle: null,
  description: "",
  keywords: "",
  meta: []
};
