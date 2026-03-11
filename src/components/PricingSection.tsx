import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, HelpCircle } from "lucide-react";

const tiers = ["Copper", "Bronze", "Silver", "Gold", "Diamond"];

const pricingData = {
  Copper: [
    { size: "$5,000", price: "25$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100" },
    { size: "$10,000", price: "25$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100" },
    { size: "$20,000", price: "25$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100" },
    { size: "$40,000", price: "25$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100", highlighted: true },
  ],
  Bronze: [
    { size: "$50,000", price: "45$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100" },
    { size: "$100,000", price: "45$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100" },
    { size: "$150,000", price: "45$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100" },
    { size: "$200,000", price: "45$", target: "5%/5%/5%/5%", maxDrawdown: "10%", dailyDrawdown: "5%", leverage: "Up to 1:200 / RCF 1:100", highlighted: true },
  ],
  // Add more tiers as needed, for now using dummy data for others
  Silver: [],
  Gold: [],
  Diamond: [],
};

export default function PricingSection() {
  const [activeTier, setActiveTier] = useState("Copper");

  const currentData = pricingData[activeTier as keyof typeof pricingData] || pricingData.Copper;

  return (
    <section className="py-24 px-6 relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Header Area */}
      <div className="relative z-10 bg-zinc-900/40 border border-white/5 rounded-[40px] p-12 md:p-20 text-center mb-12 backdrop-blur-sm">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-6"
        >
          Best prices in prop industry!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm md:text-base mb-12"
        >
          Choose your training program and account size.
        </motion.p>

        {/* Tier Selector */}
        <div className="inline-flex items-center gap-1 bg-black/60 p-1.5 rounded-full border border-white/10">
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={`px-6 py-2 rounded-full text-xs font-medium transition-all ${
                activeTier === tier 
                  ? "bg-white text-quantum-dark shadow-lg" 
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Table */}
      <div className="relative z-10 bg-zinc-900/40 border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr_1fr_1fr] divide-x divide-white/5">
          {/* Labels Column */}
          <div className="hidden lg:flex flex-col pt-32 pb-12 px-8 gap-12">
            <div className="text-sm font-medium text-white/90">Account size</div>
            <div className="text-sm font-medium text-white/40 flex items-center gap-2">
              Profit target <HelpCircle size={14} />
            </div>
            <div className="text-sm font-medium text-white/40 flex items-center gap-2">
              Max drawdown <HelpCircle size={14} />
            </div>
            <div className="text-sm font-medium text-white/40 flex items-center gap-2">
              Daily drawdown <HelpCircle size={14} />
            </div>
            <div className="text-sm font-medium text-white/40">Leverage</div>
          </div>

          {/* Data Columns */}
          <AnimatePresence mode="wait">
            {currentData.map((item, i) => (
              <motion.div
                key={`${activeTier}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.05 }}
                className={`relative flex flex-col items-center py-12 px-6 gap-12 text-center ${
                  item.highlighted ? "bg-quantum-green/5" : ""
                }`}
              >
                {item.highlighted && (
                  <div className="absolute inset-0 border-x border-quantum-green/20 pointer-events-none">
                    <div className="absolute inset-0 bg-radial-gradient from-quantum-green/10 to-transparent blur-2xl" />
                  </div>
                )}
                
                <div className="flex flex-col gap-2">
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Virtual capital size</div>
                  <div className="text-2xl font-bold">{item.size}</div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full text-sm font-bold border transition-all ${
                    item.highlighted 
                      ? "bg-quantum-green/20 border-quantum-green text-quantum-green shadow-[0_0_20px_rgba(0,255,136,0.2)]" 
                      : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  Buy for {item.price}
                </motion.button>

                <div className="flex flex-col gap-12 w-full">
                  <div className="text-sm font-medium text-white/60">{item.target}</div>
                  <div className="text-sm font-medium text-white/60">{item.maxDrawdown}</div>
                  <div className="text-sm font-medium text-white/60">{item.dailyDrawdown}</div>
                  <div className="text-[10px] font-medium text-white/30 uppercase tracking-tighter">{item.leverage}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ y: 5 }}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 hover:text-white transition-colors"
        >
          See more details
          <ArrowDown size={14} className="text-quantum-green" />
        </motion.button>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-quantum-green/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
