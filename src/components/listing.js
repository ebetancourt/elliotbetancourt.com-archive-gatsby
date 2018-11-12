import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

// import Image from '../components/image'
import styles from './listing.module.scss';

const LISTING_QUERY = graphql`query BlogPostListing {
    allMarkdownRemark(limit:10, sort: {
      order: DESC
      fields: [frontmatter___date]
    }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            posttype
            slug
          }
        }
      }
    }
    }`

const Listing = () => (
    <StaticQuery 
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                <article key={node.id} className={styles.post}>
                    <Link to={`/posts${node.frontmatter.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <h3 className={styles.postLetter}>{node.frontmatter.title.slice(0, 1)}</h3>
                    <p className={styles.postMeta}>
                        {node.frontmatter.date}
                    </p>
                    <p>{node.excerpt}</p>
                    <Link to={`/posts${node.frontmatter.slug}`} className={styles.readMoreLink}>Read More...</Link>
                </article>
            ))
        )}
    />
)


export default Listing;
