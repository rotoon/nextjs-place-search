import React, { useState, useContext, createContext } from "react"

const initialList = [
  {
    image:
      "https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg",
    imageAlt: "image",
    name: "Title 1",
    formatted_address:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image:
      "https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg",
    imageAlt: "image",
    name: "Title 2",
    formatted_address:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image:
      "https://creativeclickmedia.com/wp-content/uploads/2018/04/wireframe-box-270x203.jpg",
    imageAlt: "image",
    name: "Title 3",
    formatted_address:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

const PlaceContext = createContext({
  setPlace: () => {},
})

const PlaceProvider = ({ children }) => {
  const [places, setPlace] = useState(initialList)

  const { Provider } = PlaceContext

  const value = {
    places,
    setPlace,
  }

  return <Provider value={value}>{children}</Provider>
}

const usePlaceContext = () => useContext(PlaceContext)

export { PlaceProvider, PlaceContext, usePlaceContext }
