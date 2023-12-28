import React from "react";

export default function Button({
  className,
  image,
  alt,
  text
}) {
  return (
    <div className={className}>
      <button>
        <img src={image} alt={alt} />
        {text}
      </button>
    </div>
  );
}
