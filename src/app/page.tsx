"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#020205] text-white font-sans flex flex-col relative overflow-hidden selection:bg-red-500/30">
      
      {/* ====== CINEMATIC BACKGROUND EFFECTS ====== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Neon Glow Lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"></div>
        
        {/* Big Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-900/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-yellow-900/10 blur-[150px] rounded-full animate-pulse delay-1000"></div>

        {/* Matrix/Grid Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* ====== NAVBAR ====== */}
      <header className="relative z-20 flex justify-between items-center px-8 py-6 border-b border-white/5 bg-[#020205]/50 backdrop-blur-xl animate-[fadeInDown_1s_ease-out]">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-yellow-600 rounded-xl flex items-center justify-center font-black text-black shadow-[0_0_20px_rgba(220,38,38,0.6)]">
            S
          </div>
          <span className="text-2xl font-black tracking-tighter">SHAH AI WORLD</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="text-[14px] font-bold text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/register" className="px-6 py-2.5 bg-white text-black text-[14px] font-black rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get Started
          </Link>
        </div>
      </header>

      {/* ====== MAIN HERO SECTION ====== */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full pt-10 pb-20">
        
        {/* 🚀 EPIC ENTRY ANIMATION (Aapki Picture & Text) */}
        <div className="flex flex-col items-center animate-[fadeInUp_1.2s_ease-out]">
          
          {/* Crown Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            <span className="text-[12px] font-black text-red-400 uppercase tracking-widest">👑 The Future is Here</span>
          </div>

          {/* Aapki Picture ka Elegant Frame */}
          <div className="relative mb-8 group">
             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
             <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500/50 relative z-10 bg-gray-900 shadow-2xl">
                <img src="/profile.jpg" alt="Shah CEO" className="w-full h-full object-cover object-top" />
             </div>
             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-3 py-1 rounded-full z-20 whitespace-nowrap shadow-lg">
                <p className="text-[10px] font-bold text-yellow-500">Shah CEO</p>
             </div>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
            ONE ACCOUNT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              UNLIMITED STUDIOS.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
            Build, create, and manage your entire digital life in one secure ecosystem. 
            The most advanced AI platform is now at your fingertips.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center gap-2 border border-red-500/50">
              Start Building Now →
            </Link>
            <Link href="/dashboard" className="px-8 py-4 bg-[#111] border border-white/10 text-white font-bold rounded-xl hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
              Explore Dashboard
            </Link>
          </div>
        </div>

        {/* Feature Cards Preview (Slide up Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl mx-auto w-full relative z-10 animate-[fadeInUp_1.5s_ease-out]">
          
          <div className="p-6 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/5 hover:border-red-500/50 transition-all duration-300 text-left group hover:-translate-y-2">
            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl shadow-[inset_0_0_20px_rgba(220,38,38,0.2)]">
              🧠
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">AI Agent Studio</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Create intelligent AI agents that work for you 24/7.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/5 hover:border-yellow-500/50 transition-all duration-300 text-left group hover:-translate-y-2">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl shadow-[inset_0_0_20px_rgba(234,179,8,0.2)]">
              💻
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Developer Studio</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Build, test, and deploy full-stack applications.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 text-left group hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Zero-Trust Security</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Bank-grade encryption for every single user.</p>
          </div>
        </div>

      </main>

      {/* ====== FOOTER ====== */}
      <footer className="relative z-10 py-6 text-center border-t border-white/5 mt-auto">
        <p className="text-[11px] text-gray-600 font-medium">© 2026 SHAH AI WORLD. Built for the Future.</p>
      </footer>
    </div>
  );
}