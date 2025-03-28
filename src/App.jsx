import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Career from "./Pages/Careers";
import SubCareer from "./Pages/SubCareer";
import CareerDetail from "./Pages/SubCareerDetails";
import Background from "./Background";
import "./index.css";
import Strategies from "./Pages/Strategies";
import ScrollToTop from "./Components/ui/ScrollToTop";
import AuthPage from "./Pages/AuthPage";
import ProfilePage from "./Pages/ProfilePage";
// import useThemeStore from "./Context/useThemeStroe";
// import Settings from "./Components/Settings";

function App() {
  // const { theme } = useThemeStore();
  return (
    <div >
      <Router>
        <Background />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/category/:id" element={<SubCareer />} />
          <Route path="/career/:careerName" element={<CareerDetail />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/authentication" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route path="/setting" element={<Settings />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
