import React from "react"
import BlogPost from "./BlogPost/BlogPost"
import { useStaticQuery, graphql } from "gatsby"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            excerpt
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
