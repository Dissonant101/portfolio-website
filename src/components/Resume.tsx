import React from "react";
import MyDocument from "./MyDocument";

const Resume = () => {
  return (
    <div className="p-5">
        <p>This is the resume page.</p>
        <input className="outline outline-1 m-2" type="text" placeholder="Field 1" />
        <br />
        <input className="outline outline-1 m-2" type="text" placeholder="Field 2" />
        <br />
        <input className="outline outline-1 m-2" type="text" placeholder="Field 3" />
        <br />
        <input className="outline outline-1 m-2" type="text" placeholder="Field 4" />
        <br />
        <button>
            Generate Resume
        </button>
        <MyDocument />
    </div>
  );
};

export default Resume;
