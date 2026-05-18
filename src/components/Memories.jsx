import { useState } from 'react'
import { motion } from 'framer-motion'

const Memories = ({ setCurrentPage }) => {
  const [currentMemory, setCurrentMemory] = useState(0)

  const memories = [
    {
      title: "The Day We Met",
      content: "I still remember that day like it was yesterday. You walked into the room and suddenly everything else faded away. Your smile, your laugh, the way you looked at me - I knew right then that my life was about to change forever.",
    },
    {
      title: "Our First 'I Love You'",
      content: "It was a simple moment, but it meant everything. We were just sitting there, talking about nothing and everything at the same time. When you said those three words, my heart skipped a beat. I knew I had found my person.",
    },
    {
      title: "When You Were Being BUNTY",
      content: "Remember that time you tried to cook and almost burned down the kitchen? Or when you insisted on giving me directions and got us completely lost? Those moments when you're being a total BUNTY are some of my favorites. They show your perfectly imperfect self.",
    },
    {
      title: "Our Late Night Talks",
      content: "Those conversations that go on until 3 AM, talking about dreams, fears, and everything in between. Those are the moments I treasure most. Just you, me, and the quiet night, sharing our souls with each other.",
    },
    {
      title: "You Supporting Me",
      content: "When I was going through a tough time, you were there. You didn't try to fix everything, you just held me and let me know I wasn't alone. That's the kind of love you give - unconditional, unwavering, and absolutely beautiful.",
    },
    {
      title: "Every Day With You",
      content: "It's not just the big moments. It's the small things too - morning coffee together, your silly jokes, the way you scrunch your nose when you're thinking, the comfort of just being in the same room. Every day with you is a gift I cherish.",
    }
  ]

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % memories.length)
  }

  const prevMemory = () => {
    setCurrentMemory((prev) => (prev - 1 + memories.length) % memories.length)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-light text-gradient elegant-heading mb-4 tracking-wider">
          Our Memories
        </h1>
        <p className="text-lapis-lazuli handwriting text-xl">
          Moments I'll never forget, my Sweetie
        </p>
      </motion.div>

      <motion.div
        className="glass-card p-8 md:p-12 max-w-3xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          key={currentMemory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-misty-rose to-cherry-pink/30 rounded-lg p-8 mb-6 border border-cherry-pink/20">
            <h2 className="text-3xl font-light text-burgundy elegant-heading mb-6 text-center tracking-wider">
              {memories[currentMemory].title}
            </h2>
            <p className="text-burgundy/80 handwriting text-lg md:text-xl leading-relaxed">
              {memories[currentMemory].content}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-between items-center mb-6">
          <motion.button
            onClick={prevMemory}
            className="px-6 py-3 bg-gradient-to-r from-burgundy to-lapis-lazuli text-white rounded-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ← Previous
          </motion.button>
          
          <div className="flex gap-2">
            {memories.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentMemory ? 'bg-burgundy' : 'bg-cherry-pink/50'
                }`}
                onClick={() => setCurrentMemory(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextMemory}
            className="px-6 py-3 bg-gradient-to-r from-lapis-lazuli to-burgundy text-white rounded-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next →
          </motion.button>
        </div>

        <motion.div className="text-center">
          <p className="text-lapis-lazuli handwriting">
            Memory {currentMemory + 1} of {memories.length}
          </p>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => setCurrentPage('star')}
        className="premium-btn mt-8"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Back to Your Star
      </motion.button>
    </div>
  )
}

export default Memories
