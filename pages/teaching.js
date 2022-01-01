import Wrapper from "../src/layout/Wrapper"
import Teaching from "../src/views/Teaching"
import config from "../blog.config.js"

const TeachingPage = () => (
  <Wrapper
    url={config.url + "teaching"}
    title={config.title + " | Teaching"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Teaching />
  </Wrapper>
)

export default TeachingPage
