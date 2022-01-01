import Wrapper from "../src/layout/Wrapper"
import Contact from "../src/views/Contact"
import config from "../blog.config.js"

const ContactPage = () => (
  <Wrapper
    url={config.url + "contact"}
    title={config.title + " | ContactPage"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Contact />
  </Wrapper>
)

export default ContactPage
