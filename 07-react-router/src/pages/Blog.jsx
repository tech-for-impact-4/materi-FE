import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Blog() {
  const {title} = useParams()
  // title atau id, nanti bisa di gunakan 
  // utk fetch data per item, kemudian di tampilkan

  return (
    <>
      <h1>Blog Item {title}</h1>
    </>
  )
}

export default Blog