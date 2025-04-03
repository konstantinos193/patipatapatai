"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-300/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center md:text-left">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-300">
                GRUPPETS
              </span>
              <span className="block text-white">The Fluffiest Token in odin.fun</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl text-center md:text-left">
              Join the fuzzy revolution! Gruppets is not just a token, it's a community of colorful characters taking
              over the blockchain one smile at a time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-pink-500 to-cyan-400 hover:opacity-90 text-white text-lg px-8 py-6">
                Buy $GRUPPETS
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-green-400 font-mono">$GRUPPETS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/hero-puppet.png"
                alt="Gruppets Hero Character"
                width={500}
                height={500}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

