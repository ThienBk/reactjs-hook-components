import React, { useState } from "react";

export default function TodoList() {


  const [input, setInput] = useState("");
  const [list, setList] = useState(() => {
    const storageList = JSON.parse(localStorage.getItem('list'))
    return storageList
  })
  const handleOnChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleOnClick = () => {
    if (!input) {
      alert("Missing form input data!");
      return;
    }
    setList((prev) => {
        const newList = [...prev, input]

        //Save to localStorage
        const jsonList = JSON.stringify(newList)
        localStorage.setItem('list', jsonList)

        return newList
    });
    setInput('')
  };
  const handleOnDeleteList = (li) => {};
  return (
    <div>
      <input
        value={input}
        onChange={(e) => handleOnChangeInput(e)}
        type="text"
      />
      <button type="button" onClick={(e) => handleOnClick(e)}>
        Click
      </button>
      <div>
        {list.map((li, i) => {
          return (
            <div key={li.i}>
              <li onClick={() => handleOnDeleteList(li.id)}>{li}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
