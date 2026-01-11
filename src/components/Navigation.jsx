import React from 'react'
import { Menu, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-display text-white">Urban Bar</div>
        <div className="flex items-center space-x-4">
          <motion.a 
            href="#menu" 
            whileHover={{ scale: 1.1 }}
            className="text-bar-secondary hover:text-bar-accent transition-colors"
          >Menu</motion.a>
          <motion.a 
            href="#book" 
            whileHover={{ scale: 1.1 }}
            className="text-bar-secondary hover:text-bar-accent transition-colors"
          >Book Table</motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-bar-accent text-black px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <Phone size={16} />
            <span>Contact</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation