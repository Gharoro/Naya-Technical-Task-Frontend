import React, { useState } from "react";
import DownCaret from "../assets/svg/caret.svg";
import Add from "../assets/svg/add.svg";

export default function Dashboard() {
  const [showSketches, setShowSketches] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div className="bg-[#F5F5F5]">
      <header className="flex justify-end items-center space-x-4 px-8 py-3 border-b-2 border-[#E2E2E2]">
        <h1>John Doe</h1>
        <img
          className="w-[48px] h-[48px] rounded-full object-cover"
          src="https://images.pexels.com/photos/2254711/pexels-photo-2254711.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="John Doe"
        />
      </header>
      <div className="mt-10 p-8 relative">
        <div className="bg-white h-screen p-6 w-4/5 mx-auto">Canvas</div>

        <div className="absolute top-0 right-8 w-1/6 space-y-10">
          <div className="flex flex-col space-y-10 bg-[#F5F5F5] border-2 border-[#E2E2E2] rounded">
            <div className={`${showSketches && "pb-6"}`}>
              <section
                className={` ${
                  showSketches && "border-b-2 border-[#E2E2E2]"
                }  flex justify-between items-center p-3 cursor-pointer`}
                onClick={() => setShowSketches(!showSketches)}
              >
                <h2>SKETCHES</h2>
                <img src={DownCaret} alt="Expand Sketches" />
              </section>
              {showSketches && (
                <div>
                  <ul className="px-3 pt-6 space-y-6">
                    <li className="text-[#161616] text-sm cursor-pointer">
                      Sketch 1
                    </li>
                    <li className="text-[#161616] text-sm cursor-pointer">
                      Sketch 2
                    </li>
                    <li className="text-[#161616] text-sm cursor-pointer">
                      Sketch 3
                    </li>
                  </ul>
                  <section className="flex items-center px-3 pt-4 space-x-4 cursor-pointer">
                    <img src={Add} alt="Add Sketch" />
                    <h3>Add new sketch</h3>
                  </section>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-10 bg-[#F5F5F5] border-2 border-[#E2E2E2] rounded">
            <div className={`${showUsers && "pb-6"}`}>
              <section
                className={` ${
                  showUsers && "border-b-2 border-[#E2E2E2]"
                }  flex justify-between items-center p-3 cursor-pointer`}
                onClick={() => setShowUsers(!showUsers)}
              >
                <h2>USERS</h2>
                <img src={DownCaret} alt="Expand Sketches" />
              </section>
              {showUsers && (
                <div>
                  <ul className="px-3 pt-6 space-y-6">
                    <li className="text-[#161616] text-sm cursor-pointer space-x-2">
                      <span className="bg-green-400 rounded-full h-2 w-2 inline-block"></span>{" "}
                      <span> Collaborator 1</span>
                    </li>
                    <li className="text-[#161616] text-sm cursor-pointer space-x-2">
                      <span className="bg-blue-400 rounded-full h-2 w-2 inline-block"></span>{" "}
                      <span> Collaborator 2</span>
                    </li>
                    <li className="text-[#161616] text-sm cursor-pointer space-x-2">
                      <span className="bg-red-400 rounded-full h-2 w-2 inline-block"></span>{" "}
                      <span> John Doe</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
