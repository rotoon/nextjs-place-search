import { Flex, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Flex
      px="4"
      position="sticky"
      bottom="0"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="white"
    >
      <Text fontSize="xl" color="primary">
        Footer
      </Text>
    </Flex>
  )
}
