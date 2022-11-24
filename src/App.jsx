import React from "react";
import AccordionList from "./components/AccordionList";

function App() {
  return (
    <div className="min-h-screen bg-black ">
      <section className="px-5 sm:px-8 flex justify-center items-center min-h-screen py-5 sm:py-8">
        <div className="bg-white p-5 rounded flex container sm:max-w-6xl justify-between">
          <div className="w-9/12 mr-5">
            <h1 className="text-2xl sm:text-4xl font-bold capitalize">
              Questions and answers about login
            </h1>
          </div>
          <AccordionList />
        </div>
      </section>
    </div>
  );
}

export default App;
