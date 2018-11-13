import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import PostTitleByline from "../PostTitleByline";
import styles from './listing.module.scss';

const LISTING_QUERY = graphql`query BlogPostListing {
    allMarkdownRemark(limit:20, sort: {
      order: DESC
      fields: [frontmatter___date]
    }) {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
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
                    <PostTitleByline post={node} />
                    <p>{node.excerpt}</p>
                    <Link to={`/posts${node.frontmatter.slug}`} className={styles.readMoreLink}>Read More...</Link>
                </article>
            ))
        )}
    />
)


export default Listing;
