import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Moodboard from '../pages/Moodboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moodboard" element={<Moodboard />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <CanvasApp /> */}
    </>
  );
}

export default App;
