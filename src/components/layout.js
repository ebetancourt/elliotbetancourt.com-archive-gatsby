import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import styles from './layout.module.scss';

const Layout = ({ children, location, hasCover }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            tagLine
          }
        }
        file(relativePath: {
          regex: "/bg/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
          bodyAttributes={{
            "class": hasCover ? 'has-cover' : 'no-cover',
          }}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.coverSheet} />
        <div className={styles.fakeBg}>
          <main className={styles.mainLayout}>
            <div>
              {children}
            </div>
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasCover: PropTypes.bool,
}

Layout.defaultProps = {
  location: {},
  hasCover: true,
}

export default Layout
