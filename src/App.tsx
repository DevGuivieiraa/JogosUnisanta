import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Participants from './pages/Participants';
import History from './pages/History';
import Transmissao from './pages/Transmissao';
import MelhoresAtletas from './pages/MelhoresAtletas';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/participantes" element={<Participants />} />
          <Route path="/melhores-atletas" element={<MelhoresAtletas />} />
          <Route path="/historia" element={<History />} />
          <Route path="/transmissao" element={<Transmissao />} />
        </Routes>
      </AuthProvider>

    </Router>
  );
}

export default App;
