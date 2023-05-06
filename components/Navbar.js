import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [hidden, setHidden] = useState(true)
  const toggleMenu = () => setHidden(!hidden)
  const collapse = () => setHidden(true)

  useEffect(() => {
    window.addEventListener('scroll', collapse)
    window.addEventListener('resize', collapse)
  }, [])

  const links = [
    { to: '/', page: 'Home' },
    { to: '/main-menu', page: 'Main Menu' },
    { to: '/set-menus', page: 'set menus' },
    { to: '/drinks', page: 'drinks' },
    { to: '/locate-us', page: 'locate us' },
    { to: '/contact-us', page: 'contact us' },
  ]

  return (
    <>
      <nav className="z-10 flex flex-col">
        <div className="bg-slate-100">
          <button onClick={toggleMenu}>toggleMenu</button>
        </div>
        <div
          className={`duration-300 sm:static absolute bg-blue-100 sm:min-h-fit min-h-[100vh] left-0  sm:w-auto  w-full flex items-center justify-center sm:justify-end z-50 
      ${!hidden ? 'top-[0%]' : 'top-[-100%]'}
      `}
          onClick={collapse}
        >
          <ul className="flex flex-col justify-center items-center sm:flex-row sm:justify-around  bg-indigo-200 w-full h-full">
            {links.map(link => (
              <li key={link.to} className="nav-li">
                <Link onClick={collapse} href={link.to} className="nav-a">
                  {link.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
