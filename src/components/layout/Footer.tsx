export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-16 mt-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-24 max-w-[1600px] mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-bold text-primary-container tracking-tighter">CineStream</div>
          <p className="text-secondary text-sm leading-relaxed">
            The ultimate destination for premium cinema experiences.
          </p>
          <div className="flex space-x-4">
            <a className="text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a className="text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="text-secondary hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-on-surface text-xs font-black uppercase tracking-[.2em]">Navigation</h5>
          <ul className="space-y-3 text-sm">
            <li><a className="text-secondary hover:text-primary transition-colors" href="#">Movies</a></li>
            <li><a className="text-secondary hover:text-primary transition-colors" href="#">Cinemas</a></li>
            <li><a className="text-secondary hover:text-primary transition-colors" href="#">Offers</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-on-surface text-xs font-black uppercase tracking-[.2em]">Support</h5>
          <ul className="space-y-3 text-sm">
            <li><a className="text-secondary hover:text-primary transition-colors" href="#">Help Center</a></li>
            <li><a className="text-secondary hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-on-surface text-xs font-black uppercase tracking-[.2em]">Newsletter</h5>
          <div className="flex gap-2">
            <input
              className="bg-surface-container border border-white/5 rounded-lg px-3 py-2 w-full text-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary-container text-on-primary-container px-3 rounded-lg hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-24 max-w-[1600px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-secondary text-[11px]">© 2024 CineStream. All rights reserved.</p>
        <div className="flex space-x-6 text-secondary text-[11px]">
          <a className="hover:text-on-surface" href="#">Cookies</a>
          <a className="hover:text-on-surface" href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}
