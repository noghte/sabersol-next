import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/contact.mdx"
import Container from "../ui/Container"

const Contact = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default Contact
