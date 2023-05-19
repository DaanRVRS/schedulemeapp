import React from "react";
import "./App.css";
import GetHeader from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBell,
  faCircle,
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
          <section
            id="calendarSwitchSection"
            className="flex flex-row justify-between items-center mt-16"
          >
            <section>
              <table className="text-white">
                <tr>
                  <th className="py-2 px-2 bg-gray-300 text-black rounded-md hover:cursor-pointer">
                    Calendar
                  </th>
                  <th className="py-2 px-2 rounded-md hover:cursor-pointer hover:bg-gray-600 transition ease-in-out">
                    Meetings
                  </th>
                  <th className="py-2 px-2 rounded-md hover:cursor-pointer hover:bg-gray-600 transition ease-in-out">
                    Work
                  </th>
                  <th className="py-2 px-2 rounded-md hover:cursor-pointer hover:bg-gray-600 transition ease-in-out">
                    Tasks
                  </th>
                </tr>
              </table>
            </section>

            <section>
              <p
                id="addNew"
                className="py-2 px-4 text-white bg-red-600 rounded-xl hover:cursor-pointer hover:bg-red-500 transition ease-in-out mr-4"
              >
                + Add New
              </p>
            </section>
          </section>
          <section className="flex flex-row justify-between items-center">
            <section id="today" className="bg-gray-800 mt-16 flex flex-col">
              <section className="flex flex-row justify-start">
                <p className="text-gray-500 mt-5 ml-5 text-2xl">Today</p>
              </section>
              <section className="flex flex-row justify-start">
                <p className="text-white mt-5 ml-5 text-6xl">19</p>
                <section className="flex flex-col mt-7">
                  <p className="text-gray-500">Thursday</p>
                  <p className="text-gray-500">May, 2023</p>
                </section>
              </section>
              <section className="flex flex-row justify-start mt-16 ml-5 text-2xl text-white">
                <p>You have</p>
              </section>
              <section className="flex flex-col justify-center items-center mt-6">
                <div className="text-white py-4 px-10 mt-3 bg-red-500 rounded-2xl">
                  appointment 1
                </div>
                <div className="text-white py-4 px-10 mt-3 bg-blue-500 rounded-2xl">
                  appointment 2
                </div>
                <div className="text-white py-4 px-10 mt-3 bg-green-500 rounded-2xl">
                  appointment 3
                </div>
              </section>
              <section className="flex flex-row justify-start mt-8">
                <p className="text-white ml-5">Upcoming</p>
              </section>
              <section className="flex flex-row justify-start mt-3 ml-5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-orange-500 mt-1"
                />
                <p className="ml-6 text-white">Meeting with boss</p>
              </section>
              <p className="text-gray-500 flex flex-row justify-start ml-16">
                @3.45pm
              </p>
              <section className="flex flex-row justify-start mt-3 ml-5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-yellow-500 mt-1"
                />
                <p className="ml-6 text-white">Meeting with coworker</p>
              </section>
              <p className="text-gray-500 flex flex-row justify-start ml-16">
                @1.15pm
              </p>
              <section className="flex flex-row justify-start mt-3 ml-5">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-pink-500 mt-1"
                />
                <p className="ml-6 text-white">Dinner appointment</p>
              </section>
              <p className="text-gray-500 flex flex-row justify-start ml-16">
                @6.00pm
              </p>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
