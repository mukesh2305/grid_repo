import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
// import { Carousel } from "bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function ShowData() {
  const user = useSelector((state) => state);
  //   console.log(user.reducers);
  const data = Object.keys(user.reducers);
  //   console.log("data", data);
  //   console.log(user.reducers);
  //   console.log("array", user.reducers.assign);
  const person = data.map((info) => {
    return user.reducers[info];
  });
  console.log(person);
  return (
    <div className="container">
      {data.map((info, index) => {
        return user.reducers[info].map((person) => {
          return (
            <div className="data" key={index}>
              <img
                src={person.img}
                style={{ paddingTop: "1rem" }}
                width="200px"
                height="200px"
                alt="img"
              />
              <h3>{person.name}</h3>
              <h3>{person.password}</h3>
            </div>
          );
        });
      })}
    </div>
  );
}

export default ShowData;
