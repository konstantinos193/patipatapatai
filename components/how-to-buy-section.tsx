"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wallet, CreditCard, BarChart3, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowToBuySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      icon: <Wallet className="w-10 h-10 text-cyan-400" />,
      title: "Create a Wallet",
      description: "Set up a Bitcoin wallet that supports Ordinals, such as Xverse or Unisat.",
      color: "border-cyan-400",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-pink-500" />,
      title: "Get Some BTC",
      description: "Purchase BTC from an exchange and transfer it to your Ordinals-compatible wallet.",
      color: "border-pink-500",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-yellow-300" />,
      title: "Deposit BTC to Odin.fun",
      description: "Go to Odin.fun and deposit your BTC into the platform to get started.",
      color: "border-yellow-300",
    },
    {
      icon: <Rocket className="w-10 h-10 text-green-400" />,
      title: "Get $GRUPPETS",
      description: "Transactions happen directly within Odin.fun - no contract address or traditional swapping needed.",
      color: "border-green-400",
    },
  ]

  return (
    <section id="how-to-buy" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
              How to Get $GRUPP
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join the Gruppets community on Odin.fun in a few simple steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-pink-500 to-yellow-300 hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col md:flex-row gap-6"
                >
                  <div className="flex-shrink-0 flex md:flex-col items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-full bg-black flex items-center justify-center border-2 ${step.color} z-10`}
                    >
                      {step.icon}
                    </div>
                    <div className="md:hidden h-px w-full bg-gradient-to-r from-cyan-400 to-transparent"></div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex-1">
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <span className="bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Button
              className="bg-gradient-to-r from-pink-500 to-cyan-400 hover:opacity-90 text-white text-lg px-8 py-6"
              onClick={() => window.open("https://odin.fun", "_blank")}
            >
              Visit Odin.fun
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

