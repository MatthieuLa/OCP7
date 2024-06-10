import "./styles/main.css";
import "./styles/404.css";
import "./styles/reset.css";
import "./styles/responsive.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  /*
    useState
    useEffect
    (useMemo)
    (useCallback)
  */

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
