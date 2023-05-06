import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'
import Image from 'next/image'

const Layout = ({ children }) => {
  const path = useRouter().pathname
  return (
    <>
      <div
        className={`bg-purple-20 mb-auto flex flex-col min-h-screen justify-between pageBg
        ${path === '/' && "bg-[url('/veg1.webp')] bg-bottom"}
        ${path === '/main-menu' && "bg-[url('/dish-idea2.webp')] "}
        ${path === '/set-menus' && "bg-[url('/veg1.webp')] "}
        ${path === '/drinks' && "bg-[url('/wine3.webp')] "}
        ${path === '/locate-us' && "bg-[url('/veg1.webp')] bg-left"}
        ${path === '/contact-us' && "bg-[url('/veg1.webp')] bg-bottom"}
      `}
      >
        <Navbar />
        <div className="flex flex-col mb-auto sm:p-4 z-30 md:w-11/12 lg:w-3/4 place-self-center">
          <main>{children}</main>
        </div>
        {/* <Image src="/wine3.jpg"  fill="true" /> */}
        <Footer />
      </div>
    </>
  )
}

export default Layout
