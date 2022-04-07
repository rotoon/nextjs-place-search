import { Heading, Flex, Box } from "@chakra-ui/react"
import Logo from "@components/Logo"
import SearchBar from "@components/SearchBar"

export default function Topbar({ ...rest }) {
  return (
    <Flex
      px={{ base: 0, md: 4 }}
      position="sticky"
      top="0"
      zIndex="1"
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      borderWidth="1px"
      flexDirection={{ base: "column", md: "row" }}
      {...rest}
    >
      <Box w={{ base: "full", md: "auto" }} display="flex" alignItems="center">
        <Logo />
        <Heading as="h1" size="lg">
          ค้นหาร้านอาหาร
        </Heading>
      </Box>
      <Box w={{ base: "full", md: "450px" }} p="4">
        <SearchBar />
      </Box>
    </Flex>
  )
}
