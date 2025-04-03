"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export default function FloatingPuppets() {
  const [mounted, setMounted] = useState(false)
  const controls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    controls.start("visible")
  }, [controls])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!mounted) return null

  const puppets = [
    { src: "/images/puppet1.png", size: isMobile ? 50 : 80, delay: 0 },
    { src: "/images/puppet-yellow.png", size: isMobile ? 40 : 70, delay: 1.5 },
    { src: "/images/puppet-blue.png", size: isMobile ? 60 : 90, delay: 0.8 },
    { src: "/images/puppet-unicorn.png", size: isMobile ? 45 : 75, delay: 2.2 },
    { src: "/images/puppet-punk.png", size: isMobile ? 55 : 85, delay: 3 },
    { src: "/images/puppet-fire.png", size: isMobile ? 35 : 65, delay: 1.2 },
    { src: "/images/puppet-party.png", size: isMobile ? 65 : 95, delay: 2.5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {puppets.map((puppet, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {
              opacity: 0,
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            },
            visible: {
              opacity: [0, 0.8, 0.5],
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
              transition: {
                duration: 20 + Math.random() * 10,
                delay: puppet.delay,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            },
          }}
        >
          <div className="relative" style={{ width: puppet.size, height: puppet.size }}>
            <Image
              src={puppet.src || "/placeholder.svg"}
              alt="Floating Puppet"
              width={puppet.size}
              height={puppet.size}
              className="rounded-full opacity-20"
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

