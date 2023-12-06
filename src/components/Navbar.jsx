import { NavLink } from "react-router-dom"
import logo from '../img/logo zerkalo-01.png';

const Navbar = () => {
  return (
    <header className="header flex -rotate-90 inset-y-0 left-0 -translate-x-[85%]">

      <nav className="grid grid-cols-6 gap-4 text-center font-jura font-medium text-xl">
        <NavLink to="/bio" className={({ isActive }) => isActive ? 'bg-black text-white p-2' : 'text-black hover:bg-red-500 hover:text-white p-2'}>
        BIO
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'bg-black text-white p-2' : 'text-black hover:bg-red-500 hover:text-white p-2'}>
        PORTFOLIO
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'bg-black text-white p-2' : 'text-black hover:bg-red-500 hover:text-white p-2'}>
        BLOG
        </NavLink>
        <NavLink><span></span></NavLink>
        <NavLink><span></span></NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-black text-white p-2' : 'text-black hover:bg-red-500 hover:text-white p-2'}>
        CONTACT
        </NavLink>
      </nav>

      <NavLink to="/" className="rotate-90 w-10 h-10 rounded-lg bg-white items-center justify-center flex shadow-md">
      <img src={logo} alt="Logo" className="w-full h-full object-cover" />
    </NavLink>

    </header>
  )
}

export default Navbar