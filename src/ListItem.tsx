import React from "react";

interface Props {
  title: string;
  completed: boolean;
  onClick: () => void;
}

export default function ListItem({ title, completed, onClick }: Props) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <span>{title}&nbsp;</span>
    </li>
  );
}
