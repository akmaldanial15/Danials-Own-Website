import React from "react";

export default function GlowCard({ children, className = "", color = "from-purple-600 via-indigo-500 to-cyan-500" }) {
  return (
    <div className={`relative group rounded-2xl bg-zinc-900/80 p-[1px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] ${className}`}>
      {/* Background radial/gradient glow on hover */}
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${color} opacity-10 blur-sm transition-all duration-500 group-hover:opacity-75`} />
      
      {/* Inner card container */}
      <div className="relative rounded-[15px] bg-zinc-950 p-6 md:p-8 h-full flex flex-col justify-between border border-zinc-800/50 group-hover:border-transparent transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}
