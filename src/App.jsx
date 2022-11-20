import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import CardDashboard from "./components/CardComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <div>
        <CardDashboard />
      </div>
    </div>
  );
}

export default App;
