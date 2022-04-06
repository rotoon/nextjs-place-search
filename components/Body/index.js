import { Container } from "@chakra-ui/react"

export default function Footer({ children }) {
  return (
    <Container maxW="container.xl" p="4" minH="80vh">
      {children}
    </Container>
  )
}
