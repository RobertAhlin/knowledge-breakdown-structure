// src/App.tsx
import { useState } from "react";
import MainCard from "./components/MainCard";
import "./App.css";
import skills from './data/skills.json';
import SubGroupList from "./components/SubGroupList";

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedGroup = skills.find((g) => g.title === selected);

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

      {selectedGroup && selectedGroup.children && (
        <SubGroupList groups={selectedGroup.children} />
      )}
    </div>
  );
}

export default App;
