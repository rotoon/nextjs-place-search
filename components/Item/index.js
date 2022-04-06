import { Box, Image, Stack, Heading, Text } from "@chakra-ui/react"
const Item = ({ data }) => {
  return (
    <Box>
      <Stack direction={{ base: "column", md: "row" }}>
        <Image src={data.imageUrl} alt={data.imageAlt} boxSize="150px" />
        <Box px={{ base: 0, md: 6 }}>
          <Heading as="h4" size="md" p="1">
            {data.title}
          </Heading>
          <Heading fontWeight="semibold" as="h5" size="sm">
            {data.subtitle}
          </Heading>
          <Text as="p" size="sm">
            {data.text}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default Item
