import { useRouter } from "next/router"
import { Box } from "theme-ui"
import NavLink from "./NavLink"

const Nav = (props) => {
  const router = useRouter()
  return (
    <Box
      as="nav"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <NavLink href="/" active={router.pathname === "/" || router.pathname.includes("/blog")}>
        Home
      </NavLink>

      <NavLink href="/teaching" active={router.pathname === "/teaching"}>
        Teaching
      </NavLink>

      <NavLink href="/research" active={router.pathname === "/research"}>
        Projects
      </NavLink>

      <NavLink href="/about" active={router.pathname === "/about"}>
        About
      </NavLink>
      
      <NavLink href="/contact" active={router.pathname === "/contact"}>
        Contact
      </NavLink>

    </Box>
  )
}

export default Nav
