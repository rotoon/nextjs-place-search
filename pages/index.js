import { useState } from "react"
import { Container } from "@chakra-ui/react"
import ItemList from "@components/ItemList"

const initialList = [
  {
    imageUrl:
      "https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg",
    imageAlt: "alt",
    title: "Title 1",
    subtitle:
      "Some default text to fill some space, and something more so there is more text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imageUrl:
      "https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg",
    imageAlt: "alt",
    title: "Title 2",
    subtitle:
      "Some default text to fill some space, and something more so there is more text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    imageUrl:
      "https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg",
    imageAlt: "alt",
    title: "Title 3",
    subtitle:
      "Some default text to fill some space, and something more so there is more text",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

const Home = () => {
  const [list, setList] = useState(initialList)
  return (
    <Container maxW="container.xl" centerContent>
      <ItemList list={list} />
    </Container>
  )
}

export default Home
