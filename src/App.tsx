import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Home, About, Resume } from './components';
import './App.css';

/**
 * App routes.
 */
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default App;
