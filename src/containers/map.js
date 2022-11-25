import React, { Component } from "react";
import { LETTERS } from "../utils/Constants";

export default class map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedPositions: [],
      positions: []
    };
    this.generateMap = this.generateMap.bind(this);
  }

  componentDidMount = () => {

    this.geneticProcess();

  };

  getRandomInt = async (max) => {
    return await Math.floor(Math.random() * max);
  };

  getRandomString = async (num) => {
    let ramdonInt = await this.getRandomInt(num);
    return LETTERS[ramdonInt];
  };

  generateRamdonPosition = async () => {
    const { area } = this.props;
    let letter = await this.getRandomString(area[0]);
    let number = await this.getRandomInt(area[1]) + 1;
    return letter + number;
  };

  validatePosition = async (position) => {
    const { target } = this.props;
    return await target.includes(position)
  }

  generateMap = async (randomStudents) => {
    let positions = [];
    for (let index = 1; index <= randomStudents.length; index++) {
      let position;
      if (randomStudents[index - 1]) {
        position = randomStudents[index - 1];
      } else {
        let ramdonArea = await this.generateRamdonPosition();
        position = {
          id: index,
          position: ramdonArea
        };
      }
      positions.push(position);
    }
    return positions
  };

  deleteWrongPositions = async (randomStudents) => {
    let positions = [];
    for (let index = 1; index <= randomStudents.length; index++) {
      let valPosition = await this.validatePosition(randomStudents[index - 1]['position']);
      let position;
      if (!valPosition) {
        position = null;
      } else {
        position = randomStudents[index - 1];
      }
      positions.push(position);
    }
    return positions
  };

  geneticProcess = async () => {

    const { positions } = this.state;
    let generatePositions = positions.length === 0 ? new Array(30) : cleanPositions;
    let randomPositions;
    let cleanPositions;
    let condition = 0;
    do {
      condition++;
      console.log(condition);
      randomPositions = await this.generateMap(generatePositions);
      console.log(randomPositions);
      cleanPositions = await this.deleteWrongPositions(randomPositions);
      console.log(cleanPositions);
      this.setState({ positions: randomPositions, fixedPositions: cleanPositions });
    } while (condition <= 50);

  }

  render() {

    const { students, area, target } = this.props;

    let limiteX = new Array(area[0]);
    let limiteY = new Array(area[1]);
    let ArrayStudents = new Array(students);

    return (
      <div>
        {limiteX.fill().map((x, ixndex) => {
          return (
            <div className="map-row" key={ixndex}>
              {limiteY.fill().map((y, indexy) => {
                const isPlace = target.includes(
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
                      key={indexy}
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
                      key={indexy}
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
            return <div className="map-student" key={nameStudent}>{nameStudent + 1}</div>;
          })}
        </div>
      </div>
    );
  }
}
