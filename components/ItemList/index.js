import { Stack } from "@chakra-ui/react"
import Item from "@components/Item"

const ItemList = ({ list }) => {
  return (
    <Stack spacing="24px">
      {list.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </Stack>
  )
}

export default ItemList
