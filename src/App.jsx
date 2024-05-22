import "./styles/main.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  /*
    useState
    useEffect
    (useMemo)
    (useCallback)
  */

  return (
    <>
      <main>
        <Header />
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
