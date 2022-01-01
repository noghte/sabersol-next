import Wrapper from "../src/layout/Wrapper"
import Research from "../src/views/Research"
import config from "../blog.config.js"

const ResearchPage = () => (
  <Wrapper
    url={config.url + "research"}
    title={config.title + " | Research"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Research />
  </Wrapper>
)

export default ResearchPage
