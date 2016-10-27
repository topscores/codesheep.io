import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import { config } from 'config'

const Page = ({ post }) => (
  <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
    <div className="markdown">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      <hr style={{ marginBottom: rhythm(2) }} />
      <div>
        <img
          src={prefixLink('/images/sheep.png')}
          style={{
            border: '1px solid #fff',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.125)',
            float: 'left',
            marginTop: rhythm(1 / 3),
            width: rhythm(2.5),
          }}
        />
        <p style={{ marginLeft: rhythm(9 / 4) }}>
          CodeSheep.io <a href="https://twitter.com/codesheepio">Find @codesheepio on Twitter</a>
        </p>
      </div>
    </div>
  </DocumentTitle>
)

Page.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Page
