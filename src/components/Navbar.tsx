"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { siteConfig, navigation } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null); // Reset dropdown on mobile toggle
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <span className="text-lg md:text-xl font-bold text-black tracking-tight leading-snug">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-2"
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors border-b border-gray-50 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
            
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-amber-600 rounded-md hover:bg-amber-700 transition-colors shadow-sm"
            >
              <Phone size={16} />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-slate-700 hover:text-amber-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 fade-in duration-200 h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navigation.map((item) => {
               if (item.children) {
                 return (
                   <div key={item.label} className="border-b border-gray-50 pb-2">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between px-2 py-3 text-base font-medium text-slate-800"
                      >
                        {item.label}
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} 
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 space-y-1 bg-slate-50 rounded-md py-2">
                           {item.children.map((child) => (
                             <Link
                               key={child.label}
                               href={child.href}
                               className="block px-2 py-2 text-sm text-slate-600 hover:text-amber-600"
                               onClick={() => setIsOpen(false)}
                             >
                               {child.label}
                             </Link>
                           ))}
                        </div>
                      )}
                   </div>
                 )
               }

               return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-2 py-3 text-base font-medium text-slate-800 hover:text-amber-600 hover:bg-amber-50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
               )
            })}
            
            <div className="pt-4 mt-2">
              <a
                href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold text-white bg-amber-600 rounded-md hover:bg-amber-700 transition-colors shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                Hubungi Kami ({siteConfig.phone})
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
