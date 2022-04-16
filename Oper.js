import React, { Component } from 'react'

export default class Oper extends Component {
  render() {
      const {menu, ubahMenu} = this.props
    return (
      <div>
          <h2>Mengubah "State" Menjadi "Props"</h2>
          <h1>{menu[0]}</h1>
          <h2><ul>
              <li>{menu[1]}</li>
              <li>{menu[2]}</li>
              <li>{menu[3]}</li>
            </ul>
            </h2>
            <button onClick={() => ubahMenu(['Menu Minuman:', 'Teh', 'Jus', 'Soda'])}>Minuman</button>
      </div>
    )
  }
}
