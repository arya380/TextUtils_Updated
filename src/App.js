import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "./App.scss";

import TextForm from "./components/TextForm";
import { BrowserRouter as Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Navbar title="Textutils" abouttext="About"></Navbar> */}
      <div className=" container my-3   text-2xl ">
        {<TextForm heading="Enter The Text To Analyze Below"></TextForm>}
      </div>
    </>
  );
}

export default App;
