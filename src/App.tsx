import { useState } from "react";
import MainCard from "./components/MainCard";
import "./App.css";
import skills from './data/skills.json';

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className={`app ${selected ? "selected" : ""}`}>
      <h1>KBS – Knowledge Breakdown Structure</h1>
      <div className={`card-container ${selected ? "selected" : ""}`}>
        {skills.map((group) => (
          <MainCard
            key={group.title}
            title={group.title}
            isSelected={selected === group.title}
            isDimmed={selected !== null && selected !== group.title}
            onClick={() => setSelected(group.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
