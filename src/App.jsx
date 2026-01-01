import './App.css'
import { Route, Routes } from 'react-router-dom';
import GymHourLanding from './Landing/Landing';
import LandingGymOne from './Landing/LandingGymOne/LandingGymOne';
import LandingGymTwo from './Landing/LandingGymTwo/LandingGymTwo';
import LandingGymThree from './Landing/LandingGymThree/LandingGymThree';
import LandingGymFour from './Landing/LandingGymFour/LandingGymFour';
import LandingTrainerOne from './Landing/LandingTrainerOne/LandingTrainerOne';
import LandingTrainerTwo from './Landing/LandingTrainerTwo/LandingPageTwo';
import LandingTrainerThree from './Landing/LandingTrainerThree/LandingTrainerThree';

function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={<GymHourLanding />} />
        <Route path="/landing-gym-one" element={<LandingGymOne />} />
        <Route path="/landing-gym-two" element={<LandingGymTwo />} />
        <Route path="/landing-gym-three" element={<LandingGymThree />} />
        <Route path="/landing-gym-four" element={<LandingGymFour />} />
        <Route path="/landing-trainer-one" element={<LandingTrainerOne />} />
        <Route path="/landing-trainer-two" element={<LandingTrainerTwo />} />
        <Route path="/landing-trainer-three" element={<LandingTrainerThree />} />
     </Routes>
    </>
  )
}

export default App
