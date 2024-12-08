import React from 'react'
import Navbar from '../Scenes/Navbar';
import Landing from '../Scenes/Landing';
import ModelPage from "../Scenes/ModelPage";
import Contact from "../Scenes/Contact";
import Footer from '../Scenes/Footer';


const home = () => {
  return (
    <>
    <Navbar />
    <Landing />
    {/* <MySkills /> */}
    <ModelPage />
    <Contact />
    <Footer />
    </>
  )
}

export default home