/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        borderTop: `solid 1px black`
      }}
    >
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            marginTop: 10,
            minWidth: 100,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          Witaj na moim blogu. Nazywam się <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          Chcesz dowiedzieć się o mnie czegoś więcej? Zapraszam do sekcji <Link to="/omnie">O mnie</Link>
           oraz na moje media społecznościowe <a href={`https://twitter.com/${social?.twitter || ``}`}>
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
