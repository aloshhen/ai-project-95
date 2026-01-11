import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const CTA = () => {
  return (
    <div className="bg-[#0A0A0F] py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-bar-secondary to-bar-accent p-1 rounded-3xl inline-block"
        >
          <div className="bg-[#0A0A0F] p-8 rounded-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Ready to Elevate Your Night?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Book your table now and experience the most innovative cocktail bar in the city.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-bar-secondary text-white px-8 py-4 rounded-full text-xl flex items-center space-x-2 mx-auto"
            >
              <span>Book Your Table</span>
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CTA