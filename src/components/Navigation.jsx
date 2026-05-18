import { motion } from 'framer-motion'

const Navigation = ({ setCurrentPage, currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'letter', label: 'Letter' },
    { id: 'cake', label: 'Cake' },
    { id: 'star', label: 'Star' },
    // { id: 'gallery', label: 'Gallery' },
    // { id: 'memories', label: 'Memories' },
  ]

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card px-8 py-4 flex gap-8 items-center"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`text-sm tracking-widest transition-all ${
              currentPage === item.id 
                ? 'text-burgundy font-medium' 
                : 'text-lapis-lazuli hover:text-burgundy'
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </nav>
  )
}

export default Navigation
