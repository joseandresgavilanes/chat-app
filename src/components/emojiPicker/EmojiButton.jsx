import React from "react";

const EmojiButton = ({ emoji, onClick }) => {
  function handleOnClick() {
    onClick(emoji);
  }

  return <button onClick={handleOnClick}>{emoji.symbol}</button>;
};

export default EmojiButton;
