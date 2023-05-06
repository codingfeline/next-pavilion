import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import Image from 'next/image'

const Layout = ({ children }) => {
  const path = useRouter().pathname
  return (
    <>
      {' '}
      {path}
      <div
        className={`bg-purple-200 flex flex-col min-h-screen justify-between
        ${path === '/' && 'bg_hom'}
      `}
      >
        <Image src="/veg1.jpg" fill={true} objectFit={'cover'} />
        <Navbar />
        <div className="flex flex-col mb-auto p-4">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
