// src/components/MainCard.tsx
import { motion } from "framer-motion";
import "./MainCard.css";

type MainCardProps = {
  title: string;
  onClick: () => void;
  isSelected: boolean;
  isDimmed: boolean;
};

export default function MainCard({ title, onClick, isSelected, isDimmed }: MainCardProps) {
  const size = isSelected
    ? { width: 250, height: 100, scale: 1.0 } /*selected*/
    : isDimmed
    ? { width: 200, height: 100, scale: 0.75 } /*dimmed*/
    : { width: 200, height: 150, scale: 1 };   /*default*/

  return (
    <motion.div
      layout
      className={`main-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      animate={size}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {title}
    </motion.div>
  );
}
