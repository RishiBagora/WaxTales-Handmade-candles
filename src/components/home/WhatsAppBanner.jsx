import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../common/Container";
import Button from "../common/Button";
import { business } from "../../data/business";

export default function WhatsAppBanner() {
  const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=Hi, I want to place a custom candle order 🕯`;

  return (
    <section className="relative py-20 lg:py-32 bg-[#F6F1EB] overflow-hidden">

      {/* Warm glow background blobs */}
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-[#E9DFD3] rounded-full blur-[120px] opacity-60" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[#EDE4D9] rounded-full blur-[120px] opacity-70" />

      <Container className="relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="text-xs tracking-[0.45em] uppercase text-[#9C8770] mb-6">
              Custom Candle Orders
            </p>

            <h2 className="font-serif text-[36px] md:text-[52px] leading-[1.1] text-[#2C2420]">
              Create Your Own <br />
              Signature Scent
            </h2>

            <p className="mt-6 text-lg text-[#6B6257] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Planning a wedding, gift hamper or special occasion?  
              We design personalised scented candles crafted specially for you.
            </p>

            {/* FEATURES */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-[#7A6C62]">
              <span>✨ Custom fragrance</span>
              <span>🎁 Gift packaging</span>
              <span>📦 Bulk orders</span>
            </div>

            {/* CTA BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} className="mt-10">
              <a href={whatsappLink} target="_blank">
                <button className="group relative overflow-hidden px-10 py-5 bg-[#1A1816] text-white uppercase tracking-[0.25em] text-xs">

                  {/* hover fill */}
                  <span className="absolute inset-0 bg-[#3A3531] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <span className="relative z-10 flex items-center gap-3">
                    <FaWhatsapp size={18} />
                    Chat on WhatsApp
                  </span>

                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EFE6DB] to-transparent rounded-[40px] blur-2xl scale-110" />

            <div className="relative overflow-hidden rounded-[40px] shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
              <img
                src="https://instagram.fudr3-1.fna.fbcdn.net/v/t51.82787-15/631068619_18029437121790624_7591755427233196008_n.heic?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=101&ig_cache_key=MzgyNzI5NTk5NDM2NzQ3NTIxNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0Mzl4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6nvzj7ByxMgQ7kNvwFUyY4p&_nc_oc=Adm-6bsm-1Z_bSrmwPOVmxv7vuJ3xNdsK7p9hHyFpkcY9p5spzMhH2Lm5xMETtVzbgidgF0lpndrcsOpgLv7mxaB&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=instagram.fudr3-1.fna&_nc_gid=ksO33kNu97l9Wma_L-8cDw&_nc_ss=8&oh=00_AfzS9rlyiJv2tahjzE4l3anPQ_xb8fPdufNKLU5wSu6D2g&oe=69AB2033"
                alt="Custom scented candle"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}