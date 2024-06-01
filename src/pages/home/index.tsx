import React from "react";
import "./home.css";

export default function Home() {
    return (
      <div className="home">
        <div className="home-content">
          <div className="logo"></div>
          <div className="buttons">
            <a className="a" href="/play"><button className="button">Play</button></a>
            <a className="a" href="/dequebuilding"><button className="button">Build Deck</button></a>
            <button className="button">Settings</button>
            <button className="button">Quit</button>
          </div>
        </div>
      </div>
    )
}