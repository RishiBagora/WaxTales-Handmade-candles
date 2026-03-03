import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiStar,
  FiTruck,
  FiShield,
  FiRefreshCcw,
} from "react-icons/fi";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="relative bg-[#F6F1EB] overflow-hidden">

      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Glow blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#E9DFD3] rounded-full blur-[140px] opacity-70" />
      <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-[#EFE6DB] rounded-full blur-[140px] opacity-70" />

      {/* ⭐ MARQUEE STRIP */}
      <div className="bg-[#1A1816] text-white text-[11px] md:text-xs py-3 overflow-hidden tracking-[0.2em]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 w-max"
        >
          {Array(2).fill(
            <span className="flex gap-20">
              FREE SHIPPING ABOVE ₹999 ✦ CASH ON DELIVERY ✦ HAND POURED IN INDIA ✦ PREMIUM SOY WAX ✦ LONG LASTING FRAGRANCE
            </span>
          )}
        </motion.div>
      </div>

      <Container className="relative z-10 pt-14 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left relative">

            {/* glow behind heading */}
            <div className="absolute -z-10 w-[320px] h-[320px] bg-[#EDE4D9] rounded-full blur-[120px] -top-10 -left-10" />

            <div className="flex justify-center lg:justify-start gap-2 text-[#C9A46C] mb-6">
              {[...Array(5)].map((_,i)=>(<FiStar key={i.id}/>))}
              <span className="text-[#6A625A] text-sm ml-3">Loved by 4,000+ customers</span>
            </div>

            <h1 className="font-serif text-[46px] sm:text-[60px] lg:text-[74px] xl:text-[84px] leading-[1.02] text-[#171614] tracking-[-0.02em]">
              Transform Your Space,
              <br />
              <span className="text-[#9C8770] italic">Elevate Your Mood</span>
            </h1>

            {/* divider */}
            <div className="mt-10 w-24 h-[1px] bg-[#D8CFC4] mx-auto lg:mx-0" />

            <p className="mt-8 text-[#6B635B] text-lg max-w-xl mx-auto lg:mx-0">
              Hand-poured soy candles crafted for slow living.  
              Clean burn, luxury scents, timeless minimal design.
            </p>

            {/* buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/shop">
                <button className="group relative overflow-hidden px-12 py-5 bg-[#1A1816] text-white uppercase tracking-[0.18em] text-xs">
                  <span className="absolute inset-0 bg-[#3A3531] translate-y-full group-hover:translate-y-0 transition-transform duration-500"/>
                  <span className="relative z-10 flex items-center gap-3">
                    Shop Bestsellers <FiArrowRight className="group-hover:translate-x-2 transition"/>
                  </span>
                </button>
              </Link>

              <Link to="/collection">
                <button className="px-12 py-5 border border-[#1A1816] uppercase tracking-[0.18em] text-xs hover:bg-[#1A1816] hover:text-white transition">
                  Explore Collection
                </button>
              </Link>
            </div>

            {/* trust icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 text-sm text-[#6B635B]">
              <div className="flex items-center gap-3"><FiTruck/> Free Shipping</div>
              <div className="flex items-center gap-3"><FiRefreshCcw/> Easy Returns</div>
              <div className="flex items-center gap-3"><FiShield/> Secure Checkout</div>
              <div className="flex items-center gap-3"><FiStar/> Artisan Quality</div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-br from-[#EFE6DB] to-transparent rounded-[40px] blur-2xl scale-110" />

            <div className="relative rounded-[40px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
              <motion.img
                animate={{ y:[0,-18,0], rotate:[0,0.6,0] }}
                transition={{ duration:8, repeat:Infinity, ease:"easeInOut" }}
                src="https://instagram.fudr3-2.fna.fbcdn.net/v/t51.82787-15/589082409_18022280741790624_3859492121025625264_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc4MDkwOTk2NjAwNjI2NTcxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5zZHIuQzMifQ%3D%3D&_nc_ohc=PG-sfcphsJYQ7kNvwGSexnS&_nc_oc=AdnunQJ0zaVKAEDbOvCixJd-nWS_xrj9GYtE0daG9z5svjrpN-XFfBsp77pyoUHEL5uSz0JYIK_T-WBbma0vBHol&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fudr3-2.fna&_nc_gid=zxkPZaDUfTtxb975mF6KXA&_nc_ss=8&oh=00_AftdjTmljIlWnBAQoZzLDNb9112g588-VZBVSVJ44oo58g&oe=69AA1382"
                className="w-full h-[480px] md:h-[620px] object-cover"
              />
            </div>

            {/* floating mini card */}
            <motion.div
              animate={{ y:[0,-10,0] }}
              transition={{ duration:5, repeat:Infinity }}
              className="absolute -bottom-10 -left-10 bg-white px-6 py-4 rounded-2xl shadow-xl hidden lg:block"
            >
              <p className="text-xs tracking-widest text-[#9C8770] uppercase">Hand poured</p>
              <p className="font-serif text-[#2C2420]">100% Soy Wax</p>
            </motion.div>

            <div className="absolute -top-6 right-8 bg-white shadow-xl px-7 py-3 rounded-full text-[#8B7D6B] font-semibold">
              Bestseller ✨
            </div>

          </div>

        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F6F1EB] to-transparent"/>
    </section>
  );
}