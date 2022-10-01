import { useState, useReducer } from "react";

//useReducer
// 1.Init state





/////// Error.////////////////////////////////







const initState = {
  job: "",
  jobs: [],
};
// 2.Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
// 3.Reducer
const reducer = (state, action) => {
    let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    default:
      throw new Error("Invalid action!");
  }
};
// 4.Dispatch
export default function TodoAppWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
  };
  return (
    <div className="p-5">
      <h3>Todo</h3>
      <input
        value={job}
        onChange={(e) => {
          //e.target.value
          dispatch(setJob(e.target.value));
        }}
        type="text"
        placeholder="Enter todo..."
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}> {job} &time; </li>
        ))}
      </ul>
    </div>
  );
}
