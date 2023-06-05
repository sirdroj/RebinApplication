import React from "react";
import userData from "../users.json";
import { MdDelete } from "react-icons/md";

const Dash = () => {
  return (
    <>
      <div className="navbar">
        <button>Download JSON file</button>
        <button>Logout</button>
      </div>
      <div className="">
        <label for="cars">Status</label>

        <select id="cars">
          <option value="volvo">Select status</option>
          <option value="volvo">active</option>
          <option value="saab">inactive</option>
        </select>
      </div>
      <div className="data">
        {userData.map((user) => {
          return(
            <table>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <img alt="image" src={user.Avatar} />
                </td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.color}</td>
                <td>{user.Status}</td>
                <td>
                  <MdDelete color="red" />
                </td>
              </tr>
            </table>
          )
            
          
        })}
      </div>
    </>
  );
};

export default Dash;
