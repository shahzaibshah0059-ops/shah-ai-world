"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [showAllStudios, setShowAllStudios] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState(""); // Date ke liye nayi state

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: "Dashboard", icon: "🏠", path: "/dashboard", active: true },
    { name: "AI Agent Studio", icon: "🤖", path: "/dashboard/ai" },
    { name: "Freelance Market", icon: "💼", path: "/dashboard/freelance" },
    { name: "E-Commerce Hub", icon: "🛒", path: "/dashboard/ecommerce" },
    { name: "Developer Studio", icon: "💻", path: "/dashboard/developer" },
    { name: "Education System", icon: "🎓", path: "/dashboard/education" },
    { name: "Design & Media", icon: "🎨", path: "/dashboard/design" },
    { name: "Time Machine", icon: "⏳", path: "/dashboard/timemachine" },
    { name: "API & Database", icon: "🗄️", path: "/dashboard/api" },
    { name: "Marketing & SEO", icon: "📈", path: "/dashboard/marketing" },
  ];

  const studios = [
    { title: "AI Agent", desc: "Create, train and manage intelligent AI agents.", icon: "🤖", bg: "from-[#43246f] to-[#24143e]", border: "border-[#8753d2]", shadow: "shadow-[#8753d2]/20", path: "/dashboard/ai" },
    { title: "Freelance", desc: "Discover talent and grow your services.", icon: "💼", bg: "from-[#634719] to-[#30220f]", border: "border-[#bd953f]", shadow: "shadow-[#bd953f]/20", path: "/dashboard/freelance" },
    { title: "E-Commerce", desc: "Manage online stores and global commerce.", icon: "🛒", bg: "from-[#07583d] to-[#092d24]", border: "border-[#27a675]", shadow: "shadow-[#27a675]/20", path: "/dashboard/ecommerce" },
    { title: "Developer", desc: "Build, test and deploy full-stack apps.", icon: "💻", bg: "from-[#104d82] to-[#102a4b]", border: "border-[#388fd5]", shadow: "shadow-[#388fd5]/20", path: "/dashboard/developer" },
    { title: "Education", desc: "Manage learning and examinations.", icon: "🎓", bg: "from-[#74234c] to-[#39182d]", border: "border-[#c14a89]", shadow: "shadow-[#c14a89]/20", path: "/dashboard/education" },
    { title: "Design", desc: "Generate stunning visuals and videos.", icon: "🎨", bg: "from-[#792c43] to-[#411a2a]", border: "border-[#d36580]", shadow: "shadow-[#d36580]/20", path: "/dashboard/design" },
    { title: "Time Machine", desc: "Track changes and restore versions.", icon: "⏳", bg: "from-[#754016] to-[#39200d]", border: "border-[#ce8036]", shadow: "shadow-[#ce8036]/20", path: "/dashboard/timemachine" },
    { title: "API & Database", desc: "Control databases, APIs and cloud.", icon: "🗄️", bg: "from-[#075b68] to-[#10333c]", border: "border-[#28aab7]", shadow: "shadow-[#28aab7]/20", path: "/dashboard/api" },
    { title: "Marketing", desc: "Grow visibility with AI marketing.", icon: "📈", bg: "from-[#343c80] to-[#1b2145]", border: "border-[#707be2]", shadow: "shadow-[#707be2]/20", path: "/dashboard/marketing" },
  ];

  const displayedStudios = showAllStudios ? studios : studios.slice(0, 6);

  return (
    <div className="h-screen w-full bg-[#050508] text-white font-sans flex overflow-hidden selection:bg-red-500/30 relative">
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      {/* ====== SIDEBAR ====== */}
      <aside className="w-[250px] border-r border-white/5 bg-[#0a0a0f]/90 backdrop-blur-2xl flex flex-col h-full z-20 shrink-0">
        
        {/* Logo Area */}
        <div className="p-4 flex items-center gap-3 border-b border-white/5">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          <div>
            <h1 className="text-[16px] font-black tracking-tight leading-tight">SHAH <span className="text-red-500">AI</span> WORLD</h1>
            <p className="text-[9px] text-gray-400 font-medium tracking-widest uppercase">Global Empire</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-hidden py-3 px-2 space-y-1">
          {navItems.map((item, i) => (
            <Link key={i} href={item.path} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-300 ${item.active ? "bg-gradient-to-r from-red-900/40 to-transparent text-red-400 border border-red-500/30 shadow-[inset_0_0_20px_rgba(220,38,38,0.1)]" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Profile */}
        <div className="p-4 border-t border-white/5">
          <div className="bg-[#111] p-3 rounded-xl border border-white/5 flex items-center gap-3 mb-3">
             <div className="w-9 h-9 rounded-full overflow-hidden border border-yellow-500/50 bg-[#050508] flex items-center justify-center p-1">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
             </div>
             <div>
               <p className="text-[13px] font-bold">Shah Creator</p>
               <p className="text-[11px] text-yellow-500 font-medium">Premium Plan</p>
             </div>
          </div>
          <button className="w-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 text-yellow-500 text-[12px] font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500/20 transition-colors">
            👑 Upgrade Plan
          </button>
        </div>
      </aside>

      {/* ====== MAIN CONTENT ====== */}
      <main className="flex-1 relative flex flex-col h-full overflow-hidden z-10">
        
        <header className="flex justify-between items-center px-8 py-4 border-b border-white/5 bg-[#050508]/50 shrink-0">
          <div className="relative w-[350px]">
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
            <input type="text" placeholder="Search your ecosystem..." className="w-full bg-[#111] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-[13px] focus:outline-none focus:border-red-500/50 text-white placeholder-gray-500" />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-end hidden md:flex">
              <span className="text-[13px] font-bold text-white tracking-wider">{currentTime || "12:00 PM"}</span>
              {/* Yahan currentDate use kiya hai */}
              <span className="text-[10px] text-gray-500 uppercase font-medium">{currentDate || "..."}</span>
            </div>
            <span className="flex items-center gap-2 text-[12px] text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> Online
            </span>
            <button className="text-gray-400 text-lg hover:text-white">🔔</button>
            
            {/* Header Logo */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500/50 bg-[#050508] flex items-center justify-center p-1 shadow-[0_0_15px_rgba(234,179,8,0.2)] cursor-pointer hover:border-yellow-400 transition-colors">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-hidden px-8 py-5 flex flex-col gap-5">
          
          {/* Hero Banner */}
          <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl flex shadow-2xl shrink-0">
            
            <div className="w-[200px] h-full relative border-r border-white/5 shrink-0 flex items-center justify-center bg-gradient-to-br from-[#050508] to-[#111]">
               <img src="/logo.png" alt="SHAH AI WORLD" className="w-32 h-32 object-contain drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]" />
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 relative">
              <h1 className="text-4xl font-black tracking-tighter mb-2 flex items-center gap-3">
                SHAH <span className="text-red-500">AI</span> WORLD
                <span className="text-[11px] px-2.5 py-1 bg-red-500/20 rounded-md text-red-400 border border-red-500/30">Enterprise</span>
              </h1>
              <p className="text-[15px] font-bold text-gray-300 tracking-wide mb-5">Build • Innovate • Grow • Globally</p>
              <p className="text-[13px] text-gray-400 max-w-xl mb-6 leading-relaxed">Your intelligent digital empire. Powering the next generation of digital innovation with AI-driven studios.</p>
              
              <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white text-[13px] font-bold rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-105 transition-transform w-max flex items-center gap-2 border border-red-500/50">
                Explore Ecosystem →
              </button>
            </div>

            <div className="absolute right-0 top-0 h-full w-[40%] opacity-20 pointer-events-none">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen"></div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 shrink-0">
            {[
              { label: "Total Earnings", value: "$201,150", icon: "💰", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
              { label: "Active AI Agents", value: "1.3K", icon: "🤖", bg: "bg-purple-500/10", border: "border-purple-500/30" },
              { label: "Security Status", value: "Protected", icon: "🛡️", bg: "bg-blue-500/10", border: "border-blue-500/30" },
              { label: "Projects Deployed", value: "3.6K", icon: "🚀", bg: "bg-orange-500/10", border: "border-orange-500/30" }
            ].map((stat, i) => (
              <div key={i} className={`bg-[#0a0a0f]/80 backdrop-blur-xl border ${stat.border} rounded-xl p-4 flex justify-between items-center shadow-lg`}>
                <div><p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p><h3 className="text-xl font-black text-white">{stat.value}</h3></div>
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center text-lg`}>{stat.icon}</div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
            
            {/* Studios Area */}
            <div className="col-span-2 flex flex-col min-h-0">
              <div className="flex justify-between items-center mb-3 shrink-0">
                <h2 className="text-[15px] font-bold flex items-center gap-2"><span className="text-yellow-500 text-lg">📦</span> Your Ecosystem</h2>
                <button onClick={() => setShowAllStudios(!showAllStudios)} className="text-[11px] font-bold text-red-400 bg-red-500/10 px-3 py-1.5 rounded border border-red-500/20 hover:bg-red-500/20 transition-colors">
                  {showAllStudios ? "Show Less ←" : "Show More →"}
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-3 flex-1 min-h-0">
                {displayedStudios.map((s, i) => (
                  <Link href={s.path} key={i} className={`bg-gradient-to-br ${s.bg} border ${s.border} rounded-xl p-4 relative group hover:-translate-y-1 hover:shadow-xl ${s.shadow} transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer`}>
                    <div className="relative z-10">
                      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-lg mb-3 backdrop-blur-md">{s.icon}</div>
                      <h3 className="text-[14px] font-bold text-white mb-1">{s.title}</h3>
                      <p className="text-[11px] text-gray-300 leading-snug line-clamp-2">{s.desc}</p>
                    </div>
                    <div className="mt-3 relative z-10">
                       <span className="text-[10px] font-bold text-white bg-white/10 px-2.5 py-1.5 rounded-md border border-white/10 group-hover:bg-white group-hover:text-black transition-colors backdrop-blur-sm">Launch →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-span-1 flex flex-col gap-4 min-h-0">
              
              {/* AI Assistant */}
              <div className="bg-[#0a0a0f]/90 backdrop-blur-xl border border-purple-500/20 rounded-xl p-4 relative overflow-hidden flex-1 flex flex-col justify-between shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-base">🤖</div>
                    <div>
                      <h3 className="text-[13px] font-bold text-white">AI Assistant</h3>
                      <p className="text-[10px] text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Online</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 mb-3">
                    <p className="text-[11px] text-gray-300">Hello Shah! 👋<br/>How can I help you today?</p>
                  </div>
                </div>
                <div className="relative z-10 mt-auto">
                  <input type="text" placeholder="Ask anything..." className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-3 pr-10 text-[12px] focus:outline-none focus:border-purple-500/50 text-white placeholder-gray-500" />
                  <button className="absolute right-1.5 top-1.5 w-7 h-7 bg-purple-600 hover:bg-purple-500 rounded-md flex items-center justify-center text-sm font-bold transition-colors">↑</button>
                </div>
              </div>

              {/* Global Stats */}
              <div className="bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/5 rounded-xl p-4 relative shrink-0">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[13px] font-bold flex items-center gap-2 text-white"><span className="text-blue-400">🌍</span> Global Network</h3>
                  <span className="text-[9px] text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Live</span>
                </div>
                <div className="h-[80px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-contain bg-no-repeat bg-center opacity-30 invert mb-3"></div>
                <div className="grid grid-cols-2 gap-4 text-[11px]">
                  <div><p className="text-gray-500 mb-1">Users Online</p><p className="font-bold text-white text-sm">2.4M+</p></div>
                  <div><p className="text-gray-500 mb-1">Projects Active</p><p className="font-bold text-white text-sm">680K+</p></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}