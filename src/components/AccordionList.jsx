import React from "react";
import AccordionItem from "./AccordionItem";
import { useGlobalContext } from "../context/AppContext";

function AccordionList() {
  const { accordion } = useGlobalContext();
  return (
    <div className="w-full">
      {accordion.map((item) => {
        return <AccordionItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default AccordionList;
