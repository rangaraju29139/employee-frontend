import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListEmployeeComponent />} />
            <Route
              path="/employees"
              exact
              element={<ListEmployeeComponent />}
            />
            <Route
              path="/create-employee"
              element={<CreateEmployeeComponent />}
            />

            <Route
              path="/update-employee/:id"
              {...this.props}
              element={<UpdateEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
