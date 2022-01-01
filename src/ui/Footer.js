import { Box, Text } from "theme-ui"

const Footer = (props) => (
  <Box
    sx={{
      p: 4,
      color: "#666",
      textAlign: "center",
      fontSize: 1,
    }}
  >

    <Text sx={{ mx: 3, display: "inline-block" }}>
      Source available on {" "}
      <a href="https://github.com/noghte/sabersol-next">
        noghte/sabersol-next
      </a>
    </Text>
    <br />
    <Text>
      (modified version of  {" "}
      <a href="https://github.com/johnpolacek/nextjs-mdx-blog-starter">
        johnpolacek/nextjs-mdx-blog-starter
      </a>)
    </Text>
    
    <div>
      <a href="https://nextjs.org">
      <img src="/img/next-logo.png" alt="Next JS" style={{width: '2rem'}} />
      </a>
      <a href="https://theme-ui.com/">
        <img src="/img/theme-ui-logo.png" alt="Theme UI" style={{width: '2rem'}} />
      </a>
    </div>
  </Box>
)

export default Footer
