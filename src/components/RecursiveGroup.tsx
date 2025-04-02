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
};

export default function RecursiveGroup({ groups }: Props) {
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
              className={`group-card ${isSelected ? "selected" : ""}`}
              onClick={handleClick}
            >
              {group.title}
            </div>

            {!hasInfo && isSelected && group.children && (
              <div className="child-wrapper">
                <RecursiveGroup groups={group.children} />
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
            <h3>Info</h3>
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