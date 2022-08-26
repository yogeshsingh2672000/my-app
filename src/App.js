import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="MyApp" />
      <TextForm title="Enter the text to analyze" />
      {/* <NavBar /> */}
    </>
  );
}

export default App;
