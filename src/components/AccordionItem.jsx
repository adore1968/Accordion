import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AccordionItem({ item }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="border mb-5 p-5 rounded border-opacity-50 shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-semibold mr-5">{item.title}</h2>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="text-base sm:text-lg p-2 bg-gray-500 rounded-full text-white"
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo ? (
        <div className="mt-1">
          <p className="text-base sm:text-lg text-gray-500">{item.info}</p>
        </div>
      ) : null}
    </div>
  );
}

export default AccordionItem;
