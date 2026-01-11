import React from 'react'
import { motion } from 'framer-motion'
import { Cocktail, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="min-h-screen bg-black flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-display gradient-text font-bold">
            Urban Bar Experience
          </h1>
          <p className="text-xl text-gray-300">
            Discover innovative cocktails crafted by world-class mixologists in a stunning urban atmosphere.
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-bar-secondary text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <span>Book a Table</span>
              <ChevronRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-bar-secondary text-bar-secondary px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <Cocktail size={20} />
              <span>View Menu</span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block"
        >
          <img 
            src="https://source.unsplash.com/800x600/?cocktail,bar" 
            alt="Urban Bar Experience" 
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero