import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import LoveLetter from './components/LoveLetter'
import CakeCeremony from './components/CakeCeremony'
import StarPage from './components/StarPage'
import Gallery from './components/Gallery'
import Memories from './components/Memories'
import Navigation from './components/Navigation'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />
      case 'letter':
        return <LoveLetter setCurrentPage={setCurrentPage} />
      case 'cake':
        return <CakeCeremony setCurrentPage={setCurrentPage} />
      case 'star':
        return <StarPage setCurrentPage={setCurrentPage} />
      case 'gallery':
        return <Gallery setCurrentPage={setCurrentPage} />
      case 'memories':
        return <Memories setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
