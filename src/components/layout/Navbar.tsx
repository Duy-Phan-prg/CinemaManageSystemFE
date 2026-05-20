import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed z-50 left-1/2 -translate-x-1/2 flex justify-between items-center px-6 md:px-8 transition-all duration-500 ${
        scrolled
          ? 'top-0 w-full max-w-full rounded-none bg-[rgba(19,19,19,0.95)] border-b border-white/10 py-2'
          : 'top-4 w-[calc(100%-2rem)] max-w-[1200px] rounded-full md:rounded-2xl bg-transparent py-3'
      }`}
    >
      <div className="text-xl font-bold text-primary-container tracking-tighter">CineStream</div>

      <div className="hidden md:flex items-center space-x-8">
        <a className="text-primary font-bold text-sm uppercase tracking-widest" href="#">Movies</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors text-sm font-semibold uppercase tracking-widest" href="#">Cinemas</a>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors text-sm font-semibold uppercase tracking-widest" href="#">Offers</a>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-on-surface-variant hover:text-on-surface transition-all duration-300">
          <span className="material-symbols-outlined text-xl">search</span>
        </button>
        <Link
          to="/login"
          className="bg-primary text-on-primary-fixed px-4 py-1.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
        >
          Log In
        </Link>
      </div>
    </nav>
  )
}
