import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ resources }) {
  return (
    <>
      <Head>
        <title>NextJS</title>
      </Head>
      <div>
        <h1>welcome</h1>
      </div>
    </>
  )
}
