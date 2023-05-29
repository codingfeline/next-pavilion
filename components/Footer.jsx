import Link from 'next/link'
import { FaMap } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="bg-slate-100 py-2 px-4 z-10 flex flex-col items-center sm:flex-row
    justify-between"
    >
      <span>&copy;{` ${new Date().getFullYear()}`} Bangkok Pavilion</span>
      <Link href="/locate-us" className="flex gap-2">
        <FaMap className="text-lg " />
        <address>114 HIGH STREET CT14 6BB, DEAL, KENT, UK</address>
      </Link>
    </footer>
  )
}

export default Footer
