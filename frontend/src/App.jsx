import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { PhotosContainer } from "./components/PhotosContainer";
import  ButtonsContainer  from "./components/ButtonsContainer"
import "./App.css";

function App() {

  return (
    <>
      <Header />
        <PhotosContainer />
      <Footer />
    </>
  );
}

export default App;
