'use client';

import { useState } from 'react';
import { Search, MapPin, ShoppingCart, ChevronDown, Sparkles, Menu } from 'lucide-react';
import { DreamAIModal } from '../dream-ai/dream-ai-modal';

export function Header() {
  const [showDreamAI, setShowDreamAI] = useState(false);
  const [searchCategory, setSearchCategory] = useState('All');

  return (
    <>
      {/* Main navbar - Amazon dark */}
      <header className="bg-[#131921] text-white">
        <div className="max-w-[1500px] mx-auto">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-4 py-2">
            {/* Logo */}
            <a href="/" className="flex items-center gap-1 p-2 border border-transparent hover:border-white rounded-sm shrink-0">
              <span className="text-xl font-bold">
                <span className="text-white">dream</span>
                <span className="text-[#ff9900]">cart</span>
              </span>
              <span className="text-[10px] text-gray-400">.ai</span>
            </a>

            {/* Deliver to */}
            <div className="hidden lg:flex items-center gap-1 p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
              <MapPin className="w-4 h-4 text-white mt-3" />
              <div>
                <span className="text-[11px] text-gray-300">Deliver to</span>
                <div className="text-sm font-bold leading-tight">India</div>
              </div>
            </div>

            {/* Search bar */}
            <div className="flex-1 flex items-center mx-2">
              <div className="flex w-full rounded-md overflow-hidden">
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="hidden sm:block bg-[#e6e6e6] text-gray-700 text-xs px-2 py-2 border-r border-gray-300 outline-none cursor-pointer rounded-l-md"
                >
                  <option>All</option>
                  <option>Electronics</option>
                  <option>Cameras</option>
                  <option>Fitness</option>
                  <option>Computers</option>
                  <option>Audio</option>
                  <option>Gaming</option>
                </select>
                <input
                  type="text"
                  placeholder="Search DreamCart"
                  className="flex-1 px-3 py-2 text-sm text-gray-900 outline-none min-w-0"
                />
                <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 flex items-center rounded-r-md">
                  <Search className="w-5 h-5 text-gray-800" />
                </button>
              </div>
            </div>

            {/* ★ Dream AI Button — the special feature */}
            <button
              onClick={() => setShowDreamAI(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 border border-[#ff9900] rounded-md hover:bg-[#ff9900]/10 transition-all dream-ai-glow"
            >
              <Sparkles className="w-4 h-4 text-[#ff9900]" />
              <span className="text-sm font-bold text-[#ff9900]">Dream AI</span>
            </button>

            {/* Account */}
            <div className="hidden sm:flex flex-col p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
              <span className="text-[11px] text-gray-300">Hello, Sign in</span>
              <div className="flex items-center text-sm font-bold leading-tight">
                Account & Lists <ChevronDown className="w-3 h-3 ml-0.5" />
              </div>
            </div>

            {/* Returns */}
            <div className="hidden md:flex flex-col p-2 border border-transparent hover:border-white rounded-sm cursor-pointer">
              <span className="text-[11px] text-gray-300">Returns</span>
              <span className="text-sm font-bold leading-tight">& Orders</span>
            </div>

            {/* Cart */}
            <a href="#" className="flex items-center p-2 border border-transparent hover:border-white rounded-sm relative">
              <div className="relative">
                <ShoppingCart className="w-8 h-8" />
                <span className="absolute -top-1 left-4 text-[#ff9900] text-sm font-bold">0</span>
              </div>
              <span className="hidden sm:inline text-sm font-bold mt-3">Cart</span>
            </a>
          </div>

          {/* Bottom sub-nav */}
          <div className="bg-[#232f3e] flex items-center gap-1 px-4 py-1.5 text-sm overflow-x-auto scrollbar-hide">
            <button className="flex items-center gap-1 px-2 py-1 border border-transparent hover:border-white rounded-sm whitespace-nowrap font-bold">
              <Menu className="w-5 h-5" /> All
            </button>
            <NavLink>Today&apos;s Deals</NavLink>
            <NavLink>Electronics</NavLink>
            <NavLink>Fitness</NavLink>
            <NavLink>Home & Kitchen</NavLink>
            <NavLink>Fashion</NavLink>
            <NavLink>New Releases</NavLink>
            <NavLink>Gift Ideas</NavLink>
            <NavLink>Customer Service</NavLink>
            {/* Dream AI in sub-nav for mobile */}
            <button
              onClick={() => setShowDreamAI(true)}
              className="md:hidden flex items-center gap-1 px-2 py-1 rounded-sm whitespace-nowrap text-[#ff9900] font-bold"
            >
              <Sparkles className="w-3 h-3" /> Dream AI
            </button>
          </div>
        </div>
      </header>

      {/* Dream AI Modal */}
      {showDreamAI && <DreamAIModal onClose={() => setShowDreamAI(false)} />}
    </>
  );
}

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="px-2 py-1 border border-transparent hover:border-white rounded-sm whitespace-nowrap">
      {children}
    </a>
  );
}
