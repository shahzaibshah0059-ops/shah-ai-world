"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Login Button chal gaya! Backend baad mein connect karenge.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0a0a0f] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Login to <span className="text-red-500 font-bold">SHAH AI WORLD</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input type="email" required className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50" placeholder="aapka@email.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
            <input type="password" required className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500/50" placeholder="••••••••" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-red-600 text-white font-bold py-3.5 rounded-xl hover:bg-red-700 disabled:opacity-50 mt-4">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Don't have an account? <Link href="/register" className="text-yellow-500 hover:text-yellow-400">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}