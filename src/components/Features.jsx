import React from 'react'
import { motion } from 'framer-motion'
import { Cocktail, Music, Star } from 'lucide-react'

const featureData = [
  {
    icon: Cocktail,
    title: 'Innovative Mixology',
    description: 'Experience cutting-edge cocktail techniques and unique flavor combinations crafted by our expert mixologists.'
  },
  {
    icon: Music,
    title: 'Live Music Nights',
    description: 'Enjoy live performances from local and international artists every weekend, creating an electrifying atmosphere.'
  },
  {
    icon: Star,
    title: 'Premium Experience',
    description: 'Immerse yourself in a luxurious setting with top-shelf spirits, carefully curated ambiance, and exceptional service.'
  }
]

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#0A0A0F] p-6 rounded-2xl space-y-4 border border-bar-secondary/20"
  >
    <div className="bg-bar-secondary/10 p-3 rounded-full inline-block">
      <Icon className="text-bar-secondary" size={32} />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

const Features = () => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display gradient-text font-bold mb-4">
            Why Urban Bar?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're not just a bar, we're an experience that redefines urban nightlife.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features