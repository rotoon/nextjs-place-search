import { Box } from "@chakra-ui/react"

import Topbar from "@components/Topbar"
import Footer from "@components/Footer"
import Body from "@components/Body"

export default function Layout({ children }) {
  return (
    <Box minH="100vh" bg="gray.100">
      <Topbar />
      <Body>{children}</Body>
      <Footer />
    </Box>
  )
}
