import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/teaching.mdx"
import Container from "../ui/Container"

const Teaching = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default Teaching
