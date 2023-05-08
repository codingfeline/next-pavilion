import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bangkok Pavilion | Thai Restaurant in Deal, Kent, UK</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
