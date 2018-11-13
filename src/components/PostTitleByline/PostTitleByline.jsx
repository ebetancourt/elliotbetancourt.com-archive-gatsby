import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'gatsby'

import styles from './PostTitleByline.module.scss';

const PostTitleByline = ({post}) => {
  return (
    <div className={styles.wrapperDiv}>
      <Link to={`/posts${post.frontmatter.slug}`}>
          <h2 dangerouslySetInnerHTML={{__html:post.frontmatter.title}} />
      </Link>
      <h3 className={styles.postLetter}>{post.frontmatter.title.slice(0, 1)}</h3>
      <p className={styles.postMeta}>
          {post.timeToRead} Min to Read&nbsp;&nbsp;/&nbsp;&nbsp;By: Elliot Betancourt&nbsp;&nbsp;/&nbsp;&nbsp;{post.frontmatter.date}
      </p>
    </div>
  )
};

PostTitleByline.propTypes = {
  post: PropTypes.shape({
    timeToRead: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  })
}

PostTitleByline.defaultProps = {}

export default PostTitleByline;