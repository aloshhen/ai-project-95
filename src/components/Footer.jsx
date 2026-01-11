import React from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-display gradient-text font-bold mb-4">Urban Bar</h3>
          <p className="text-gray-400">Redefining urban nightlife with innovative cocktails and unforgettable experiences.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-bar-secondary hover:text-bar-accent">Menu</a></li>
            <li><a href="#" className="text-bar-secondary hover:text-bar-accent">Book a Table</a></li>
            <li><a href="#" className="text-bar-secondary hover:text-bar-accent">Events</a></li>
            <li><a href="#" className="text-bar-secondary hover:text-bar-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-bar-secondary hover:text-bar-accent"><Instagram size={24} /></a>
            <a href="#" className="text-bar-secondary hover:text-bar-accent"><Twitter size={24} /></a>
            <a href="#" className="text-bar-secondary hover:text-bar-accent"><Facebook size={24} /></a>
          </div>
          <p className="mt-4 text-gray-400">123 Urban Street, City Center</p>
          <p className="text-gray-400">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        © 2024 Urban Bar. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer