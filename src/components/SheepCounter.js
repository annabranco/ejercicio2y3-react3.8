import React from 'react'
import SheepPhoto from '../image/oveja.jpg';

class SheepCounter extends React.Component {

  constructor(props) {

    super(props)

    this.countSheep = this.countSheep.bind(this)

    this.state = {
      count : 0
    }
  }

  countSheep = () => {
    let countNumber = this.state.count;
    countNumber += 1;
    this.setState({
      count: countNumber
    })

  }

  createArraySheeps = () => {
    const arraySheeps = [];

    for (let sheep = 0; sheep < this.state.count; sheep++) {
      arraySheeps.push(
        <li className="listaOveja" key={sheep}>
        <img src={SheepPhoto} alt="Oveja" className="ovejita"/>
        </li>
      )
    }
    return arraySheeps;
  }

  render () {

    return (
      <React.Fragment>
      <h1 className="numeroGrande">{this.state.count}</h1>
      <button className="botonGrande" onClick={this.countSheep}>Contar Ovejas</button>
      <ul className="listadoDeOvejas">{this.createArraySheeps()}</ul>
      </React.Fragment>
    );
  }

}

export default SheepCounter;
