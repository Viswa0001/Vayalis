import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/pages/HomePage";
import Navigation from "./Components/common/Navigation";
import Cookies from "./Components/common/Cookies";
import Footer from "./Components/common/Footer";
import SiteCreationPage from "./Components/pages/SiteCreationPage";
import MaintanencePage from "./Components/pages/MaintanencePage";
import AchievementPage from "./Components/pages/AchievementPage";
import BlogPage from "./Components/pages/BlogPage";
import ToStartUpPage from "./Components/pages/ToStartUpPage";
import WebAgencyPage from "./Components/pages/WebAgencyPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/site-creation" element={<SiteCreationPage />} />
        <Route path="/Maintanence" element={<MaintanencePage />} />
        <Route path="/achievement" element={<AchievementPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/startup" element={<ToStartUpPage />} />
        <Route path="/webagency" element={<WebAgencyPage />} />
      </Routes>
      <Cookies />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
