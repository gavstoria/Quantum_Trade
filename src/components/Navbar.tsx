import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Globe, ChevronDown, LayoutGrid, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-quantum-green rounded-sm rotate-45 flex items-center justify-center">
          <div className="w-4 h-4 bg-quantum-dark rounded-full" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight">QuantumTrade</span>
      </div>

      {/* Language Selector */}
      <div className="hidden lg:flex items-center gap-1 text-sm text-white/60 hover:text-white cursor-pointer transition-colors ml-4">
        <Globe size={16} />
        <span>English</span>
        <ChevronDown size={14} />
      </div>

      {/* Main Menu */}
      <div className="hidden xl:flex items-center gap-0.5 bg-black/40 backdrop-blur-xl border border-white/10 px-1.5 py-1.5 rounded-full">
        <NavItem label="Home" active />
        <NavItem label="How it Works" />
        <NavItem label="Programs" />
        <NavItem label="Support" />
        <NavItem label="Careers" />
        <NavItem label="Become a Partner" />
        <div className="ml-1">
          <button className="px-5 py-2 rounded-full text-xs font-medium text-white/80 hover:text-white border border-white/20 hover:bg-white/5 transition-all">
            Login / Register
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-2 bg-white text-quantum-dark px-5 py-2 rounded-full font-medium text-sm"
        >
          Start a challenge
          <div className="bg-quantum-green rounded-full p-1">
            <ArrowRight size={12} />
          </div>
        </motion.button>
        <button className="border border-white/20 hover:bg-white/5 px-5 py-2 rounded-full text-sm font-medium transition-colors">
          Free trial
        </button>
      </div>
    </motion.nav>
  );
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
        active 
          ? "bg-white/10 text-white" 
          : "text-white/60 hover:text-white hover:bg-white/5"
      }`}
    >
      {active && <LayoutGrid size={14} className="text-quantum-green" />}
      {label}
    </button>
  );
}
