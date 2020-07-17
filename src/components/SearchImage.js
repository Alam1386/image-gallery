import React, { useState } from "react";

function SearchImage({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <form
        className="max-w-sm rounded overflow-hidden my-10 mx-auto"
        onSubmit={onSubmit}
      >
        <input
          className="border-gray-300 rounded py-1 px-3 border mx-2"
          placeholder="Enter the image name..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border py-1 px-3 border-green-700 rounded bg-green-700 text-white">
          Search Image
        </button>
      </form>
    </div>
  );
}

export default SearchImage;
