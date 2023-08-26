import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HomePage from "./page/Home/HomePage";
import { lazy, Suspense } from "react";
const HostCommunityPage = lazy(() =>
  import("./page/HostCommunity/HostCommunityPage")
);
const TimeMachinePage = lazy(() =>
  import("./page/TimeMachine/TimeMachinePage")
);
const SpeakerPage = lazy(() => import("./page/SpeakerPage/SpeakerPage"));
const TicketPage = lazy(() => import("./page/Ticket/TicketPage"));
const SponsorPage = lazy(() => import("./page/Sponsor/SponsorPage"));
const MainAgendaPage = lazy(() => import("./page/MainAgenda/MainAgendaPage"));
const ComAgendaPage = lazy(() => import("./page/ComAgenda/ComAgendaPage"));

function App() {
  return (
    <HashRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/host-community" element={<HostCommunityPage />} />
          <Route path="/MainAgenda" element={<MainAgendaPage />} />
          <Route path="/ComAgenda" element={<ComAgendaPage />} />
          <Route path="/time-machine" element={<TimeMachinePage />} />
          <Route path="/speaker" element={<SpeakerPage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </HashRouter>
  );
}

export default App;
