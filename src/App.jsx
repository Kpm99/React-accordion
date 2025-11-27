import data from "./data";
import Questions from "./components/Questions";
import { useState } from "react";
const App = () => {
   const [activeId,setActiveId] = useState(0);
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {data.map((i) => {
          return <Questions i={i} key={i.id} activeId={activeId} setActiveId={setActiveId}/>;
        })}
      </div>
    </main>
  );
};
export default App;
