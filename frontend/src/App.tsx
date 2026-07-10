import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import BackgroundDecoration from "./components/BackgroudDecoration";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <BackgroundDecoration />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;