/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

import { usePlace } from "@hooks/index"

function debounce(callback, delay = 250) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

const SearchBar = () => {
  const { getPlace } = usePlace()

  const handleChange = (e) => {
    debounceValue(e.target.value)
  }

  const debounceValue = debounce((query) => getPlace(query))

  return (
    <FormControl>
      <FormLabel>ค้นหาร้านอาหาร</FormLabel>
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="ค้นหาร้านอาหาร"
          onChange={handleChange}
        />
      </InputGroup>
    </FormControl>
  )
}

export default SearchBar
