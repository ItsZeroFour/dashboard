import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Map from "./pages/map/Map";
import Header from "./components/header/Header";
import Psychotypes from "./pages/prychotypes/Psychotypes";
import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [filterChoose, setFilterChoose] = useState("all");

  return (
    <div className="page">
      {window.innerWidth >= 1400 ? (
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
                <Route
                  path="/psychotypes"
                  element={<Psychotypes filterChoose={filterChoose} />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </aside>
          </main>
        </div>
      ) : (
        <div className="notification">
          <div>
            <h1>Извините, но сайт доступен только для ПК и ноутбуков</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
