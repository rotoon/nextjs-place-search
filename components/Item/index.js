import { Box, Image, Stack, Heading, Text, Flex } from "@chakra-ui/react"
const Item = ({ data }) => {
  const imageDefault = `https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg`

  if (!data) {
    return (
      <Stack direction={{ base: "column", md: "row" }} justify="center">
        <Image src={imageDefault} alt={"alt"} boxSize="150px" />
        <Flex px={{ base: 0, md: 6 }} alignItems="center">
          <Heading as="h1" size="xl" p="1">
            ไม่มีข้อมูล
          </Heading>
        </Flex>
      </Stack>
    )
  }
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Image
        src={data.image || imageDefault}
        alt={data.imageAlt}
        boxSize="150px"
      />
      <Box px={{ base: 0, md: 6 }}>
        <Heading as="h4" size="md" p="1">
          {data.name}
        </Heading>
        <Heading fontWeight="semibold" as="h5" size="sm">
          {data.subtitle}
        </Heading>
        <Text as="p" size="sm">
          {data.formatted_address}
        </Text>
      </Box>
    </Stack>
  )
}

export default Item
