import { Route, Routes } from "react-router-dom";
import Home from "./components/view/Home";
import Office from "./components/view/Office";
import Animation from "./components/home/Animation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/office" element={<Office />}></Route>
        <Route path="/animation" element={<Animation />}/><Route/>
      </Routes>
    </>
  );
}

export default App;
