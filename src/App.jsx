import { Result } from "./assets/RESULT/Reasult";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./assets/component/Home/Nav";
import { Footer } from "./assets/component/Home/Footer";

import { About } from "./assets/component/About/About";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { Contact } from "./assets/component/Contact/Contact";
import { Work } from "./assets/component/Work/Work";

function App() {
  const [confettiActive, setConfettiActive] = useState(false);

  const start = () => {
    setConfettiActive(true);
  };

  const stop = () => {
    setConfettiActive(false);
  };

  useEffect(() => {
    start();

    const timer = setTimeout(() => {
      stop();
    }, 3000);

    return () => {
      clearTimeout(timer);
      stop();
    };
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/">
          <Route index element={<Result />} />
          <Route path="/home" element={<Result />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="Work" element={<Work/>}/>
        </Route>
      </Routes>
      <Footer />
<div >

      {confettiActive && (
        <Confetti
          width={1000}
          height={window.innerHeight}
          tweenDuration={2000}
        />
      )}
</div>

{/* <div className="xl:inline">

      {confettiActive && (
        <Confetti
          width={10000}
          height={window.innerHeight}
          tweenDuration={2000}
        />
      )}
</div> */}
    </>
  );
}

export default App;
