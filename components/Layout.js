import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-purple-200 flex flex-col min-h-screen justify-between">
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
