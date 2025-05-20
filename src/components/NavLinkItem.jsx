import { NavLink } from 'react-router';

function NavLinkItem({ icon, label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center space-x-4 rounded-md px-2 py-3 transition-colors duration-200 
        ${
          isActive
            ? 'bg-slate-700/40 text-teal-400'
            : 'hover:bg-slate-700/40 hover:text-teal-400'
        }`
      }
    >
      <i className={`bx ${icon} text-2xl`}></i>
      <span>{label}</span>
    </NavLink>
  );
}

export default NavLinkItem;
