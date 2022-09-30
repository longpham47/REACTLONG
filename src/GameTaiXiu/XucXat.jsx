import React, { Component } from 'react'

import { connect } from 'react-redux'


class XucXat extends Component {
    render() {
        // console.log(this.props);
        let { mangXucXac, banChon } = this.props.game
        console.log(banChon);
        return (

            <div className="row w-50 mx-auto py-5">
                {/* <img style={{width:"50px"}} src={XucXatImg} alt="" /> */}
                <div className="col-2">
                    <button className='btn btn-success' onClick={() => {
                        let action = {
                            type: "DAT_CUOC",
                            datCuoc: true
                        }
                        this.props.dispatch(action);
                    }}>Tài</button>
                </div>
                <div className="col-8 text-center">
                    <img style={{ width: "50px" }} src={mangXucXac[0].hinh} alt="" />
                    <img style={{ width: "50px" }} src={mangXucXac[1].hinh} alt="" />
                    <img style={{ width: "50px" }} src={mangXucXac[2].hinh} alt="" />

                </div>
                <div className="col-2">
                    <button className='btn btn-danger' onClick={() => {
                        let action = {
                            type: "DAT_CUOC",
                            datCuoc: false
                        }
                        this.props.dispatch(action);
                    }}>Xỉu</button>
                </div>
            </div>
        )
    }
}

const mapStateToPops = (rootReduce) => {
    return {
        game: rootReduce.gameReduce
    }
}
export default connect(mapStateToPops)(XucXat)