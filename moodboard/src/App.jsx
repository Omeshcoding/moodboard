import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../src/pages/Home';
import Moodboard from '../src/pages/Moodboard';
import RitualsAI from '../src/pages/RitualsAI';
import Login from '../src/pages/Login';
import OnBoarding from '../src/pages/OnBoarding';
import CreateProfile from '../src/pages/CreateProfile';
import DashBoard from '../src/pages/DashBoard';
import Chat from './components/Chat/Chat';
import PlanGround from '../src/pages/PlanGround';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moodboard" element={<Moodboard />}></Route>
          <Route path="/ritualsai" element={<RitualsAI />}></Route>
          <Route path="/planground" element={<PlanGround />}></Route>

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
