"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-400">
              What Are Gruppets?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A colorful community of fuzzy creatures taking over the crypto world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border-4 border-pink-500 transform rotate-3">
                  <Image
                    src="/images/puppet1.png"
                    alt="Gruppet Character"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-yellow-300 transform -rotate-3">
                  <Image
                    src="/images/puppet-yellow.png"
                    alt="Gruppet Character"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden border-4 border-cyan-400 transform -rotate-3">
                  <Image
                    src="/images/puppet-blue.png"
                    alt="Gruppet Character"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-green-400 transform rotate-3">
                  <Image
                    src="/images/puppet-unicorn.png"
                    alt="Gruppet Character"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 md:space-y-6 px-1"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">Fuzzy Friends</h3>
              <p className="text-white/80">
                Gruppets are a collection of colorful, fuzzy creatures with unique personalities. Each Gruppet brings
                its own vibe to our vibrant ecosystem.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-pink-500">Community Driven</h3>
              <p className="text-white/80">
                Our community is just vibing and posting memes. No voting, no governance, just pure chaos and fun. We're all just here for the ride!
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-300/50 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Meme Power</h3>
              <p className="text-white/80">
                We harness the power of memes and viral content to spread the word about Gruppets. Our fuzzy faces are
                designed to be shared!
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-colors">
              <h3 className="text-2xl font-bold mb-3 text-green-400">Zero Utility</h3>
              <p className="text-white/80">
                We're not about utility, we're about vibes! Join the most fun community in crypto where we celebrate the art of doing absolutely nothing and loving every minute of it. Pure entertainment, zero stress!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

