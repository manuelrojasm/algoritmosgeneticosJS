import React, { Component } from "react";
import Map from "./map";

export default class dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h1>Laboratorio KERUB</h1>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <Map />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
                <button>inciar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
