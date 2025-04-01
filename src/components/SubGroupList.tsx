// src/components/SubGroupList.tsx
import "./SubGroupList.css";

type SubGroup = {
  title: string;
  children?: SubGroup[];
};

type Props = {
  groups: SubGroup[];
};

export default function SubGroupList({ groups }: Props) {
  return (
    <div className="subgroup-list">
      {groups.map((group) => (
        <div key={group.title} className="subgroup-card">
          {group.title}
        </div>
      ))}
    </div>
  );
}
