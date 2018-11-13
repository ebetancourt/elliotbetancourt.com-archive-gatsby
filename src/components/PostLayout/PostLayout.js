import React, { Component } from 'react'
import { graphql } from 'gatsby';

import PostTitleByline from "../PostTitleByline";
import Layout from '../Layout';

export default class PostLayout extends Component {
  render() {
      const { markdownRemark } = this.props.data;
      const { location } = this.props

      return (
        <Layout location={location}>
            <PostTitleByline post={markdownRemark} />
            <div dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
            }}/>
        </Layout>
      )
  }
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
        slug : {
            eq: $slug
        }
        }) {
        id,
        frontmatter {
            slug
            posttype
            date(formatString: "MMMM DD, YYYY")
            title
        }
        html
        }
  }`