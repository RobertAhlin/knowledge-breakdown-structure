// src/components/RecursiveGroup.tsx
import { useState } from "react";
import "./RecursiveGroup.css";

// Typdefinition
type Info = {
  text: string;
};

type Group = {
  title: string;
  children?: Group[];
  info?: Info[];
};

type Props = {
  groups: Group[];
  animateFirstLevel?: boolean;
  level?: number;
};

export default function RecursiveGroup({ groups, animateFirstLevel = false, level = 0 }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<Info[] | null>(null);

  return (
    <div className="column">
      {groups.map((group) => {
        const isSelected = group.title === selected;
        const hasInfo = group.info && group.info.length > 0;

        const handleClick = () => {
          if (hasInfo) {
            setModalContent(group.info!);
          } else {
            setSelected(isSelected ? null : group.title);
          }
        };

        return (
          <div key={group.title} className="group-block">
            <div
                className={`group-card 
                    ${isSelected ? "selected" : ""} 
                    ${level === 1 && animateFirstLevel ? "fly-in" : ""}
                    ${level >= 2 ? "fade-in" : ""}`
                }
                onClick={handleClick}
                >
                {group.title}
            </div>

            {!hasInfo && isSelected && group.children && (
              <div className="child-wrapper">
                <RecursiveGroup groups={group.children} level={level + 1} />
              </div>
            )}
          </div>
        );
      })}

      {modalContent && (
        <div className="modal-overlay" onClick={() => setModalContent(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setModalContent(null)}>
              &times;
            </button>
            <ul>
              {modalContent.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}