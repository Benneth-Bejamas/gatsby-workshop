import React from "react"
import styles from "./blogpost.module.css"
export default function BlogPost({ title, date, excerpt }) {
  return (
    <article className={styles.blog}>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}
