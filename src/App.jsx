import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, Bio, Portfolio, Contact } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App