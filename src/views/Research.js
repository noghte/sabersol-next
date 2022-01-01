import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/research.mdx"
import Container from "../ui/Container"

const Research = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default Research
