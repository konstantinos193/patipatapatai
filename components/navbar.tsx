"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-300">
            GRUPPETS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/80 hover:text-cyan-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("tokenomics")}
            className="text-white/80 hover:text-pink-500 transition-colors"
          >
            Tokenomics
          </button>
          <button
            onClick={() => scrollToSection("how-to-buy")}
            className="text-white/80 hover:text-yellow-300 transition-colors"
          >
            How to Buy
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="text-white/80 hover:text-green-400 transition-colors"
          >
            Roadmap
          </button>
          <button
            onClick={() => scrollToSection("community")}
            className="text-white/80 hover:text-purple-400 transition-colors"
          >
            Community
          </button>
          <Button 
            className="bg-gradient-to-r from-pink-500 to-cyan-400 hover:opacity-90 text-white"
            onClick={() => window.open("https://jup.ag/swap/SOL-2aKoNudHgJuWno8Z8xzNGoCQhrqK3X8PRoNkAvcypump", "_blank")}
          >
            Buy Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="py-3 text-white/80 hover:text-cyan-400 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tokenomics")}
                className="py-3 text-white/80 hover:text-pink-500 transition-colors text-left"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection("how-to-buy")}
                className="py-3 text-white/80 hover:text-yellow-300 transition-colors text-left"
              >
                How to Buy
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="py-3 text-white/80 hover:text-green-400 transition-colors text-left"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="py-3 text-white/80 hover:text-purple-400 transition-colors text-left"
              >
                Community
              </button>
              <Button 
                className="bg-gradient-to-r from-pink-500 to-cyan-400 hover:opacity-90 text-white w-full"
                onClick={() => window.open("https://pump.fun/coin/2aKoNudHgJuWno8Z8xzNGoCQhrqK3X8PRoNkAvcypump", "_blank")}
              >
                Buy Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

