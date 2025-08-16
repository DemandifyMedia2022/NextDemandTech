import { groq } from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{
      name,
      image
    }
  }
`

export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    body,
    author->{
      name,
      image,
      bio
    }
  }
`

export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    industry,
    description,
    results,
    mainImage
  }
`

export const singleCaseStudyQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    industry,
    description,
    results,
    mainImage,
    body
  }
`

export const allResourcesQuery = groq`
  *[_type == "resource"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    type,
    description,
    coverImage,
    file
  }
`