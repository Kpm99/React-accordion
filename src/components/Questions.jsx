import React from "react";
import { FaPlus,FaMinus } from "react-icons/fa";
import { useState } from "react";
const Questions = ({i,activeId,setActiveId}) => {
    const [showMore,setShowMore] = useState(false)
   function handleActiveId(id){
    if(activeId != id){
        setActiveId(id)
    }else{
        setActiveId(0)
    }
   }
  return (
    <div className="question">
      <header>
        <h5>{i.title}</h5>
        <button className="question-btn" onClick={() => handleActiveId(i.id)}>
          {activeId == i.id  ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      { activeId == i.id ? <p>{i.info}</p> : null}
    </div>
  );
};

export default Questions;
