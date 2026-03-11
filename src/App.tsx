import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import CapitalSuccessSection from "./components/CapitalSuccessSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import StartEarningSection from "./components/StartEarningSection";
import Footer from "./components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-quantum-dark selection:bg-quantum-green selection:text-quantum-dark">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-quantum-green/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-quantum-green/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-quantum-green/10 rounded-full blur-[130px] animate-blob animation-delay-4000" />
      </div>

      <div className="absolute inset-0 z-0 bg-radial-gradient pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <Navbar />

      <main className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[85vh] pt-20 px-6 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/60 mb-8"
            >
              <span>Our Capital, Your</span>
              <span className="text-quantum-green flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-quantum-green rounded-full animate-pulse" />
                Success
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
            >
              Quantum-Powered <br />
              <span className="text-white/40">Prop Firm.</span> <br />
              Conquer the market.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/40 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto"
            >
              Join the next generation of algorithmic trading. 
              Access institutional liquidity with quantum-enhanced risk management.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-quantum-dark px-8 py-4 rounded-full font-bold text-lg transition-shadow"
              >
                Programs
                <div className="bg-quantum-green rounded-full p-1.5">
                  <ArrowRight size={18} />
                </div>
              </motion.button>
              <button className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-full text-lg font-medium transition-all hover:border-white/40">
                Free trial
              </button>
            </motion.div>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-quantum-green rounded-full opacity-20"
                animate={{
                  y: [0, -150, 0],
                  opacity: [0, 0.4, 0],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </section>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <StatsSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <CapitalSuccessSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <StartEarningSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <HowItWorksSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <PricingSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <ReviewsSection />
        </motion.div>
      </main>

      <Footer />

      <div className="fixed right-8 bottom-12 z-20 hidden lg:flex flex-col items-center gap-4">
        <span className="writing-vertical text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-quantum-green"
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </div>
  );
}
