import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Moodboard from '../pages/Moodboard';
import RitualsAI from '../pages/RitualsAI';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moodboard" element={<Moodboard />}></Route>
          <Route path="/rituals_ai" element={<RitualsAI />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <CanvasApp /> */}
    </>
  );
}

export default App;
