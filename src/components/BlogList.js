import React from "react"
import BlogPost from "./BlogPost/BlogPost"
import { useStaticQuery, graphql } from "gatsby"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            excerpt
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <div>
        {data.allMarkdownRemark.edges.map(edge => (
          <BlogPost
            key={edge.node.id}
            slug={edge.node.fields.slug}
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            excerpt={edge.node.excerpt}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogList
