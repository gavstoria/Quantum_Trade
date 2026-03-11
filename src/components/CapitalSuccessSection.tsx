import { motion } from "motion/react";

const assetsRow1 = [
  { name: "Ethereum", price: "62699 USD", change: "+1237+2.01%", color: "bg-blue-500" },
  { name: "Solana", price: "62699 USD", change: "+1237+2.01%", color: "bg-purple-500" },
  { name: "BNB", price: "62699 USD", change: "-1237-4.01%", color: "bg-yellow-500" },
  { name: "Tether", price: "62699 USD", change: "+1237+2.01%", color: "bg-emerald-500" },
  { name: "Cardano", price: "62699 USD", change: "-1237-2.01%", color: "bg-blue-600" },
  { name: "XRP", price: "62699 USD", change: "+1237+2.01%", color: "bg-slate-500" },
];

const assetsRow2 = [
  { name: "Tether", price: "62699 USD", change: "+1237+2.01%", color: "bg-emerald-500" },
  { name: "Cardano", price: "62699 USD", change: "-1237-2.01%", color: "bg-blue-600" },
  { name: "XRP", price: "62699 USD", change: "+1237+2.01%", color: "bg-slate-500" },
  { name: "Bitcoin", price: "62699 USD", change: "+1237+2.01%", color: "bg-orange-500" },
  { name: "Ethereum", price: "62699 USD", change: "+1237+2.01%", color: "bg-blue-500" },
  { name: "Solana", price: "62699 USD", change: "+1237+2.01%", color: "bg-purple-500" },
];

export default function CapitalSuccessSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Visual & Large Text */}
        <div className="relative flex items-center justify-center lg:justify-start min-h-[400px]">
          {/* Wireframe Cube Background */}
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start opacity-30 pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-quantum-green/30 fill-none stroke-[0.3]">
                <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" />
                <path d="M50 5 L50 95" />
                <path d="M5 27.5 L50 50 L95 27.5" />
                <path d="M5 72.5 L50 50 L95 72.5" />
                <path d="M50 5 L50 50" className="stroke-quantum-green/50" />
                <path d="M5 27.5 L50 50" className="stroke-quantum-green/50" />
                <path d="M95 27.5 L50 50" className="stroke-quantum-green/50" />
              </svg>
              <div className="absolute inset-0 bg-quantum-green/5 blur-[100px] rounded-full" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center lg:text-left"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.85] tracking-tighter">
              Our Capital <br />
              <span className="text-white/10">Your Success</span>
            </h2>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-6 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex self-start px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium uppercase tracking-widest text-white/60"
          >
            What is <span className="text-quantum-green ml-1.5">QuantumTrade?</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight"
          >
            Trade on Forex and other markets with capital <br className="hidden xl:block" />
            up to <span className="text-white/60">640,000 USD!</span>
          </motion.h3>

          <div className="flex flex-col gap-6 text-white/40 text-sm md:text-base leading-relaxed font-light max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We provide unique trading programs for Forex traders, based upon which we search for the best options to work together with. We provide you with Training accounts that you can use to trade and earn commission without the risk of losing your own funds!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              You are presented with a choice of the <span className="text-white font-medium">widest variety of training programs</span> on the market — it is up to you to choose based on your experience and preference. Whether you are a rookie, advanced or experienced trader, we are certain that you will find the most perfectly suited program.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Asset Tickers */}
      <div className="mt-20 flex flex-col gap-5 w-full overflow-hidden">
        {/* Row 1 */}
        <div className="flex gap-5 animate-ticker-slow whitespace-nowrap">
          {[...assetsRow1, ...assetsRow1, ...assetsRow1].map((asset, i) => (
            <div 
              key={i}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#0A0A0A]/80 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all cursor-default group"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${asset.color} text-white shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                {asset.name[0]}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-white/90">{asset.name}</span>
                <span className="text-sm text-white/30 font-mono">{asset.price}</span>
              </div>
              <div className={`text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 ${asset.change.startsWith('+') ? 'text-quantum-green' : 'text-red-400/80'}`}>
                {asset.change}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-5 animate-ticker-reverse-slow whitespace-nowrap">
          {[...assetsRow2, ...assetsRow2, ...assetsRow2].map((asset, i) => (
            <div 
              key={i}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#0A0A0A]/80 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all cursor-default group"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${asset.color} text-white shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                {asset.name[0]}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-white/90">{asset.name}</span>
                <span className="text-sm text-white/30 font-mono">{asset.price}</span>
              </div>
              <div className={`text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 ${asset.change.startsWith('+') ? 'text-quantum-green' : 'text-red-400/80'}`}>
                {asset.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
