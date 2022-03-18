import React from "react";
import { useState } from "react";
import Navbar from "./navbar";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
    <Navbar/>
      <div className="container">
        This is a sample stateful and server-side
        rendered <span className="text-danger">React</span> application.
        <br />
        <br />
        Here is a button that will track
        how many times you click it:
        <br />
        <br />
        <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>{count}</button>
        <br />
        <br />
        <p className="text-primary">.text-primary</p>
        <p className="text-secondary">.text-secondary</p>
        <p className="text-success">.text-success</p>
        <p className="text-danger">.text-danger</p>
        <p className="text-warning bg-dark">.text-warning</p>
        <p className="text-info bg-dark">.text-info</p>
        <p className="text-light bg-dark">.text-light</p>
        <p className="text-dark">.text-dark</p>
        <p className="text-body">.text-body</p>
        <p className="text-muted">.text-muted</p>
        <p className="text-white bg-dark">.text-white</p>
        <p className="text-black-50">.text-black-50</p>
        <p className="text-white-50 bg-dark">.text-white-50</p>
        <br />
        <br />
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" onClick={() => setCount(count + 10)} href="#">Add 10</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}