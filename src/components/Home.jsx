import { motion } from 'framer-motion'

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-light text-gradient mb-6 elegant-heading tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Happy Birthday
        </motion.h1>
        
        <motion.h2
          className="text-4xl md:text-6xl font-light text-burgundy mb-12 elegant-heading tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Paridhi
        </motion.h2>

        <motion.div
          className="glass-card p-10 md:p-16 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-xl md:text-2xl text-burgundy handwriting leading-loose mb-6">
            My dearest Sweetie,
          </p>
          <p className="text-lg md:text-xl text-burgundy handwriting leading-loose mb-6">
            On this special day, I want you to know how much you mean to me. 
            You're the light in my life, the reason I smile every day. 
            May all your dreams come true.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-6 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => setCurrentPage('letter')}
            className="premium-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Read My Letter
          </motion.button>
          
          <motion.button
            onClick={() => setCurrentPage('cake')}
            className="premium-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cut the Cake
          </motion.button>

          <motion.button
            onClick={() => setCurrentPage('star')}
            className="premium-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Your Star
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
