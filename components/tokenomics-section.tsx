"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export default function TokenomicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const data = [
    { name: "Diamond Hands", value: 42.0, color: "#06b6d4" }, // cyan-500
    { name: "Elon's Secret Stash", value: 6.9, color: "#ec4899" }, // pink-500
    { name: "Moon Mission Fuel", value: 15, color: "#eab308" }, // yellow-500
    { name: "Lambo Fund", value: 13.37, color: "#22c55e" }, // green-500
    { name: "Ramen Noodles Budget", value: 22.73, color: "#a855f7" }, // purple-500
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10">
          <p className="font-medium text-white">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-400">
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            $GRUPPETS is designed with absolutely no planning whatsoever
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[300px] md:h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={150}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => {
                    const percentValue = (percent * 100).toFixed(0)
                    // On smaller screens, only show percentage
                    if (window.innerWidth < 768) {
                      return `${percentValue}%`
                    }
                    // On larger screens, show name and percentage
                    return `${name} ${percentValue}%`
                  }}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-white">Token Details</h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Token Name</span>
                  <span className="font-medium text-white">Gruppets</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Token Symbol</span>
                  <span className="font-medium text-white">$GRUPPETS</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Total Supply</span>
                  <span className="font-medium text-white">21,000,000 $GRUPPETS</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Network</span>
                  <span className="font-medium text-white">odin.fun</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Tax</span>
                  <span className="font-medium text-green-400">0% Buy / 0% Sell</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-white">Distribution</h3>
              <div className="space-y-4">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <div className="flex-1 flex justify-between items-center">
                      <span className="text-white/80">{item.name}</span>
                      <span className="font-medium text-white">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

