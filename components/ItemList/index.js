import { Stack } from "@chakra-ui/react"
import Item from "@components/Item"

const ItemList = ({ list }) => {
  if (list.length === 0) {
    return (
      <Stack spacing="24px" justify="center">
        <Item />
      </Stack>
    )
  }
  return (
    <Stack spacing="24px" justify="center">
      {list.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </Stack>
  )
}

export default ItemList
