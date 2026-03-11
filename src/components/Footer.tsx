import { motion } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  MessageCircle, 
  Send,
  Star
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-quantum-dark pt-24 pb-12 px-6 overflow-hidden">
      {/* Discord CTA Section */}
      <div className="max-w-4xl mx-auto text-center mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Join Our Discord</h2>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <MessageCircle className="text-quantum-dark" size={24} fill="currentColor" />
            </div>
          </div>
          
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Dive into our exclusive Discord community tailored for prop trading enthusiasts. Join us to discuss strategies, insights, and news, and connect with fellow traders who share your passion for proprietary trading. Elevate your trading journey with us on Discord!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 rounded-full border border-white/20 bg-white/5 text-sm font-medium hover:bg-white/10 transition-all"
          >
            Join our discord
          </motion.button>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 relative z-10">
        {/* Programs */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-2xl font-bold">Programs</h3>
          <ul className="flex flex-col gap-3">
            {["Copper 4 phase", "Bronze 3 phase", "Silver 2 phase", "Gold 1 phase", "Diamond", "Competition", "Leaderboard"].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-quantum-green text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-fit px-8 py-2.5 rounded-full border border-white/20 bg-white/5 text-xs font-medium hover:bg-white/10 transition-all">
            Free trial
          </button>
        </div>

        {/* About us */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-2xl font-bold">About us</h3>
          <ul className="flex flex-col gap-3">
            {["About us", "FAQ", "Blog", "Symbols", "Affiliate partnership", "FX-Trader manual", "FX-Trader"].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-quantum-green text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal informations */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-2xl font-bold">Legal informations</h3>
          <ul className="flex flex-col gap-3">
            {["Contact", "Cookies", "Risk warning", "Data protection", "Terms and conditions", "Know your customer", "Anti money laundering"].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-quantum-green text-sm transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col gap-8">
          {/* Trustpilot Badge */}
          <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm">
                <Star size={10} fill="white" color="white" />
              </div>
              <span className="font-bold text-sm tracking-tight">Trustpilot</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-medium">Excellent</span>
                <span className="text-quantum-green font-bold text-[10px]">4.9</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-2 h-2 bg-[#00b67a] flex items-center justify-center rounded-[1px]">
                      <Star size={6} fill="white" color="white" />
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-[8px] text-white/40">Based on 922 reviews</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
            {[Instagram, Facebook, Twitter, Youtube, MessageCircle, Send].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <a href="mailto:support@fxology.com" className="text-lg font-bold hover:text-quantum-green transition-colors">
              support@fxology.com
            </a>
          </div>

          {/* Bull Logo/Illustration */}
          <div className="mt-4 opacity-20 group">
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-quantum-green">
              <path d="M20 40C20 40 30 35 40 35C50 35 60 45 70 45C80 45 90 35 100 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 30L25 45L35 30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <rect x="40" y="30" width="40" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M85 35L95 25L105 35" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex gap-8">
          <a href="#" className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">Terms of use</a>
          <a href="#" className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</a>
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-widest">
          Fxology, LLC. All rights reserved.
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-quantum-green/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </footer>
  );
}
