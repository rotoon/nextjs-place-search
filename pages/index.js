import { Box } from "@chakra-ui/react"

import { usePlace } from "hooks"
import ItemList from "@components/ItemList"

const Home = () => {
  const { places } = usePlace()

  return (
    <Box>
      <ItemList list={places} />
    </Box>
  )
}

export default Home
