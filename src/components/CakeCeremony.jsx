import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import birthdaySong from '../assets/perfect.mp3'

const CakeCeremony = ({ setCurrentPage }) => {
  const [stage, setStage] = useState('candle')
  const audioRef = useRef(null)

  const blowCandle = () => {
    setStage('cake')
  }

  const cutCake = () => {
    setStage('celebration')

    // Play Song
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
      }
    }, 300)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-light text-gradient elegant-heading mb-4 tracking-wider">
          Cake Ceremony
        </h1>

        <p className="text-lapis-lazuli handwriting text-xl">
          Make a wish, my Sweetie
        </p>
      </motion.div>

      <AnimatePresence mode="wait">

        {/* Candle Stage */}
        {stage === 'candle' && (
          <motion.div
            key="candle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="text-center max-w-2xl w-full"
          >
            <motion.div className="glass-card p-12 md:p-16">

              {/* Candle */}
              <div className="relative mb-12 flex justify-center items-center h-64">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Candle body */}
                  <div className="w-8 h-32 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full mx-auto shadow-lg"></div>

                  {/* Flame */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.8, 1, 0.8],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="w-6 h-6 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full blur-sm"></div>

                    <div className="w-3 h-3 bg-yellow-200 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                  </motion.div>
                </motion.div>
              </div>

              <h2 className="text-2xl md:text-3xl font-light text-burgundy elegant-heading mb-8 tracking-wider">
                Light the Candle & Make a Wish
              </h2>

              <motion.button
                onClick={blowCandle}
                className="premium-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Blow the Candle
              </motion.button>

            </motion.div>
          </motion.div>
        )}

        {/* Cake Stage */}
        {stage === 'cake' && (
          <motion.div
            key="cake"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="text-center max-w-2xl w-full"
          >
            <motion.div className="glass-card p-12 md:p-16">

              {/* Cake */}
              <div className="relative mb-12 flex justify-center items-center h-64">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="relative">

                    {/* Frosting */}
                    <div className="w-44 h-6 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-full mx-auto mb-0 relative z-20 shadow-sm"></div>

                    {/* Candles */}
                    <div className="flex justify-center gap-4 -mt-2 relative z-30 mb-0">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="relative">

                          <div className="w-2 h-8 bg-gradient-to-b from-pink-200 to-pink-300 rounded-full"></div>

                          <motion.div
                            animate={{
                              y: [0, -3, 0],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2
                            }}
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                          >
                            <div className="w-3 h-3 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full blur-sm"></div>
                          </motion.div>

                        </div>
                      ))}
                    </div>

                    {/* Cake Layers */}
                    <div className="w-40 h-20 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg mx-auto shadow-lg relative z-10"></div>

                    <div className="w-48 h-24 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg mx-auto shadow-lg"></div>
                  </div>
                </motion.div>
              </div>

              <h2 className="text-2xl md:text-3xl font-light text-burgundy elegant-heading mb-8 tracking-wider">
                Time to Cut the Cake!
              </h2>

              <motion.button
                onClick={cutCake}
                className="premium-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cut the Cake
              </motion.button>

            </motion.div>
          </motion.div>
        )}

        {/* Celebration Stage */}
        {stage === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="text-center max-w-2xl w-full"
          >
            <motion.div className="glass-card p-12 md:p-16">

              {/* Cut Cake */}
              <div className="relative mb-12 flex justify-center items-center h-64">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >

                  <div className="flex gap-2">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: -30, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-12 h-20 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg shadow-lg"
                      />
                    ))}
                  </div>

                </motion.div>
              </div>

              <motion.p
                className="text-3xl md:text-4xl font-light text-burgundy elegant-heading mb-8 tracking-wider"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.9, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Happy Birthday PyaariParidhi!
              </motion.p>

              <motion.button
                onClick={() => setCurrentPage('star')}
                className="premium-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Your Star
              </motion.button>

            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Audio */}
      <audio ref={audioRef}>
        <source src={birthdaySong} type="audio/mp3" />
      </audio>

    </div>
  )
}

export default CakeCeremony