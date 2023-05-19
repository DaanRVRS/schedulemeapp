import React from "react";
import "./App.css";
import GetHeader from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      {/* container of page */}
      <GetHeader />
      <section
        id="main"
        className="flex flex-row-reverse justify-between bg-gray-700"
      >
        <section id="rightContainer" className="flex flex-col">
          <section
            id="topSection"
            className="flex flex-row justify-between items-center"
          >
            <section className="flex flex-col items-center justify-center">
              <h1 className="text-white text-2xl mt-5">Scheduling</h1>
            </section>
            <section className="flex flex-row items-center justify-center mr-5">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2xl"
                id="topIcon"
                className="text-white"
              />
              <FontAwesomeIcon
                icon={faBell}
                size="2xl"
                id="topIcon"
                className="text-white"
              />
              <section className="flex flex-col">
                <p className="ml-2 text-white">username</p>
                <p className="ml-2 text-gray-500 text-sm">employee</p>
              </section>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-gray-500 ml-1 mt-2"
              />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
