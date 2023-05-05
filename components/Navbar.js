import Link from 'next/link'

const Navbar = () => {
  const links = [
    { to: '/', page: 'Home' },
    { to: '/main-menu', page: 'Main Menu' },
    { to: '/set-menus', page: 'set menus' },
    { to: '/drinks', page: 'drinks' },
    { to: '/locate-us', page: 'locate us' },
    { to: '/contact-us', page: 'contact us' },
  ]

  return (
    <div>
      <nav>
        <ul className="flex flex-col justify-end items-center md:flex-row ">
          {links.map(link => (
            <li
              key={link.to}
              className="tracking-wide md:tracking-tight sm:text-blue-30 transition-all
              md:px-2
              "
            >
              <Link className="hover:bg-slate-100 " href={link.to}>
                {link.page.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
