import Labs from "./Labs";
import HomePage from "./Landingpage";
import { HashRouter,Route, Routes } from "react-router-dom";  
import Kambaz from "./Kambaz";
import "./Kambaz/styles.css";
export default function App() {
  return (
    <HashRouter>
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>

    </div>
  </HashRouter>
);}
