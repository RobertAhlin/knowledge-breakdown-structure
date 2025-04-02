// src/App.tsx
import { useState } from "react";
import MainCard from "./components/MainCard";
import "./App.css";
import rawSkills from './data/skills.json';
import { SkillNode } from './types';
import RecursiveGroup from "./components/RecursiveGroup";

const skills: SkillNode[] = rawSkills;

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

      {selectedGroup?.children && (
        <RecursiveGroup
          groups={selectedGroup.children as SkillNode[]}
          animateFirstLevel={true}
          level={1}
        />
      )}
    </div>
  );
}

export default App;
