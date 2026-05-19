import { motion } from 'framer-motion'
import paridhiPhoto from '../assets/paridhi.jpeg'

const StarPage = ({ setCurrentPage }) => {

  // ===== URLS =====
  const siriusPhoto =
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Close-up_of_Sirius.jpg"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-light text-gradient elegant-heading mb-4 tracking-wider">
          Your Special Star
        </h1>

        <p className="text-lapis-lazuli handwriting text-xl">
          The Sirius Star — My ParidhiStar
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="glass-card p-8 md:p-12 max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >

        {/* Star Section */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-lapis-lazuli to-silver-lake rounded-lg p-12 relative overflow-hidden border border-cherry-pink/20">

            {/* Animated Stars */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/20 text-xs"
                initial={{
                  x: Math.random() * 100 + '%',
                  y: Math.random() * 100 + '%',
                  opacity: 0
                }}
                animate={{
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              >
                ✦
              </motion.div>
            ))}

            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-6 text-cherry-pink"
              >
                ✦
              </motion.div>

              <h2 className="text-3xl font-light text-white elegant-heading mb-2 tracking-wider">
                Sirius — The Brightest Star
              </h2>

            </div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="bg-white/80 border border-cherry-pink/30 rounded-lg p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-burgundy elegant-heading mb-8 text-center tracking-wider">
            Why I See Sirius as My ParidhiStar
          </h3>

          <div className="text-burgundy/80 handwriting text-lg md:text-xl leading-loose space-y-6">

            <p>
              Every time I look up at the night sky and see Sirius shining brighter than all the other stars,
              I'm reminded of you. Just like Sirius stands out among millions of stars,
              you shine brighter than anyone else in my life.
            </p>

            <p>
              Whenever I see that star, memories of us flood my mind our first meeting, our laughs,
              our silly moments when you're being extra happy, extra cute, and all the beautiful times we've shared.
              Like humara saath mai lab mai beth kr Tom and Jerry dekhna, canteen mai bethna,
              class mai bethna aur tujhe book mai drawing krte hue dekhna.
            </p>

            <p>
              Just as Sirius has guided travelers for thousands of years, you guide me through life.
              You're my North Star, my constant, my forever.
            </p>

            <p className="text-center text-2xl font-light text-burgundy elegant-heading tracking-wider">
              My ParidhiStar, the brightest light in my universe.
            </p>
          </div>
        </motion.div>

        {/* Photos Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >

          {/* Sirius Photo */}
          <div className="bg-white/80 border border-cherry-pink/30 rounded-lg p-8 text-center">

            <div className="overflow-hidden rounded-lg border border-cherry-pink/20 mb-6 shadow-lg">
              <img
                src={siriusPhoto}
                alt="Sirius Star"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <p className="text-lapis-lazuli handwriting text-lg">
              The real Sirius in the night sky ✦
            </p>
          </div>

          {/* Paridhi Photo */}
          <div className="bg-white/80 border border-cherry-pink/30 rounded-lg p-8 text-center">

            <div className="overflow-hidden rounded-lg border border-cherry-pink/20 mb-6 shadow-lg">
              <img
                src={paridhiPhoto}
                alt="Paridhi"
                className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <p className="text-lapis-lazuli handwriting text-lg">
              My ParidhiStar ✨
            </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default StarPage