import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./page/Home";
import HostCommunity from "./page/HostCommunity";
import TimeMachine from "./page/TimeMachine";
import Speaker from "./page/Speaker";
import Ticket from "./page/Ticket";
import Sponsor from "./page/Sponsor";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host-community" element={<HostCommunity />} />
        <Route path="/time-machine" element={<TimeMachine />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
