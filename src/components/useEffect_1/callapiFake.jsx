import axios from "axios";
import { useState, useEffect } from "react";

export default function CallapiFake() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  //componentDidMount
  // useEffect(() => {
  //     let res = axios.get('https://fakestoreapi.com/products/1')
  //     let data = res && res.data ? res.data : []
  //     setDataCovid(data)
  //     console.log('aaa',data);
  // }, [])

  const getUserList = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => {
        setUserList(res.data);
        setLoading(false);
      });
  };
  return (
    <div className="container App mt-4 border border-dark p-4">
      <h4 className="d-inline-block">Clue Mediator</h4>
      <button
        className="btn btn-info float-right ms-2 mb-2"
        onClick={getUserList}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get User List"}
      </button>
      <div className="clearfix"></div>

      <table class="table mt-3">
        <thead class="thead-dark">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </thead>
        <tbody>
          {userList.map((x) => (
            <tr>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>
                <img src={x.avatar} width="50" height="50" />
              </td>
            </tr>
          ))}
          {userList.length === 0 && (
            <tr>
              <td className="text-center" colSpan="4">
                <b>No data found to display.</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
