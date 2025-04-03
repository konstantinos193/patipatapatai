"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TokenomicsSection from "@/components/tokenomics-section"
import HowToBuySection from "@/components/how-to-buy-section"
import RoadmapSection from "@/components/roadmap-section"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"
import FloatingPuppets from "@/components/floating-puppets"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none z-0"></div>
      <FloatingPuppets />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <HowToBuySection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}

