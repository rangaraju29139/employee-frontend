import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="container">
        <ListEmployeeComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
