// import { Inter } from 'next/font/google'
import Booking from '@/components/booking'
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
          Thailand means the land of freedom.
        </p>
        DINE-IN OR TAKE AWAY 01304 367 707 (click/tap to phone) 114 HIGH STREET
        CT14 6BB, DEAL, KENT, UK
        <div>20% discount on all take-aways</div>
        <aside itemscope itemtype="http://schema.org/LocalBusiness">
          {/* <time itemprop="openingHours" datetime="Tu-Su 17:30-23:00" */}
          <span itemprop="openingHours" content="Tu,We,Th,Fr,Sa,Su 17:30-23:00">
            17:30-23:00 Tuesdays to Sundays
          </span>
          <div>Closed on Mondays</div>
        </aside>
        {/* style="width:100%;height:700px" */}
      </div>
      <Booking />
    </>
  )
}
