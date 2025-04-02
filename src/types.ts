export type Info = {
    text: string;
  };
  
  export type Group = {
    title: string;
    children?: Group[];
    info?: Info[];
  };