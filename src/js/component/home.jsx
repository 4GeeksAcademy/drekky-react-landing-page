import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className='container-box'>
      <Navbar />
      <Jumbotron />
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
