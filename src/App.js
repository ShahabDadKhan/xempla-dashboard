// import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import ResponsiveGrid from "./components/Grid/ResponsiveGrid";
import Navbar from "./components/TheNavbar";
import Header from "./view/Header/Header";
// import TheNavbar from "./components/TheNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="CardDisplay">
        <ResponsiveGrid />
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
