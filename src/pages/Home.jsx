
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



const Home = () => {
    const [users, setUsers] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:80/api/users");
      setUsers(result.data);
    };
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:80/api/user/${id}`);
      loadUsers();
    };
  
    return (
      <div className="container">
        <div className="py-5 mt-5">
        {users.length === 0 ? (
            <div className="text-center">
             <h1> List is empty. Add some users !!!</h1>
              
              </div>
          ) : (

          <table className="table border shadow" >
            <thead className="table-success">
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row" key={index}>
                    {index+1}
                  </th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.department}</td>

                  <td>
                    <Link
                      className="btn btn-primary mx-3"
                      to={`/viewuser/${user.id}`}
                      title="view"
                     > <i className="fas fa-eye" aria-hidden="true"></i>
                    <span className="visually-hidden">View</span>
                      
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-3"
                      to={`/edituser/${user.id}`}
                      title="Edit"
                      >
                        <i className="fas fa-edit" aria-hidden="true"></i>
                        <span className="visually-hidden">Edit</span>
                    </Link>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => deleteUser(user.id)}
                      title="Delete"
                      >
                        <i className="fas fa-trash" aria-hidden="true"></i>
                        <span className="visually-hidden">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>
    );
}

export default Home