import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [hidden, setHidden] = useState(true)
  const toggleMenu = () => setHidden(!hidden)

  useEffect(() => {
    window.addEventListener('scroll', toggleMenu)
    window.addEventListener('resize', toggleMenu)
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
      <nav className="z-50 flex flex-col">
        <div className="bg-slate-100">
          <button onClick={toggleMenu}>toggleMenu</button>
        </div>
        <ul
          className={`flex flex-col justify-around items-center md:flex-row z-40
          ${hidden && 'hidden'}
        `}
          onClick={toggleMenu}
        >
          {links.map(link => (
            <li
              key={link.to}
              className="tracking-wide md:tracking-tight sm:text-blue-30 transition-all
              md:px-2 bg-slate-100 w-full text-center flex
              "
            >
              <Link className="w-full hover:bg-slate-200 " href={link.to}>
                {link.page.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
