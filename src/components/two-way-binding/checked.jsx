import React, { useState } from "react";
import "../two-way-binding/checked.scss";

export default function Checked() {
  const [checked, setChecked] = useState([]);
  console.log(checked);
  const courses = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "JavaScript",
    },
    {
      id: 3,
      name: "JavaSpring Boot",
    },
  ];

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        //Uncheck
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleSubmit = (e) => {
    console.log({ id: checked });
  };
  return (
    <div className="container mt-5" style={{ marginLeft: "45%" }}>
      {courses.map((couse, i) => {
        return (
          <div key={i} className="">
            <input
              type="checkbox"
              className="me-2"
              checked={checked.includes(couse.id)}
              onChange={() => handleCheck(couse.id)}
            />
            {couse.name}
          </div>
        );
      })}
      <button onClick={() => handleSubmit()}>Register</button>
    </div>
  );
}
