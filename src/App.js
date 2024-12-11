import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Map from "./pages/map/Map";
import Header from "./components/header/Header";
import Psychotypes from "./pages/prychotypes/Psychotypes";

function App() {
  return (
    <div className="page">
      <div className="container">
        <main className="wrapper">
          <Nav />

          <aside className="main__side">
            <Header />

            <Routes>
              <Route path="/map" element={<Map />} />
              <Route path="/psychotypes" element={<Psychotypes />} />
            </Routes>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
