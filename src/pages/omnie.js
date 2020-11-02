import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutAuthor = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  

 

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      
      
      <Bio />
    </Layout>
  )
}

export default AboutAuthor


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
