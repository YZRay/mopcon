import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HomePage from "./page/Home/HomePage";
import HostCommunityPage from "./page/HostCommunity/HostCommunityPage";
import TimeMachine from "./page/TimeMachine";
import SpeakerPage from "./page/SpeakerPage/SpeakerPage";
import Ticket from "./page/Ticket";
import Sponsor from "./page/Sponsor";
import MainAgendaPage from "./page/MainAgenda/MainAgendaPage";
import ComAgenda from "./page/ComAgenda";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host-community" element={<HostCommunityPage />} />
        <Route path="/MainAgenda" element={<MainAgendaPage />} />
        <Route path="/ComAgenda" element={<ComAgenda />} />
        <Route path="/time-machine" element={<TimeMachine />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
