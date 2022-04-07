import { usePlaceContext } from "context"

export const usePlace = () => {
  const { places, setPlace } = usePlaceContext()

  const getPlace = async (text) => {
    if (text === "") {
      setPlace([])
      return
    }
    try {
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.NEXT_PUBLIC_API_KEY}&input=${text}&types=restaurant|food`
      const res = await fetch(url)
      const resJson = await res.json()

      if (resJson.status === "OK") {
        const data = resJson.results.map((item) => {
          let image = ""

          if ("photos" in item) {
            image = `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.NEXT_PUBLIC_API_KEY}&maxwidth=150&photoreference=${item.photos[0].photo_reference}`
          }

          return {
            formatted_address: item.formatted_address,
            name: item.name,
            image: image,
          }
        })
        setPlace(data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    getPlace,
    places,
  }
}
