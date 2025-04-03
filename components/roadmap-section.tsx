"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function RoadmapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const phases = [
    {
      title: "Phase 1: Vibes",
      image: "/images/puppet-punk.png",
      items: [
        "Create the dankest website ever",
        "Post memes until our fingers hurt",
        "Convince people we're not just another puppet show",
        "Accidentally become a cult (the good kind)",
        "Achieve legendary 'trust me bro' status",
      ],
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Phase 2: Moon",
      image: "/images/puppet-party.png",
      items: [
        "Number go up (hopefully)",
        "Spam rocket emojis in Telegram",
        "Create merch nobody asked for",
        "Get noticed by at least one crypto influencer",
        "Survive the inevitable 'wen pump' questions",
      ],
      color: "from-cyan-400 to-blue-500",
    },
    {
      title: "Phase 3: ???",
      image: "/images/puppet-fire.png",
      items: [
        "Something something utility",
        "Probably make a DAO (because why not)",
        "Invent buzzwords that make no sense",
        "Convince everyone we have a 'roadmap'",
        "Figure out what we're actually doing",
      ],
      color: "from-yellow-300 to-orange-500",
    },
    {
      title: "Phase 4: Profit",
      image: "/images/puppet-rainbow.png",
      items: [
        "Touch grass (optional)",
        "Build a time machine to buy more $GRUPPETS",
        "Create the Gruppetverse (it's like the metaverse but fluffier)",
        "Achieve meme immortality",
        "Retire to a private island made of felt",
      ],
      color: "from-green-400 to-emerald-600",
    },
  ]

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              "Roadmap"
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our totally serious, definitely not made-up plan for world domination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${phase.color}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold">{phase.title}</h3>
                  <div className="bg-black/50 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs md:text-sm">
                    {index + 1}
                  </div>
                </div>

                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto my-3 md:my-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${phase.color} rounded-full blur-xl opacity-50`}
                  ></div>
                  <div className="relative z-10">
                    <Image
                      src={phase.image || "/placeholder.svg"}
                      alt={phase.title}
                      width={100}
                      height={100}
                      className="rounded-full border-2 border-white/20"
                    />
                  </div>
                </div>

                <ul className="space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mt-2`}></span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

