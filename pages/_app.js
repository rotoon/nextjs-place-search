import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"

import { PlaceProvider } from "@context/index"
import Layout from "@layout/index"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next JS + Place search | Place API (by Google) </title>
      </Head>
      <ChakraProvider>
        <PlaceProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PlaceProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
