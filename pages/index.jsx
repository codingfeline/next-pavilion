// import { Inter } from 'next/font/google'
import Booking from '@/components/booking'
import Head from 'next/head'
import Link from 'next/link'
import { FaMap, FaMapPin, FaPhone } from 'react-icons/fa'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ resources }) {
  return (
    <>
      {/* <Head></Head> */}
      <div className="bg-green-100 sm:rounded-lg p-3 opacity-90 flex flex-col md:w-4/5 lg:w-5/6 place-self-center items-center">
        <h1>Authentic Thai Cuisine</h1>
        <main className="flex flex-col justify-between gap-6">
          <p>
            Thailand, the land of smiles and its unique cuisine is the Buddhist
            land in South East Asia, the country which is formerly known as Siam
            has been renamed Thailand since 1939 in the era of King Rama VIII.
            Thailand means the land of freedom.
          </p>
          <section className="relative">
            <h2>DINE-IN OR TAKE AWAY</h2>
            <div className="lg:absolute lg:-right-20 xl:right-0 text-orange-500 origin-bottom lg:-rotate-6">
              <div className="text-4xl">20% discount</div>
              <i>on all take-aways</i>
            </div>
            <p className="text-3xl mb-3">
              <a href="tel:01304367707">
                <FaPhone className="inline mr-2" />
                01304 367 707
              </a>
              <span className="text-base">(click/tap to phone)</span>
            </p>
            <Link href="/locate-us">
              <FaMap className="text-lg float-left mr-2 " />
              <address>114 HIGH STREET CT14 6BB, DEAL, KENT, UK</address>
            </Link>
          </section>
          <aside itemscope itemtype="http://schema.org/LocalBusiness">
            {/* <time itemprop="openingHours" datetime="Tu-Su 17:30-23:00" */}
            <span
              itemprop="openingHours"
              content="Tu,We,Th,Fr,Sa,Su 17:30-23:00"
            >
              17:30-23:00 Tuesdays to Sundays
            </span>
            <div>Closed on Mondays</div>
          </aside>
        </main>
        {/* style="width:100%;height:700px" */}
      </div>
      <Booking />
    </>
  )
}
