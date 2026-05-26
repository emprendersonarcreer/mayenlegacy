import { groq } from "next-sanity";

// Blog post card fields (for listing pages)
export const postCardFields = groq`
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  tags,
  mainImage {
    asset->{_id, url},
    alt
  }
`;

// All posts for a given brand + language
export const postsByBrandQuery = groq`
  *[_type == "blogPost" && brand == $brand && language == $language && defined(slug.current)]
  | order(publishedAt desc) {
    ${postCardFields}
  }
`;

// Single post by slug + brand
export const postBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && brand == $brand][0] {
    ${postCardFields},
    language,
    body
  }
`;

// All slugs for a brand (for generateStaticParams)
export const slugsByBrandQuery = groq`
  *[_type == "blogPost" && brand == $brand && defined(slug.current)] {
    slug,
    language
  }
`;
