import { Link } from "react-router-dom"

function BlogList() {
  return (
    <>
      <h1>My Blogs</h1>
      <Link to="/blog/html">HTML</Link> <br />
      <Link to="/blog/css">CSS</Link> <br />
      <Link to="/blog/js">JS</Link> <br />
    </>
  )
}

export default BlogList