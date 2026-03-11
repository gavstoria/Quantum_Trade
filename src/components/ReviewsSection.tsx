import { motion } from "motion/react";
import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Satoshi",
    location: "JP",
    date: "2 days ago",
    title: "Professional and attentive",
    content: "Besides the good prices that is on offer. The application has improved dramatically.",
    rating: 5,
    avatar: "https://picsum.photos/seed/satoshi/100/100"
  },
  {
    name: "R.C",
    location: "CA",
    date: "7 days ago",
    title: "I had no issue with the purchase",
    content: "I had no issue with the purchase. Pretty straight forward, and easy... Will be looking forward to purchasing from them in the future!",
    rating: 5,
    avatar: "https://picsum.photos/seed/rc/100/100"
  },
  {
    name: "Paul S.",
    location: "NG",
    date: "7 days ago",
    title: "The best Prop firm",
    content: "I really like the options you give us and the support is top notch. Highly recommended for serious traders.",
    rating: 5,
    initials: "PS",
    color: "bg-lime-500"
  },
  {
    name: "Simon Deny",
    location: "US",
    date: "1 month ago",
    title: "won $40000 challenge",
    content: "Just won my $40,000 funded account challenge! I received my login credentials the same day. They are simply the best.",
    rating: 5,
    avatar: "https://picsum.photos/seed/simon/100/100"
  },
  {
    name: "David Fx",
    location: "NG",
    date: "Apr 24, 2024",
    title: "I like the trading platform",
    content: "Quick response every time I reach out for help. Fast withdrawals. They have a good trading platform. Smooth experience.",
    rating: 5,
    initials: "DF",
    color: "bg-zinc-700"
  },
  {
    name: "Lora J.",
    location: "ZA",
    date: "May 8, 2024",
    title: "So far so good",
    content: "Besides the good prices that is on offer. The application has improved dramatically. Looking forward to more success.",
    rating: 5,
    avatar: "https://picsum.photos/seed/lora/100/100"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 relative w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-md">
            Here you can find <br />
            our reviews
          </h2>
        </motion.div>

        {/* Trustpilot Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 flex items-center gap-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-sm">
              <Star size={14} fill="white" color="white" />
            </div>
            <span className="font-bold text-lg tracking-tight">Trustpilot</span>
          </div>
          <div className="h-10 w-[1px] bg-white/10" />
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm font-medium">Excellent</span>
              <span className="text-quantum-green font-bold text-sm">4.9</span>
              <div className="flex gap-0.5 ml-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-3 h-3 bg-[#00b67a] flex items-center justify-center rounded-[1px]">
                    <Star size={8} fill="white" color="white" />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-white/40">Based on 922 reviews</div>
          </div>
        </motion.div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900/40 border border-white/5 rounded-[32px] p-8 flex flex-col gap-6 backdrop-blur-sm hover:border-white/10 transition-colors group"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                {review.avatar ? (
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${review.color} text-white`}>
                    {review.initials}
                  </div>
                )}
                <div>
                  <div className="font-bold text-sm">{review.name}</div>
                  <div className="text-[10px] text-white/40 flex items-center gap-1">
                    {review.date} @ {review.location}
                  </div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    fill={i <= review.rating ? "white" : "transparent"} 
                    color={i <= review.rating ? "white" : "rgba(255,255,255,0.2)"} 
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-base text-white/90">{review.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed font-light">
                {review.content}
              </p>
            </div>

            <div className="mt-auto flex items-center gap-2 text-[10px] text-white/40">
              <CheckCircle2 size={12} className="text-quantum-green" />
              Verified
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-quantum-green/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
