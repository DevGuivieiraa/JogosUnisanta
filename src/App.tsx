import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Participants from './pages/Participants';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/participantes" element={<Participants />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
