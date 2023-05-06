import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import Image from 'next/image'

const Layout = ({ children }) => {
  const path = useRouter().pathname
  return (
    <>
      {/* {path} */}
      <div
        className={`bg-purple-200 flex flex-col min-h-screen justify-between
        ${path === '/' && 'bg_hom'}
      `}
      >
        <Navbar />
        <div className="flex flex-col mb-auto p-4">
          <main>{children}</main>
        </div>

        {path === '/' && <Image src="/veg1.jpg" fill={true} style={imgCover} />}
        {path === '/main-menu' && (
          <Image src="/dish-idea2.jpg" fill={true} style={imgCover} />
        )}

        <Footer />
      </div>
    </>
  )
}

export default Layout

const imgCover = {
  objectFit: 'cover',
  zIndex: 0,
}
