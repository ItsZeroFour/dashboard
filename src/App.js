import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Map from "./pages/map/Map";
import Header from "./components/header/Header";

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
            </Routes>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
