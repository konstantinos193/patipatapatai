"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Twitter } from "lucide-react"
import Image from "next/image"

export default function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      color: "bg-[#1DA1F2]",
      url: "https://x.com/gruppetgang",
    },
    {
      name: "Twitter (again)",
      icon: <Twitter className="w-6 h-6" />,
      color: "bg-gradient-to-r from-pink-500 to-cyan-400",
      url: "https://x.com/gruppetgang",
    },
  ]

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Join Us On Twitter
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Be part of the Gruppets family and stay updated on all the fuzzy happenings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Connect With Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center`}>
                      {link.icon}
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Community Stats</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-black/30 rounded-xl p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">69K+</div>
                  <div className="text-white/80 text-sm md:text-base">Twitter Followers</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-500">420+</div>
                  <div className="text-white/80 text-sm md:text-base">Memes Posted</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">80085</div>
                  <div className="text-white/80 text-sm md:text-base">Puppet Enthusiasts</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3 md:p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400">∞</div>
                  <div className="text-white/80 text-sm md:text-base">Vibes</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md px-2 md:px-0">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-8 border border-white/10">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/puppet-group.png"
                    alt="Gruppets Community"
                    width={300}
                    height={150}
                    className="rounded-xl"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center">Follow Us On Twitter</h3>
                <p className="text-white/80 mb-4 md:mb-6 text-center text-sm md:text-base">
                  All news, updates, and memes will be posted on our Twitter account!
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-[#1DA1F2] hover:opacity-90 text-white font-medium py-3 rounded-lg transition-opacity flex items-center justify-center gap-2">
                    <Twitter className="w-5 h-5" />
                    Follow @gruppetgang
                  </button>
                </div>
                <p className="text-white/60 text-xs mt-4 text-center">
                  Don't miss out on the fuzzy madness. Twitter is where all the magic happens!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

