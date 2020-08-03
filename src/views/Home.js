import { Flex, Box, Heading, Text } from "theme-ui"
import Link from "next/link"

const Home = ({ posts, prevPosts, nextPosts }) => (
  <Box
    id="home"
    sx={{
      py: 5,
      px: 3,
      maxWidth: "800px",
      mx: "auto",
    }}
  >
    {posts &&
      posts.map((post) => (
        <Box sx={{ pb: 5 }} key={post.slug}>
          <Heading>{post.title}</Heading>
          <Text sx={{ pb: 3 }}>{post.excerpt}</Text>
          <Link href={"/" + post.slug} passHref>
            <a>Read more...</a>
          </Link>
        </Box>
      ))}
    <Flex sx={{ fontStyle: "italic" }}>
      <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
        {prevPosts !== null && (
          <Link href={"/posts/" + prevPosts} passHref>
            <a>« see newer posts</a>
          </Link>
        )}
      </Box>
      <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
        {nextPosts !== null && (
          <Link href={"/posts/" + nextPosts} passHref>
            <a>see older posts »</a>
          </Link>
        )}
      </Box>
    </Flex>
  </Box>
)

export default Home
