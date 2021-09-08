import download from "../img/download.jpg";
import beut from "../img/beut.jpg";
import human from "../img/human.jpg";
const info = {
  assign: [
    {
      img: download,
      name: "mukesh",
      password: "12345",
    },
  ],
  start: [
    {
      img: beut,
      name: "mahesh",
      password: "54321",
    },
  ],
  end: [
    {
      img: human,
      name: "mohit",
      password: "345876",
    },
  ],
};

const reducer = (state = info, action) => {
  switch (action.type) {
    case "ADD":
      return state;
    default:
      return state;
  }
};

export default reducer;
