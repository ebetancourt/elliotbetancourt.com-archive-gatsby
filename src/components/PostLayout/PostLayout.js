import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Layout from '../Layout';

export default class PostLayout extends Component {
  render() {
      const { markdownRemark } = this.props.data;
      const { location } = this.props

      return (
        <Layout location={location}>
            <h1 dangerouslySetInnerHTML={{__html: markdownRemark.frontmatter.title}} />
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
            date
            title
        }
        html
        }
  }`