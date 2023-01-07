import React from "react";

const EmojiSearch = ({ onSearch }) => {
  return (
    <input
      className="emoji__search"
      placeholder="Search an emoji"
      onChange={onSearch}
    />
  );
};

export default EmojiSearch;
