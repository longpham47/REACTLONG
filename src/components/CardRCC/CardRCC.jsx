

//! class component (rcc)
//rcc : tao nhanh
import React, { Component } from 'react'

export default class CardRCC extends Component {
  // phương thức giúp tạo UI của component
  render() {
    return (
      <div className="col-3">
        <div className="card text-dark bg-info" >
          <img src="https://i.pravatar.cc/?u=87" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    )
  }
}

