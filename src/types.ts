// src/types.ts
export type Info = {
    text: string;
};

export type Group = {
    title: string;
    children?: Group[];
    info?: Info[];
};

export type InfoItem = {
    text: string;
};

export type SkillNode = {
    title: string;
    info?: InfoItem[];
    children?: SkillNode[];
};
  