import { motion } from "motion/react";

const stats = [
  {
    value: "$392K+",
    label: "Paid out to QuantumTrade Traders",
    className: "col-span-1 row-span-1 border-r border-b border-white/10 p-12",
  },
  {
    value: "14K+",
    label: "No. of QuantumTrade traders",
    className: "col-span-1 row-span-1 border-b border-white/10 p-12 relative overflow-hidden",
    hasGlow: true,
  },
  {
    value: "143+",
    label: "No. of countries with traders registered at QuantumTrade",
    className: "col-span-1 row-span-1 border-r border-white/10 p-12",
  },
  {
    value: "12h",
    label: "Avg payout processing time",
    className: "col-span-1 row-span-1 p-12",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto leading-tight"
          >
            Traders from more than 150 countries around the world have registered!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            We provide unique trading programs for Forex traders, based upon which we search for the best options to work together with. We provide you with Training accounts that you can use to trade and earn commission without the risk of losing your own funds!
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className={`${stat.className} transition-colors duration-500`}
            >
              {stat.hasGlow && (
                <>
                  <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute top-0 right-0 w-[1px] h-full bg-quantum-green/50 shadow-[0_0_15px_rgba(0,255,136,0.5)] origin-top" 
                  />
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-quantum-green/50 shadow-[0_0_15px_rgba(0,255,136,0.5)] origin-left" 
                  />
                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-quantum-green rounded-full blur-[1px] opacity-50 animate-pulse" />
                </>
              )}
              <div className="flex flex-col gap-2">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className={`font-display text-4xl md:text-5xl font-bold ${stat.value.includes('h') ? 'text-quantum-green' : 'text-white'}`}
                >
                  {stat.value}
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="text-white/40 text-sm font-light max-w-[200px]"
                >
                  {stat.label}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
