import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles/utilities.css'

import Index from './pages/Index.jsx'

import { useColorMode } from './context/UseContextArchive.jsx'
import { ColorModeProvider } from './context/UseContextArchive.jsx'
import AboutNovoTemplate from './components/sections/AboutNovoTemplate.jsx'
import FeaturesRoute from './pages/FeaturesRoute.jsx'
import HeroTemplateNovo from './components/sections/HeroTemplateNovo.jsx'
import AboutRoute from './pages/AboutRoute.jsx'

// Altere aqui para "LP" ou "site"
const mode = 'LP' // só muda isso e o resto se adapta

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColorModeProvider>
    {' '}
    <Router>
      <Routes>
        <Route path="/" element={<Index mode={mode} />} />
        <Route path="/feature" element={<FeaturesRoute />} />
        <Route path="/about" element={<AboutRoute />} />
      </Routes>
    </Router>
  </ColorModeProvider>,
)
