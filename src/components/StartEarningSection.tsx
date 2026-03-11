import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function StartEarningSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10 lg:pr-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Stop losing your <br />
            <span className="text-white/40">own money</span>, join us <br />
            and start earning!
          </h2>

          <div className="flex flex-wrap items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-white text-quantum-dark px-8 py-4 rounded-full font-bold text-base transition-shadow"
            >
              Join Us
              <div className="bg-quantum-green rounded-full p-1.5">
                <ArrowRight size={16} />
              </div>
            </motion.button>
            <button className="border border-white/20 hover:bg-white/5 px-10 py-4 rounded-full text-base font-medium transition-all hover:border-white/40">
              Free trial
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visual */}
        <div className="relative flex items-center justify-center lg:justify-end h-[500px] lg:h-[700px] w-full">
          {/* Repeated Text Background */}
          <div className="flex flex-col gap-0 select-none opacity-80 w-full overflow-visible">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 100, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-6xl md:text-8xl lg:text-[90px] xl:text-[110px] font-bold text-quantum-green leading-[0.75] tracking-tighter text-center lg:text-right whitespace-nowrap"
              >
                Start earning
              </motion.span>
            ))}
          </div>

          {/* 3D Spiral Graphic Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-w-[500px] flex items-center justify-center"
            >
              <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-[0_0_60px_rgba(0,255,136,0.5)]">
                <defs>
                  <linearGradient id="helixGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                  </linearGradient>
                </defs>
                {/* Helix strands */}
                <motion.path
                  d="M100,50 C180,50 180,150 100,150 C20,150 20,250 100,250 C180,250 180,350 100,350"
                  fill="none"
                  stroke="url(#helixGradient)"
                  strokeWidth="50"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  className="opacity-40"
                />
                <motion.path
                  d="M100,50 C20,50 20,150 100,150 C180,150 180,250 100,250 C20,250 20,350 100,350"
                  fill="none"
                  stroke="url(#helixGradient)"
                  strokeWidth="50"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  className="opacity-20"
                />
                {/* Glowing Spheres */}
                <motion.circle 
                  cx="100" cy="150" r="18" 
                  fill="#00ff88" 
                  className="shadow-lg"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.circle 
                  cx="100" cy="250" r="18" 
                  fill="#00ff88" 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
