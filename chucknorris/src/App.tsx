import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";
import { JokePage } from "./Pages/JokePage/JokePage";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return ( 
    <div>
      <CssBaseline />
      <NavBar />
        <div style={{paddingLeft:300 }}>
                <Routes>

            <Route path="/" element={<JokePage />} />
            <Route path="/:category" element={<JokePage />} />
                  </Routes>

        </div>
     
    </div>
  );
}

export default App;
