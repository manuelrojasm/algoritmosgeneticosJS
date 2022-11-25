import React, { Component } from "react";
import Map from "./map";

export default class dashboard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      power: false,
      area: [15, 18],
      target: [
        "A2",
        "B2",
        "D2",
        "E2",
        "G2",
        "H2",
        "K2",
        "J2",
        "M2",
        "N2",
        "O3",
        "O4",
        "O6",
        "O7",
        "O9",
        "O10",
        "O12",
        "O13",
        "O15",
        "O16",
        "A17",
        "B17",
        "D17",
        "E17",
        "G17",
        "H17",
        "K17",
        "J17",
        "H17",
        "H17",
        "M17",
        "N17",
        "D6",
        "D7",
        "E6",
        "E7",
        "J6",
        "J7",
        "K6",
        "K7",
        "J12",
        "J13",
        "K12",
        "K13",
        "D13",
        "D12",
        "E12",
        "E13"
      ],
      students: 30
    };
    this.iniciarAlgoritmoGenetico = this.iniciarAlgoritmoGenetico.bind(this);
  }

  iniciarAlgoritmoGenetico = () => {
    this.setState({ power: true });
  };

  render() {

    const { power, students, area , target} = this.state;

    return (
      <div className="row">
        <div className="col-12">
          <h1 className="tittle">Laboratorio KERUB</h1>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Map power={power} students={students} area={area} target={target} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <button onClick={this.iniciarAlgoritmoGenetico}>inciar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
