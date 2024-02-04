import React from "react";
import PostApp from "./components/PostApp";
import "../src/App.css";
import Navbar from "./components/Navbar";



const App=()=>{

  return (
    <div>
    <Navbar/>
      <PostApp/>
    </div>
  )
}


export default App;