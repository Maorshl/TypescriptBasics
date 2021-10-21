import React from "react";

function Button({
  name,
  color,
  clicks,
}: {
  name: string;
  color: string;
  clicks: number;
}) {
  return (
    <div>
      <button>{name}</button>
      <h1>{color}</h1>
      <h1>{clicks}</h1>
    </div>
  );
}

export default Button;
