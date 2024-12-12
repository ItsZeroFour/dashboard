import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Map from "./pages/map/Map";
import Header from "./components/header/Header";
import Psychotypes from "./pages/prychotypes/Psychotypes";
import { useState } from "react";

function App() {
  const [filterChoose, setFilterChoose] = useState("all");

  return (
    <div className="page">
      <div className="container">
        <main className="wrapper">
          <Nav />

          <aside className="main__side">
            <Header
              filterChoose={filterChoose}
              setFilterChoose={setFilterChoose}
            />

            <Routes>
              <Route path="/map" element={<Map />} />
              <Route path="/psychotypes" element={<Psychotypes filterChoose={filterChoose} />} />
            </Routes>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
