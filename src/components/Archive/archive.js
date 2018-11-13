import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import styles from './archive.module.scss';

const POST_ARCHIVE_QUERY = graphql`
      query BlogPostArchive {
        allMarkdownRemark(limit:5, sort: {
          order: DESC
          fields: [frontmatter___date]
        }) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                posttype
                slug
              }
            }
          }
        }
      }`;

const Archive = ({ children }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <aside>
        <h3>Archive</h3>
        <ul className={styles.archiveList}>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    )}
  />
)

export default Archive
