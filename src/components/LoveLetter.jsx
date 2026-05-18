import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoveLetter = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const letterContent = `
My PyaariParidhi,

I Don't know how to write letter at all...Thodu sa CHATGPT ki Help Liyaa hu maine vaise
So Sorryyy in Advance.

Sweetie, In My Universe you are my only star (ParidhiStar) (Aur Apke Star System mai ek akela PLANET rhena chaata hu humesha). 
Every moment with you feels like a beautiful dream I never want to wake up from.

Cutieee, your smile lights up my entire universe. 
When you laugh, the whole COSMOS seem to dance, and when you upset (Mostly Mere Vajese hi hoti h), 
my heart breaks into a million pieces and I want to fix it all for you <3.

Bacha, you've taught me what true love really means. 
It's not just about the big moments, but the small ones too - 
the late-night talks, the silly jokes (jo ki humne boht time se nhi maare h), Vo Football Game (Jismai mai jaada acha hu),
the way you look at me when you think I'm not looking, the way you get excited about things.
 
I wouldn't trade you for anything in this world. 
Your quirks, your madness, your perfect imperfections - 
that's what makes you YOU, and that's why I love you.

On your special day, I want to promise you something:
I will be there for you, through every storm and every sunshine.
I will hold your hand when you're scared and celebrate with you when you win (Boht Saara Slay krna h, Baby).
I will love you today, tomorrow, and for all the days to come.

You are my ParidhiStar, my everything, my forever.

With all my love and heart,
Forever Yours Ashutosh (DHAKKAN)
  `

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-24">
      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            className="glass-card p-12 md:p-16 cursor-pointer"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.01 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-burgundy elegant-heading mb-4 tracking-wider">
              A Letter For You
            </h2>
            <p className="text-burgundy handwriting text-lg">
              Click to open, my Sweetie
            </p>
          </motion.div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-4xl"
          >
            <motion.div
              className="glass-card p-8 md:p-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="love-paper p-8 md:p-12 rounded-lg border-2 border-cherry-pink/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl md:text-4xl font-light text-burgundy elegant-heading mb-8 text-center tracking-wider">
                  My Letter to You
                </h2>
                <div className="text-lg md:text-xl text-burgundy/80 handwriting leading-loose whitespace-pre-line">
                  {letterContent}
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              onClick={() => setCurrentPage('cake')}
              className="premium-btn mt-8 w-full max-w-md mx-auto block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Next: Cut the Cake
            </motion.button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default LoveLetter
