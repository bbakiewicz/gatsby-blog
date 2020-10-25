import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
  query {
    background: file(absolutePath: { regex: "/aga-k-tlo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const backgroundImage = data.background.childImageSharp.fluid

  if (location.pathname === rootPath) {
    header = (
      <div
        style={{
          height: `100vh`,
        }}>
        <Image 
          fluid={backgroundImage}
          style={{
            position: `absolute`,
            top: `0`,
            left: `0`,
            width: `100%`,
            height: `auto`,
            zIndex: `-1`,
          }} />
        <h1
          style={{
            ...scale(1.5),
            
            marginTop: `50%`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(34),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout