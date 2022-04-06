/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

const SearchBar = () => (
  <FormControl>
    <FormLabel>Search</FormLabel>
    <InputGroup>
      <InputRightElement
        pointerEvents="none"
        children={<Search2Icon color="gray.300" />}
      />
      <Input type="text" placeholder="Search" />
    </InputGroup>
  </FormControl>
)

export default SearchBar
