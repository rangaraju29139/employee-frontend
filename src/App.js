import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact Component={ListEmployeeComponent} />
            <Route path="/employees" exact Component={ListEmployeeComponent} />
            <Route
              path="/create-employee"
              Component={CreateEmployeeComponent}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
