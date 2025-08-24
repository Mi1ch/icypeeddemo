import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Customer from './pages/Customer'
import Driver from './pages/Driver'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <footer className="mt-auto py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Icypeed — Demo UI
      </footer>
    </div>
  )
}
