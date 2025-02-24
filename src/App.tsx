import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Components from './pages/components';
import State from './pages/state';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/state" element={<State />} />
      </Routes>
    </div>
  );
};

export default App;
