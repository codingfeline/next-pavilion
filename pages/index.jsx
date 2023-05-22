// import { Inter } from 'next/font/google'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ resources }) {
  return (
    <>
      {/* <Head></Head> */}
      <div className="bg-green-100 sm:rounded-lg p-3 opacity-90 flex flex-col ">
        <h1>Authentic Thai Cuisine</h1>
        <p>
          Thailand, the land of smiles and its unique cuisine is the Buddhist
          land in South East Asia, the country which is formerly known as Siam
          has been renamed Thailand since 1939 in the era of King Rama VIII.
          Thailand means
        </p>
        <p>
          the land of freedom. The Thais are proud of their country, which has
          never been a colony of any country. The capital city of Thailand is
          Bangkok.
        </p>
        DINE-IN OR TAKE AWAY 01304 367 707 (click/tap to phone) 114 HIGH STREET
        CT14 6BB, DEAL, KENT, UK 20% discount on all take-aways 17:30-23:00
        Tuesdays to Sundays Closed on Mondays
        {/* style="width:100%;height:700px" */}
      </div>
      <div align="center" classname="widgetContainer">
        <iframe
          src="https://svtables.com/widget/?rest_id=403"
          className="w-full rounded-xl mt-2"
          height="680px"
        ></iframe>
      </div>
    </>
  )
}
