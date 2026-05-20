import { Link } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJUYM2PwadzzllwnebLay_GIRvEbOKhnE0KYRpyuvFz3nAut18_eoQjdyBhd9JqKGVYHn_TCkEh9EUvb9QKeEKPC8LGGp3tpiCVqllxnBMdKUsiCB8DwFDJjIdoQoqmH5uxLrPiqU7O_2bCsnfa_Jy_pqMb1Dyv0b-K6XkWg6HI166wrNzEwGDvKzFRBjrushCMn72yaTxCvQQxCp54_O8G5uLPlbCpJdSJDLSi4xeoMGQx820uq_bj5DeCP6HP7d0YI9CZyyiZzo'
const TRAILER_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF8Sw37MW1nj9tOCaYuSyn0Loy8W2TwZGojUdQ-QrKGvkB6pFAnQcbLWNQNMPVIeelko_e7e5HYlTMmOEIzrh9tqH8rmG0r7jlxi6QTrQlVhnlnCo39jXWCIChaZfoDvNXXc5-VySLp6BwHa0cuvw27WMnq6PHEgxMjymnqXOtVAfjmQTvqFsORffV_f2_lmlNByiaw68AGwOVWUt_SD7S_n329ySfwM6WW61CROWdOo5fluYCtpNVmrJXAjCNGoM8lgs67CYoenM'

const TOP_10 = [
  {
    rank: '01', title: 'Midnight Run', genre: 'Thriller', duration: '2h 15m', score: 92,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBm6_0_un1lpkGgclvpsfbawzmVpQIJOmjOPa1zGkp7zMxF5YoThROXZgEnF_bysMuKf_WC7PbZnnbySHtuSFmU7cLcpI6R0G1Tm6liROwNzagtGRvS6wwYbk4BGgPAzu9kRttv-Ak6uw97wuxf23xp6pdtB9z0AYMIUpesY6lSiaMx21EwFOwMW2Pyz_gv90M3qojItXL8RFxepqQhVCk5D5RhByqTlkRi3eq2DqrLf3YCkoKJPnrn4PqjhSn_YOKb7YGyNnPbss',
  },
  {
    rank: '02', title: 'Ethereal', genre: 'Fantasy', duration: '1h 48m', score: 88,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCChhYpOQuFwsN0KKx9pToV9KA8KwKdBVxTAi7It77E6oXkHL5auJc2iA5RYb06Caxil3F8NN6E_YqWR5ubzj35TTr9OI1M1IpHu6WdPqBNUhdLEQeFuMQE-RCEqeWQb9MJGFyUgKbqNjC72D4-PBj6zpMvgEwtKd3SQEEADmGj4ndneVCzEqNkGiRfSQcB_QZ5_JvxszxMAYPgTs83wfiVSQ-bPK35UQ-Hr8oYSp-3MZv8rdKbjP-3m-pY5_EbSa-w1LrMXSqD2wc',
  },
  {
    rank: '03', title: 'Downpour', genre: 'Drama', duration: '2h 05m', score: 85,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAysJn4rIDoewtapNY1U64E9mS8LLPxegCTRenmvu4PVtcvodWTOiTMAWb420XhfC8RIGiyJU2Ef2GPMRr2dICMkvOyOmtuIAxqF23qnlzgM5xoPOWTsKJFl0lAA31iADdlgvv-Fdgoubj38RMQDUmaKweSEboEP8mEFvicOdZnCW9JSldF98YD4AzLeeSZBBw4w4ZLKgsq7CFf8SJmOxwSWA4ryzHxh41znnVsLrlR_BLqse6sRF6p3xuE4GGRp-U1m89GZ-zbr6w',
  },
  {
    rank: '04', title: 'The Estate', genre: 'Horror', duration: '1h 55m', score: 79,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcwtkJAqXmLYEnZ9Qj8ugs1jyDmtuWy6k84mPSq1DBW0YJKkYnPxHAQmPhTu8e0sTs5o1H2QRInIPo5B8uxkZjnzMbd0wNvQ0QHoELS1rY9rnQ60a9sQkN3-_YN_z51ScK_6RDPGt9PPmYY2zFU8J_QVY7MQULO1ktoycbSqmNf2ke0aSwoobeDlFxF-IA7yvlVBry7bX4ioS3FoyM-qsbwkGSYYnYzx7Y7p6bwXiAYMGhy7PFYB6B2SjCZ9X2S9aEhILHYFLohRQ',
  },
]

const HORROR_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcwtkJAqXmLYEnZ9Qj8ugs1jyDmtuWy6k84mPSq1DBW0YJKkYnPxHAQmPhTu8e0sTs5o1H2QRInIPo5B8uxkZjnzMbd0wNvQ0QHoELS1rY9rnQ60a9sQkN3-_YN_z51ScK_6RDPGt9PPmYY2zFU8J_QVY7MQULO1ktoycbSqmNf2ke0aSwoobeDlFxF-IA7yvlVBry7bX4ioS3FoyM-qsbwkGSYYnYzx7Y7p6bwXiAYMGhy7PFYB6B2SjCZ9X2S9aEhILHYFLohRQ'
const DRAMA_POSTER = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAysJn4rIDoewtapNY1U64E9mS8LLPxegCTRenmvu4PVtcvodWTOiTMAWb420XhfC8RIGiyJU2Ef2GPMRr2dICMkvOyOmtuIAxqF23qnlzgM5xoPOWTsKJFl0lAA31iADdlgvv-Fdgoubj38RMQDUmaKweSEboEP8mEFvicOdZnCW9JSldF98YD4AzLeeSZBBw4w4ZLKgsq7CFf8SJmOxwSWA4ryzHxh41znnVsLrlR_BLqse6sRF6p3xuE4GGRp-U1m89GZ-zbr6w'

export default function HomePage() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Navbar />

      {/* Hero */}
      <header className="relative md:h-[80vh] min-h-[600px] flex items-stretch overflow-hidden pt-20 pb-8 px-4 md:px-24 max-w-[1600px] mx-auto gap-6">
        {/* Left: Poster */}
        <div className="relative flex-[1.4] rounded-2xl overflow-hidden group">
          <img
            alt="Hero Movie"
            className="w-full h-full object-cover asymmetric-clip transition-transform duration-1000 group-hover:scale-105"
            src={HERO_IMG}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <span className="text-primary-container font-bold text-xs uppercase tracking-widest mb-2">
              Featured Premiere
            </span>
            <h1 className="text-[48px] md:text-[72px] leading-[0.9] font-black uppercase italic tracking-tighter mb-2">
              Nebula <br />
              <span className="text-primary">Rising</span>
            </h1>
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="flex-1 flex flex-col justify-between py-2 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary text-lg">star</span>
                <span className="text-sm font-semibold text-on-surface">9.2 IMDb</span>
              </div>
              <span className="text-secondary text-xs">Sci-Fi • 2h 45m</span>
            </div>

            <p className="text-secondary text-sm leading-snug">
              In 2142, a mission to the galaxy's edge redefines humanity. Witness the odyssey in IMAX.
            </p>

            {/* Trailer */}
            <div className="aspect-video bg-surface-container rounded-xl relative overflow-hidden group cursor-pointer border border-white/5 max-h-[160px]">
              <img
                alt="Trailer"
                className="w-full h-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-110"
                src={TRAILER_IMG}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-white drop-shadow-lg">play_circle</span>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] font-semibold">
                Trailer 02:45
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-lg text-sm font-bold transition-all hover:brightness-110 flex justify-center items-center gap-2">
                <span className="material-symbols-outlined text-xl">confirmation_number</span>
                Book Now
              </button>
              <Link
                to="/movie/1"
                className="w-full border border-white/10 hover:bg-white/5 py-3 rounded-lg text-sm font-bold transition-all text-center block"
              >
                More Details
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-low p-4 rounded-xl border border-white/5">
              <div className="text-primary text-xl font-bold">120k+</div>
              <div className="text-secondary text-[10px] uppercase font-semibold tracking-wider">Tickets Sold</div>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl border border-white/5">
              <div className="text-primary text-xl font-bold">24</div>
              <div className="text-secondary text-[10px] uppercase font-semibold tracking-wider">Cities Showing</div>
            </div>
          </div>
        </div>
      </header>

      {/* Top 10 */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="px-4 md:px-24 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-black tracking-tight uppercase">Top 10 This Week</h2>
              <div className="h-1 w-16 bg-primary-container mt-3" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {TOP_10.map((movie, i) => (
              <Link key={movie.rank} to={`/movie/${i + 1}`} className="flex items-center space-x-6 group cursor-pointer">
                <div className="text-5xl font-black text-outline transition-all group-hover:text-primary-container">
                  {movie.rank}
                </div>
                <div className="w-16 aspect-[2/3] rounded overflow-hidden flex-shrink-0">
                  <img alt={movie.title} className="w-full h-full object-cover" src={movie.img} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm font-bold mb-0.5">{movie.title}</h3>
                  <p className="text-secondary text-xs">{movie.genre} • {movie.duration}</p>
                  <div className="mt-1.5 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-container" style={{ width: `${movie.score}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="px-4 md:px-24 max-w-[1600px] mx-auto">
          <h2 className="text-2xl font-black tracking-tight uppercase mb-10">Worlds to Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {/* Sci-Fi Featured */}
            <div className="md:col-span-2 aspect-[16/7] relative group overflow-hidden rounded-xl cursor-pointer">
              <img
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={HERO_IMG}
                alt="Sci-Fi"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-xl font-black uppercase italic drop-shadow-2xl">Sci-Fi</h3>
              </div>
            </div>

            {/* Action */}
            <div className="aspect-square relative group overflow-hidden rounded-xl cursor-pointer">
              <div className="absolute inset-0 bg-surface-container-highest" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">swords</span>
                <h3 className="text-sm font-black uppercase">Action</h3>
              </div>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center z-30">
                <span className="text-on-primary font-bold text-xs">Browse</span>
              </div>
            </div>

            {/* Horror */}
            <div className="aspect-square relative group overflow-hidden rounded-xl cursor-pointer">
              <img
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={HORROR_IMG}
                alt="Horror"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-red-600">Horror</h3>
              </div>
            </div>

            {/* Drama Featured */}
            <div className="md:col-span-2 aspect-[16/7] relative group overflow-hidden rounded-xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container-high to-surface-container-lowest" />
              <div className="absolute inset-0 flex items-center p-6 gap-6 z-20">
                <div className="w-1/3 aspect-[2/3] bg-surface rounded shadow-xl overflow-hidden -rotate-3 group-hover:rotate-0 transition-transform">
                  <img className="w-full h-full object-cover" src={DRAMA_POSTER} alt="Drama" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-1">Drama</h3>
                  <p className="text-secondary text-xs">Stories that connect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 bg-surface-container-lowest border-y border-white/5">
        <div className="px-4 md:px-24 max-w-[1600px] mx-auto">
          <h2 className="text-2xl font-black tracking-tight uppercase mb-10">Calendar of Dreams</h2>
          <div className="space-y-12 relative">
            <div className="absolute left-[20px] md:left-[180px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            <div className="flex flex-col md:flex-row gap-12 relative items-center">
              <div className="md:w-[150px] text-left md:text-right">
                <div className="text-secondary text-[10px] uppercase tracking-[.2em] mb-1">Dec 15, 2024</div>
                <div className="text-primary text-3xl font-black">24d 12h</div>
              </div>
              <div className="hidden md:block absolute left-[180px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(173,198,255,0.6)] z-10" />
              <div className="flex-1 flex gap-6 items-center">
                <div className="w-full md:w-[450px] rounded-xl overflow-hidden aspect-[21/9] relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={TRAILER_IMG}
                    alt="The Last Frontier"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-black uppercase italic">The Last Frontier</h3>
                  </div>
                </div>
                <button className="flex w-10 h-10 rounded-full border border-white/20 items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined text-lg">notifications</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
