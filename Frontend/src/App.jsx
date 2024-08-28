import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Context from './context/Context'
import Navigation from "./views/Navigation";
import useUser from "./context/hooks/useUser";

function App() {
  const globalState = useUser();
  return (
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<Inicio />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
