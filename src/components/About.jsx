import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, Users } from 'lucide-react'

const stepData = [
  {
    icon: Calendar,
    title: 'Reserve Your Table',
    description: 'Select your preferred date and time through our seamless online booking system.'
  },
  {
    icon: Users,
    title: 'Arrive & Enjoy',
    description: 'Our staff will warmly welcome you and guide you to your perfectly prepared table.'
  },
  {
    icon: Clock,
    title: 'Craft Your Night',
    description: 'Explore our menu, enjoy handcrafted cocktails, and immerse yourself in the Urban Bar experience.'
  }
]

const StepCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#14141F] p-6 rounded-2xl space-y-4 text-center"
  >
    <div className="bg-bar-secondary/10 p-3 rounded-full inline-block">
      <Icon className="text-bar-secondary mx-auto" size={32} />
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

const About = () => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display gradient-text font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your perfect evening is just three simple steps away.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stepData.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About