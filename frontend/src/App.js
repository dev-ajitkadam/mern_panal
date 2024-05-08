import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [state, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, number, state };

    axios
      .post("http://localhost:5000/adduser", userData)
      .then((res) => {
        alert("User Registered successfully");
        handleSubmits();
      })
      .catch((err) => {
        console.error("Signup error:", err);
      });
  };

  const getUser =()=>{
    axios
      .get("http://localhost:5000/getuser")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert( error.message)
      });

  }

  const handleSubmits = () => {
    setName("");
    setEmail("");
    setNumber("");
    setStatus("");
  };

  return (
    <div className="container">
      <div className="pt-3">
        <div className="bg-white rounded">
          <h1 className='text-center'>Globallianz</h1>
          <h4 className="text-center font-bold">Register user</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name"><strong>Name</strong></label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                id="name"
                className="form-control rounded-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email"><strong>Email</strong></label>
              <input
                type="email"
                placeholder="Enter email"
                autoComplete="off"
                name="email"
                id="email"
                className="form-control rounded-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number"><strong>Phone Number</strong></label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                autoComplete="off"
                name="number"
                id="number"
                className="form-control rounded-1"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role"><strong>User Status</strong></label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={state}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Disable">Disable</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-3">
              Register
            </button>
          </form>
          <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Number</th>
                      <th scope="col">state</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.number}</td>
                        <td>{user.state}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

          <button type="submit" className="btn btn-success w-100 rounded-3" onClick={()=>{getUser()}}>
              getUser
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;

