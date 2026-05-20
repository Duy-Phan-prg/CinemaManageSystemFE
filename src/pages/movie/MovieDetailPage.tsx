import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/layout/Footer'

const BACKDROP = 'https://lh3.googleusercontent.com/aida-public/AB6AXuApaSieiW5JwyMTOg92hdOnqo7cdGDi5B-wRX1Kg-mde5trcDniJsQ5LJwxgkxCvZdOCghcEquTVu-WSly4dWge96633CpQFo7arjUDP8QWo4kk004WeFxXH22tO4q0dE1G4zZGJT7kY2osBzsAGXOLBNWzLgO_e_YoRcGzybE996eVNiNF3DXnd_pL-AeH0LsGkJZeFKCPMp2ICdLETAzrOZ_WRgMiV6-mJ4Cq2VhstNnTsnYCukQ6aNrkD_nS1ujIWINvX2McWoo'
const POSTER = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBugXenSr0lC8gX9tHnVVRZx9pqdSLguqgLI3eYPFEzkXhLO5cZy6zmXkZ9w0Wll_dbVzfHTw-_gCgv-ogs_n5Bso5NCilBmnCHFdUbYUM_hrdxiU4tMvt7gq-g1d1XLj0nqQeKSAsOpA0PRxF8wuR0i-5DpZrrVbg6iAwbqVjMYWEdHl1mRMRW1BzLS-LR6tpnqKVrYEgPp3dPZ2g5KFPofDh5-gaUdio88jYf7nwWP-8VKWT15cu7mj2UnuvH-Q8twoSfJAYgGRE'
const TRAILER_THUMB = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSuLgSzEBH9wH2Mq2OBMupVqCmx9xYNQHcSxlTiHXDUUwRxvKwP68BQT7z_Q4lIrUcDY4s3BC3hbjFr0cylHTPZUK22DOc3M9dVUSRQwdxapNH9-Txt0CCgrUjJHHeHWIb7EsmLKWLelUp_YrxHPRd-fCutAD9ywJD7E34qgi7_AcwV1KMjhDHzl7s3jJjxpwgUb5mhEZfJcDgp8n8NiyJYpfQXcZ4giV7Pgg6F3_j8MpKFlOLM3HmFSVerM87e1YfG8Vm0U_ezhI'

const CAST = [
  { name: 'Matthew M.', role: 'Cooper', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8LzFtwTLSonZ96AuBO3h_oVzyRg5QzYVEP6sbT2NNumnk8UKQj37t3-xBjfQa5hxLjgWEQRQVCXdSoiRcQ5s086ueUpnTbrwEogI2LKHzPcewDa2f4egfmj6Wudp9FCiwpsGAoHDjRwsqJJCvJCv-Ieg1JQ663nZzwEeFQb7uFpNZPB-QVpGUM6OVBmkCS3r-gr2AFUdcrZV0QiNh3vNMc7BYetvjUjOiRcyGH0tBByvHm52gHq0zChCiyuEoOAd_xIILPnSJdA8' },
  { name: 'Anne Hathaway', role: 'Brand', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd6dFT0Cv_JvFIpr4KLZXuaMNEFk_1udro1YDBlDjY2dEIMOYFJkDBPIXsH0aT3IpkxCjhljAoSaM8S1blMDVsKM6RaeADRAbPqxEXsf8uZk4uEa49z6WIdW3l_C3BRAG_YO0V2cu0yFti83t7bkQnxee7urWXHMld-LNC8EGDLOXUmVF24OdcDq6lcd4gKEVSTmCU5MQ-Spfw3oxW1KBUmAyE4e3vVF6_6e3hSeSESoRU3Bpq-6vSs7tl9sX01ykTYOVeHOgxHd4' },
  { name: 'Michael Caine', role: 'Prof. Brand', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUpR1BwmyfG7MSWPxCQ-pRqZPYFj6yOMA7FXqexP8N80yGs76YfnzUwJaXFUbLWi4tvl6__YqeW2xi415rbIrujf4nL56Eg2sOSQeKzbOyZRFbAbBsgrZiJaoUaVHWGLxAc44S1sjbokYOS2ss0RHZ9wpdaTcPMg7wxJDPbBDK-WeqMaENN_29IX9OnzIWNsXH7WQQ5-36xe9eMaTrL660TS1ZSo4MpX5W4C7g8yuZESBD5pHYLtiVvG-mNgoWAzhhDHStPxMQAxE' },
  { name: 'Jessica C.', role: 'Murph', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMthgkNaPRSiBAd6uYG9ge2gnh4mbNdeWretoDeH6MD-3cHgH5wT4MRIK17rObAv4XkG0NKKkfSwFwsPsoXXdIBALrcxypgewQFkVDD0RMp7pGeRTDWSAMPpaNbUk3sV7IGIf5Zl2bPanjMbi2mO6qyjzQcYmZskmU391feuHYS00OjLynmAqxoNBSw-dl6fs2ywN2fuPFg-5tdYZ0bBb7eM-ixldyAH6TDdCiq2_PkD58vio-E0-1poxImO0YsooRZI2I-YbNPto' },
]

const SIMILAR = [
  { title: 'Inception', year: 2010, genre: 'Sci-Fi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjPOqvLBkT11jakETHj27Wa_CP7ycXZ9w52ddGVDzitid-CysTC8j0VxqjC20Wh_0gHEChnyfqrn9xvjfyZ0E_plCG3E-FsOVCdAVNfwHyK1fyqokdxbe6pgmyMb_GazYjnBxqmu-VxVUW7vsUmQIpJKa1x_-1XSm_h0Sm2I3syMJ4D4d_zlIeYLIsiz72QA513FMISI1zG6KMjfCayVXGy8GppJZiqBHOwkeNZptGGY2xcNynOlIt79NzcTYvMKDo339UOfGw6qg', id: 2 },
  { title: 'Gravity', year: 2013, genre: 'Drama', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYWdrwXGUKp7HidnMXXZpngtnXsjPayhk4R66hdvsBDbWGo4z-pk40IIGfJFqFeMlm1G0mGfGmh9DcX3eYKQ2a2-nJoLFBMs2SCIlwKtuOH0BAB5i6RxzHffSpbupjSQD0PDf6YOEZJ1L4-JuCHT1vJhzC0ZI8vstECBBSW5WLpoqUDZzODAzuQ9WCvTGpNcEOsD5-jioyfa5VlGBfG0h3nc6vzfoL-axZx2WeYi9B2RKqX4bviAWnvr750UlEXKFk_sDqf4Yf-7g', id: 3 },
]

const REVIEWS = [
  { initials: 'JD', name: 'John Doe', rating: 5, text: '"An absolute masterpiece of modern cinema. The visual effects and sound design are breathtaking, but the emotional story is what truly stays with you."' },
  { initials: 'AS', name: 'Alice Smith', rating: 4, text: '"The science might be heavy but the heart of the film is pure. Zimmer\'s score is iconic."' },
]

export default function MovieDetailPage() {
  const { id } = useParams()
  const backdropRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (backdropRef.current) {
        backdropRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Placeholder — replace with API call using `id`
  const movie = {
    title: 'Interstellar',
    rating: 8.7,
    duration: '2h 49m',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    synopsis: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. As the crew of the Endurance travels through space, they experience the profound nature of time and the strength of human connection across galaxies. Directed by Christopher Nolan, this masterpiece explores the scientific theories of black holes and relativity while maintaining a deeply emotional core.`,
  }

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Sticky Nav */}
      <nav className="bg-[rgba(19,19,19,0.6)] backdrop-blur-3xl border-b border-white/10 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-[1440px] mx-auto">
          <Link to="/" className="text-2xl font-bold text-primary tracking-tighter">CineStream</Link>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 text-sm">Movies</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="#">Cinemas</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors text-sm" href="#">Offers</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <input
                className="bg-surface-container-low border border-white/10 rounded-full px-6 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-container w-64 transition-all"
                placeholder="Search movies..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-4 top-2 text-on-surface-variant text-xl">search</span>
            </div>
            <button className="text-primary hover:bg-white/5 transition-all px-4 py-2 rounded-lg text-sm font-semibold">Profile</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[716px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img ref={backdropRef} className="w-full h-full object-cover" src={BACKDROP} alt={movie.title} />
          <div className="absolute inset-0 movie-backdrop-gradient" />
        </div>
        <div className="absolute bottom-0 left-0 w-full px-4 md:px-16 pb-12 max-w-[1440px] mx-auto z-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-1 bg-primary/20 border border-primary/40 px-3 py-1 rounded-lg">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="font-bold text-primary text-sm">{movie.rating}</span>
            </div>
            <span className="text-on-surface-variant text-sm">{movie.duration}</span>
            <span className="text-on-surface-variant text-sm">•</span>
            <div className="flex gap-2">
              {movie.genres.map(g => (
                <span key={g} className="bg-surface-container-high px-3 py-1 rounded text-xs font-medium">{g}</span>
              ))}
            </div>
          </div>
          <h1 className="text-[56px] leading-tight font-black tracking-tight mb-4">{movie.title}</h1>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left: Poster + Buttons */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="relative group aspect-[2/3] overflow-hidden rounded-xl glass-card">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={POSTER}
                alt={movie.title}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-bold active:scale-95 transition-transform">
                  View Gallery
                </button>
              </div>
            </div>

            <button className="w-full bg-primary-container text-on-primary-container py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all active:scale-[0.98] shadow-lg">
              Book Tickets
            </button>
            <button className="w-full border border-white/20 py-4 rounded-xl text-sm font-semibold hover:bg-white/5 transition-all">
              Add to Watchlist
            </button>
          </div>

          {/* Right: Details */}
          <div className="md:col-span-8 flex flex-col gap-10">
            {/* Synopsis */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold border-l-4 border-primary-container pl-4">Synopsis</h2>
              <p className="text-on-surface-variant leading-relaxed text-base">{movie.synopsis}</p>
            </div>

            {/* Cast */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold border-l-4 border-primary-container pl-4">Cast &amp; Crew</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {CAST.map((person) => (
                  <div key={person.name} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                      <img className="w-full h-full object-cover" src={person.avatar} alt={person.name} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">{person.name}</span>
                      <span className="text-on-surface-variant text-xs">{person.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trailer */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold border-l-4 border-primary-container pl-4">Watch Trailer</h2>
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-card group cursor-pointer">
                <img className="w-full h-full object-cover" src={TRAILER_THUMB} alt="Trailer" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                    <span
                      className="material-symbols-outlined text-on-primary-container text-5xl ml-1"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Similar */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Reviews */}
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">User Reviews</h2>
              <button className="text-primary text-sm hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {REVIEWS.map((r) => (
                <div key={r.name} className="p-6 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary-container/30 transition-colors">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-sm">
                        {r.initials}
                      </div>
                      <span className="font-bold text-sm">{r.name}</span>
                    </div>
                    <div className="flex text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-lg"
                          style={{ fontVariationSettings: i < r.rating ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-base italic leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Movies */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold">Similar Movies</h2>
            <div className="grid grid-cols-2 gap-6">
              {SIMILAR.map((m) => (
                <Link key={m.title} to={`/movie/${m.id}`} className="group cursor-pointer">
                  <div className="aspect-[2/3] rounded-xl overflow-hidden mb-3">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      src={m.img}
                      alt={m.title}
                    />
                  </div>
                  <h3 className="font-bold text-sm group-hover:text-primary transition-colors">{m.title}</h3>
                  <div className="flex gap-2 items-center text-on-surface-variant">
                    <span className="text-xs">{m.year}</span>
                    <span className="text-xs">•</span>
                    <span className="text-xs">{m.genre}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
