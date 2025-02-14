import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-12 h-10 p-2 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">B23r</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-black'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
export default NavBar;
