import React, { Component } from 'react'
import Oper from './Oper'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: ['Menu Makanan:', 'Soto', 'Bakso', 'Rawon']
    }
  }

  //Ubah teks
  ubahMenu = (minuman) => {
    this.setState({
      menu: minuman
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.menu [0]}</h1>
            <h2><ul>
              <li>{this.state.menu[1]}</li>
              <li>{this.state.menu[2]}</li>
              <li>{this.state.menu[3]}</li>
            </ul>
            </h2>
            <button onClick={() => this.ubahMenu(['Menu Minuman:', 'Teh', 'Jus', 'Soda'])}>Minuman</button>
       <hr />

            <Oper menu={this.state.menu} ubahMenu={this.ubahMenu}/>

       <hr />

       <h2>Tomy Alfirza A.R (1120101891)</h2>   
      </div>
    )
  }
}
