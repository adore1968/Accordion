import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function AccordionItem({ item }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo ? (
        <div>
          <p>{item.info}</p>
        </div>
      ) : null}
    </div>
  );
}

export default AccordionItem;
