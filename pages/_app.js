import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@layout/index"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next JS + Place search | Place API (by Google) </title>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
