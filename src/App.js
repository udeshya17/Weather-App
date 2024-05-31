import React from "react";
import "./styles.css";
import ButtonAppBar from "./components/AppBar";
import SearchBox from "./components/SearchBox";

export default function App() {
  return (
    <div className="App">
      <video className="video-background" autoPlay loop muted>
        <source
          src="https://cdn.pixabay.com/video/2017/06/05/9584-220312371_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <ButtonAppBar />
        <SearchBox />
      </div>
    </div>
  );
}
