import React, { Component } from "react";
import { LETTERS } from "../utils/Constants";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: [10, 8],
      place: [
        "D2",
        "D3",
        "F2",
        "F3",
        "H2",
        "H3",
        "D6",
        "D7",
        "F6",
        "F7",
        "H6",
        "H7",
      ],
      students: 10,
      positions: [],
    };
    this.generateMap = this.generateMap.bind(this);
  }
  componentDidMount = () => {
    this.generateMap();
  };

  getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  getRandomString = (num) => {
    let ramdonInt = this.getRandomInt(num);
    return LETTERS[ramdonInt];
  };

  generateRamdonPosition = () => {
    let letter = this.getRandomString(this.state.area[0]);
    let number = this.getRandomInt(this.state.area[1]) + 1;
    return letter + number;
  };

  generateMap = () => {

      let positions = this.state.positions;
      for (let index = 1; index <= this.state.students; index++) {
        let ramdonArea = this.generateRamdonPosition();
        let position = {
          id: index,
          position: ramdonArea,
        };
        positions.push(position);
      }
      setTimeout(() => this.setState({ positions }), 30000);

  };

  render() {
    let limiteX = new Array(this.state.area[0]);
    let limiteY = new Array(this.state.area[1]);
    let ArrayStudents = new Array(this.state.students);

    return (
      <div>
        {limiteX.fill().map((x, ixndex) => {
          return (
            <div className="map-row">
              {limiteY.fill().map((y, indexy) => {
                const isPlace = this.state.place.includes(
                  LETTERS[ixndex] + (indexy + 1)
                )
                  ? "place"
                  : "";

                const student = this.state.positions.filter(
                  (e) => e.position === LETTERS[ixndex] + (indexy + 1)
                )[0];

                if (student) {
                  return (
                    <div
                      id={LETTERS[ixndex] + (indexy + 1)}
                      className={"map-item " + isPlace}
                    >
                      <p>
                        {LETTERS[ixndex]}
                        {indexy + 1}
                      </p>
                      <div className="map-student">{student.id}</div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      id={LETTERS[ixndex] + (indexy + 1)}
                      className={"map-item " + isPlace}
                    >
                      <p>
                        {LETTERS[ixndex]}
                        {indexy + 1}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
        <div className="map-hallway">
          {ArrayStudents.fill().map((student, nameStudent) => {
            return <div className="map-student">{nameStudent + 1}</div>;
          })}
        </div>
      </div>
    );
  }
}
