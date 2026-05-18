import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = ({ setCurrentPage }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Placeholder gallery items - replace with real images
  const galleryItems = [
    { id: 1, title: 'Our First Date', description: 'Where it all began...' },
    { id: 2, title: 'Ferris Wheel', description: 'Heights and you!' },
    { id: 3, title: 'Beach Day', description: 'Sun, sand, and my Sweetie' },
    { id: 4, title: 'Christmas', description: 'Winter magic together' },
    { id: 5, title: 'Last Birthday', description: 'Making memories' },
    { id: 6, title: 'Spring Walks', description: 'Flowers and love' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center px-4 pb-24 pt-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-light text-gradient elegant-heading mb-4 tracking-wider">
          Our Gallery
        </h1>
        <p className="text-lapis-lazuli handwriting text-xl">
          Beautiful moments with my Sweetie
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(item)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-gradient-to-br from-misty-rose to-cherry-pink/30 rounded-lg p-12 mb-4 flex items-center justify-center">
              <span className="text-5xl text-burgundy/50">✦</span>
            </div>
            <h3 className="font-medium text-burgundy handwriting text-lg">{item.title}</h3>
            <p className="text-lapis-lazuli text-sm handwriting">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-burgundy/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="glass-card p-8 max-w-md w-full text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-misty-rose to-cherry-pink/30 rounded-lg p-12 mb-6 flex items-center justify-center">
                <span className="text-8xl text-burgundy/50">✦</span>
              </div>
              <h2 className="text-3xl font-light text-burgundy elegant-heading mb-4">
                {selectedImage.title}
              </h2>
              <p className="text-lapis-lazuli handwriting text-xl mb-6">
                {selectedImage.description}
              </p>
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="premium-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setCurrentPage('memories')}
        className="premium-btn mt-8"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Our Memories
      </motion.button>
    </div>
  )
}

export default Gallery
