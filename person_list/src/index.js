import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const PersonList = () => {
  return (
    <section className="person-list">
      <Person name="John Doe" job="Frontend Developer" />
      <Person name="Sam Smith" job="Backend Developer" />
      <Person name="Robert Downey" job="Database Developer" />
    </section>
  );
};

const Person = ({ name, job }) => {
  const num=Math.floor(Math.random()*70)+1
  const url=  `https://randomuser.me/api/portraits/men/${num}.jpg`
  return (
    <article className="person">
      <img
        className="card-img"
        src={url}
        alt={name}
      />
      <h1>{name}</h1>
      <h3>{job}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        explicabo!
      </p>
    </article>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
