import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import WelcomeMessage from "./components/WelcomeMessage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("loading");

  const handleLoadingComplete = () => {
    setCurrentScreen("welcome");
  };

  const handleWelcomeComplete = () => {
    setCurrentScreen("main");
  };

  return (
    <>
      <CustomCursor />
      {currentScreen === "loading" && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {currentScreen === "welcome" && (
        <WelcomeMessage onWelcomeComplete={handleWelcomeComplete} />
      )}

      {currentScreen === "main" && (
        <>
          <Navbar />
          <Home />
          <About />
          
        </>
      )}
    </>
  );
};

export default App;
