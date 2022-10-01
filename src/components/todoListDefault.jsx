import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoListDefault() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleOnClickBtn = () => {
    if (!input) {
      toast('🦄 Missing form input data!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    setList([...list, input]);
    setInput("");
    toast('🦄 Create new to do success!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  const handleOnDeleteTodo = (i) => {
    let newList = [...list];
    newList.splice(i, 1);
    setList(newList);
    toast('🦄 Delete todo succes!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  return (
    <div className="text-center text-white pt-5 bg-dark" style={{width: '100%', height: '100vh'}}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleOnClickBtn()}>Click</button>
      <div className="w-25 border border-danger mx-auto mt-2">
        {list.map((li, i) => (
          <li
            className="border-bottom border-danger"
            key={i}
            onClick={() => handleOnDeleteTodo(i)}
          >
            {" "}
            {li}{" "}
          </li>
        ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}
