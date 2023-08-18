import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/host-community" element={<HostCommunity />} />
        <Route path="/time-machine" element={<TimeMachine />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
