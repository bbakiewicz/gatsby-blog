import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
      signature: file(absolutePath: { regex: "/aga-korpal-podpis.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const backgroundImage = data.background.childImageSharp.fluid
  const signature = data.signature.childImageSharp.fluid

  if (location.pathname === rootPath) {
    header = (
      <div
        style={{
          height: `50vh`,
        }}
      >
        <Image
          fluid={backgroundImage}
          style={{
            position: `absolute`,
            top: `0`,
            left: `0`,
            width: `100%`,
            height: `auto`,
            zIndex: `-1`,
          }}
        />
        <div
          style={{
            marginTop: `50%`,
            transform: `translateY(-50%)`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`
          }}
        >
          <h1
            style={{
              ...scale(1.5),
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
                textDecoration: `none`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Image
            fluid={signature}
            style={{
              width: `400px`,
              margin: `0 auto`
            }}
          />
        </div>
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
      <main style={{ paddingTop: `20vh` }}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.bazymazy.pl">Bazy Mazy</a>
      </footer>
    </div>
  )
}

export default Layout
