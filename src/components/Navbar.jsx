import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-2xl text-sm font-medium transition ${
          isActive
            ? 'bg-icypeed-blue/10 text-icypeed-blue'
            : 'text-slate-600 hover:bg-slate-100 hover:text-icypeed-blue'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-8 w-auto" alt="Icypeed logo" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-icypeed-blue">ICY</span>
            <span className="text-icypeed-red">PEED</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavItem to="/" label="Overview" />
          <NavItem to="/customer" label="Customer App" />
          <NavItem to="/driver" label="Driver App" />
          <NavItem to="/admin" label="Admin" />
        </nav>
      </div>
    </header>
  )
}
