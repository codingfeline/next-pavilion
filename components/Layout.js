import Footer from './Footer'
import Navbar from './Navbar'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Layout = ({ children }) => {
  const path = usePathname()
  return (
    <>
      <div
        className={`bg-purple-20 mb-auto flex flex-col min-h-screen justify-between pageBg
        ${path === '/' && "bg-[url('/veg1.webp')] bg-bottom"}
        ${path === '/main-menu' && "bg-[url('/dish-idea2.webp')] "}
        ${path === '/set-menus' && "bg-[url('/veg1.webp')] "}
        ${path === '/drinks' && "bg-[url('/wine3.webp')] bg-left"}
        ${path === '/locate-us' && "bg-[url('/veg1.webp')] bg-left"}
        ${path === '/contact-us' && "bg-[url('/veg1.webp')] bg-bottom"}
      `}
      >
        <Navbar />
        {/* grow is required twice below for the child div to grow */}
        <div className="flex flex-col mb-auto sm:p-4 z-30 md:w-11/12 lg:w-3/4 md:place-self-center grow ">
          <main className="grid grow flex-col ">{children}</main>
        </div>
        {/* <Image src="/wine3.jpg"  fill="true" /> */}
        <div className="commonImages transition py-2 flex gap-5 justify-center items-center w-full lg:gap-4 ">
          <Image src="/dish01.jpg" width="180" height="150" alt="dish 1" />
          <Image src="/dish02.jpg" width="180" height="150" alt="dish 1" />
          <Image
            src="/dish03.jpg"
            width="180"
            height="150"
            className="hidden md:flex"
            alt="dish 3"
          />
          <Image
            src="/dish04.jpg"
            width="180"
            height="150"
            className="hidden md:flex"
            alt="dish 4"
          />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
