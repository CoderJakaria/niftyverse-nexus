import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateNft from "./pages/CreateNft";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Transcation from "./pages/Transcation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-nft" element={<CreateNft />} />
        <Route exact path="/transcation" element={<Transcation />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
