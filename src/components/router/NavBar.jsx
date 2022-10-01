import React from "react";
import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import RandomGifts from "../RandomGifts";
import Checked from "../two-way-binding/checked";
import Home from "./home";
import TodoListDefault from "../todoListDefault";
import "./navBar.scss";
import CallapiFake from "../useEffect_1/callapiFake";
import UseEffect_1 from "../useEffect_1/useEffect_1";

export default function NavBar() {
  const [colorLink, setColorLink] = useState("");
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Thien
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/randomGifts">
                  RandomGifts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checked">
                  Checked
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todolist">
                  TodoList
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/callapiFake">
                  CallapiFake
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/useEffect_1">
                  UseEffect_1
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randomGifts" element={<RandomGifts />} />
        <Route path="/checked" element={<Checked />} />
        <Route path="/todoList" element={<TodoListDefault />} />
        <Route path="/callapiFake" element={<CallapiFake />} />
        <Route path="/useEffect_1" element={<UseEffect_1 />} />

        {/* <TestUseState/> */}
        {/* <RandomGifts/> */}
        {/* <Checked/> */}
        {/* <TodoList/> */}
        {/* <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <Mount_unmount />} */}
        {/* <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <ChatApp />} */}
        {/* <button onClick={() => setShow(!show)}>Toggle</button>
      { show && <Memo />} */}
        {/* <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <UseCallBack onIncrease={handleOnClickBtn} />} */}
        {/* <UseEffect_1/> */}
        {/* <UseEffect_width />
      <UseEffect_height /> */}
        {/* <CountDown/> */}
        {/* <UseMemo/> */}
        {/* <UseReducer/> */}
        {/* <TodoAppWithUseReducer /> */}
        {/* <TodoListDefault /> */}
        {/* <Context /> */}
        {/* <GlobalStateWithReducer /> */}
        {/* <Video/> */}
      </Routes>
    </div>
  );
}
