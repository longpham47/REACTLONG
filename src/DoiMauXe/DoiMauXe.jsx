import React, { Component } from 'react'

export default class DoiMauXe extends Component {

    // imgURL = "./img/products/black-car.jpg"

    state = {
        imgURL: "./img/products/black-car.jpg"
    }

    chainColor = (color) => {
        this.setState({
            imgURL: ` ./img/products/${color}-car.jpg`
        })
    }



    render() {
        return (
            <div className='container'>
                <h2>Đổi màu xe</h2>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' src={this.state.imgURL} alt="" />
                    </div>

                    <div className="col-4">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button className="btn btn-dark py-2 m-1">black
                                </button></li>

                            <li className="nav-item">
                                <button onClick={() => {
                                    this.setState({
                                        imgURL: "./img/products/red-car.jpg"
                                    })
                                }} className="btn btn-danger py-2 m-1">red
                                </button></li>

                            <li className="nav-item">
                                <button onClick={() => {
                                    this.chainColor("silver");
                                }} className="btn btn-light py-2 m-1 ">Silver
                                </button></li>

                            <li className="nav-item">
                                <button onClick={() => {
                                    this.chainColor("steel");
                                }} className="btn btn-secondary py-2 m-1">steel
                                </button></li>
                        </ul>


                    </div>

                </div>
            </div>
        )
    }
}
