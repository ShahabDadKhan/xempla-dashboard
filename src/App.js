// import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import ResponsiveGrid from "./components/Grid/ResponsiveGrid";
import Navbar from "./components/TheNavbar";
import Header from "./view/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="CardDisplay">
        <ResponsiveGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
