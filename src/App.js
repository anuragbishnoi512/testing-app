import { Route, Routes } from "react-router-dom";
import Home from "./components/view/Home";
import Office from "./components/view/Office";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/office" element={<Office />}></Route>
      </Routes>
    </>
  );
}

export default App;
