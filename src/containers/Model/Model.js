/**
 * @summary
 */
import React, { Component } from 'react'

import style from './style.scss'

class Model extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        Model
      </div>
    )
  }
}

export default Model
