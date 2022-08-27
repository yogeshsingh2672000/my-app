import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="MyApp" />
      <TextForm title="Enter the text to analyze" />
      {/* <About /> */}
    </>
  );
}

export default App;
