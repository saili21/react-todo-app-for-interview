import React, { useState } from "react";

interface Props {
  titlePlaceholder: string;
  labelPlaceholder?: string;
  onSubmit: (text: string) => void;
  onExport: () => void;
}

export default function TodoInput({
  titlePlaceholder,
  onSubmit,
  onExport,
}: Props) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text);
      }}
    >
      <input
        name="input"
        type="text"
        placeholder={titlePlaceholder}
        value={text}
        className="todo-input-title"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        className="todo-input-labels"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setText("");
        }}
      >
        Submit Changes
      </button>
    </form>
  );
}
