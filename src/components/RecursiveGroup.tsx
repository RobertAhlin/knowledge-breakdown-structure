// src/components/RecursiveGroup.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./RecursiveGroup.css";

type Group = {
  title: string;
  children?: Group[];
};

type Props = {
  groups: Group[];
};

export default function RecursiveGroup({ groups }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="column">
      {groups.map((group) => {
        const isSelected = group.title === selected;
        return (
          <div key={group.title} className="group-block">
            <motion.div
              className={`group-card ${isSelected ? "selected" : ""}`}
              onClick={() => setSelected(isSelected ? null : group.title)}
              layout
              animate={{
                scale: isSelected ? 1.05 : 1,
                padding: isSelected ? "1.5rem 2rem" : "1rem 1.5rem"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {group.title}
            </motion.div>

            <AnimatePresence initial={false}>
              {isSelected && group.children && (
                <motion.div
                  className="child-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RecursiveGroup groups={group.children} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}