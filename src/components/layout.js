import React from "react"
import Footer from "../components/footer"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(1.5),
              marginTop: 0,
              marginBottom: rhythm(0.5),

            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <h4 
            style={{
              marginTop: 0,
              marginBottom: rhythm(0.5),
            }}
          >
            stuff to help you land a dev job
          </h4>
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
              textDecoration: `none`,
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
      <div style={{
        width: '100%', height: location.pathname === rootPath ? '100vh' : '100%', backgroundColor: 'darkgrey'
      }}>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(27),
            padding: `${rhythm(1.5)} ${rhythm(3)}`,
            backgroundColor: '#f1f1f1'
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
