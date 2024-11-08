import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");

  function createPaste() {}
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between ">
        <input
          className="p-2 rounded-2xl mt-2 "
          type="text"
          placeholder="Enter title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="p-2 rounded-2xl mt-4 mx-5" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          name=""
          id=""
          placeholder="Enter Content Here"
          value={value}
          rows={20}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
