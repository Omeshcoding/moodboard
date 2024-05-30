import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Moodboard from '../pages/Moodboard';
import RitualsAI from '../pages/RitualsAI';
import Login from '../pages/Login';
import OnBoarding from '../pages/OnBoarding';
import CreateProfile from '../pages/CreateProfile';
import DashBoard from '../pages/DashBoard';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moodboard" element={<Moodboard />}></Route>
          <Route path="/rituals_ai" element={<RitualsAI />}></Route>

          <Route path="/onboarding" element={<OnBoarding />}></Route>
          <Route path="/createprofile" element={<CreateProfile />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
