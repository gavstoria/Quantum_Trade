import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

const steps = [
  {
    id: 1,
    title: "Choose A Program",
    description: "Choose a program that suits your needs the best. Simply fill in a short form and pay the fee. You will instantly receive your login details, that will enable you to login to our training platform for traders.",
    visual: "cards"
  },
  {
    id: 2,
    title: "Step 2: Training phases",
    description: "Your task at this stage is to fulfill the requirements of the given program in the training phase of our programs. Complying with the rules and advice will teach you the correct way of handling risk and advancing your understanding further – at the same time it gives us insight into whether you are ready for real-life trading.",
    visual: "dashboard"
  },
  {
    id: 3,
    title: "Step 3: Co-operation",
    description: "When you manage to successfully complete our training program, we are then set to cooperate with you and you then become an Fxology trader, receive a FCF trading account, where you can start trading and are entitled to earn commission up to 50-90% – we pay for any losses.",
    visual: "mobile"
  }
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [activeStep, isInView]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setActiveStep((current) => (current + 1) % steps.length);
        setProgress(0);
      }, 600); // Brief pause at 100% before switching
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-4"
        >
          How does it <span className="text-quantum-green">works?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-sm md:text-base uppercase tracking-widest"
        >
          Your pathway to professional trading
        </motion.p>
      </div>

      {/* Visual Display Area */}
      <div className="relative aspect-[21/9] w-full bg-black/40 rounded-2xl border border-white/10 overflow-hidden mb-16 group">
        {/* Background Wave Effect */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-quantum-green/20 to-transparent blur-[100px]" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <motion.path
              d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1000,200 L1000,400 L0,400 Z"
              fill="url(#waveGradient)"
              animate={{
                d: [
                  "M0,200 C200,100 400,300 600,200 C800,100 1000,300 1000,200 L1000,400 L0,400 Z",
                  "M0,200 C200,300 400,100 600,200 C800,300 1000,100 1000,200 L1000,400 L0,400 Z",
                  "M0,200 C200,100 400,300 600,200 C800,100 1000,300 1000,200 L1000,400 L0,400 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(0, 255, 136, 0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Visuals */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            {activeStep === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                className="relative flex items-center justify-center"
              >
                {/* Stacked Cards */}
                <div className="relative w-[300px] h-[180px]">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 bg-zinc-900 border border-white/10 rounded-xl p-6 shadow-2xl"
                      style={{
                        transform: `translate(${i * 20}px, ${-i * 20}px)`,
                        zIndex: 10 - i,
                        opacity: 1 - i * 0.2
                      }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((dot) => (
                            <div key={dot} className="w-1 h-1 bg-white/40 rounded-full" />
                          ))}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40">
                          {i === 0 ? "Gold" : i === 1 ? "Silver" : "Bronze"}
                        </span>
                      </div>
                      <div className="mb-6">
                        <div className="text-[10px] text-white/40 mb-1">Virtual capital size</div>
                        <div className="text-xl font-bold">$20,000 <span className="text-[10px] bg-white/10 px-1 rounded ml-1">TOP</span></div>
                      </div>
                      <div className="w-full h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-medium">
                        Start program
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeStep === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                className="w-full max-w-2xl bg-zinc-900/90 rounded-xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl"
              >
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] text-white/40 font-mono">Quantum Dashboard v2.0</div>
                </div>
                <div className="p-6 grid grid-cols-[1fr_200px] gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="h-40 w-full bg-white/5 rounded-lg relative overflow-hidden">
                      {/* Mock Chart */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160">
                        <motion.path
                          d="M0,120 L40,100 L80,130 L120,80 L160,110 L200,60 L240,90 L280,40 L320,70 L360,30 L400,50"
                          fill="none"
                          stroke="#00ff88"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2 }}
                        />
                      </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-12 bg-white/5 rounded-lg border border-white/5" />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="h-24 bg-white/5 rounded-lg border border-white/5 p-3">
                      <div className="text-[8px] text-white/20 mb-1">MARKET CAP</div>
                      <div className="text-sm font-bold">$44,341.11</div>
                    </div>
                    <div className="h-32 bg-white/5 rounded-lg border border-white/5" />
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                className="relative"
              >
                {/* Mobile App Mockup */}
                <div className="w-[240px] h-[480px] bg-zinc-900 rounded-[40px] border-[8px] border-zinc-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-2xl z-20" />
                  <div className="p-6 pt-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-full bg-white/10" />
                      <div>
                        <div className="text-xs font-bold">Basim Albawe</div>
                        <div className="text-[10px] text-white/40">Fxology trader</div>
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="text-[10px] text-white/40 mb-1">Current Balance</div>
                      <div className="text-2xl font-bold">17,389 USDT</div>
                      <div className="text-[10px] text-quantum-green">+ $0.02 (2.00%)</div>
                    </div>
                    <div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-4" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 bg-quantum-green rounded-lg" />
                      <div className="h-10 bg-white/5 rounded-lg border border-white/5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Step Controls & Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            onClick={() => handleStepClick(index)}
            className="cursor-pointer group flex flex-col"
          >
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-6">
              <motion.div 
                className="h-full bg-quantum-green"
                initial={{ width: 0 }}
                animate={{ 
                  width: activeStep === index ? `${progress}%` : activeStep > index ? "100%" : "0%" 
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <div className={`text-[10px] uppercase tracking-widest mb-4 transition-colors ${activeStep === index ? "text-quantum-green" : "text-white/40 group-hover:text-white/60"}`}>
              {activeStep === index ? `[ STEP ${step.id} ]` : `STEP ${step.id}`}
            </div>

            <h3 className={`text-lg font-bold mb-3 transition-colors ${activeStep === index ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
              {step.title}
            </h3>

            <AnimatePresence mode="wait">
              {activeStep === index && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-white/40 text-xs leading-relaxed font-light"
                >
                  {step.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

