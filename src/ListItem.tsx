import React from "react";

interface Props {
  title: string;
  completed: boolean;
  onClick: () => void;
}

export default function ListItem({ title, label, completed, onClick }: Props) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <span>{title}&nbsp;</span>
      <span>{label}</span>
    </li>
  );
}
