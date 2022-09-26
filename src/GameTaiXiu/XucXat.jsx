import React, { Component } from 'react'

import { connect } from 'react-redux'


class XucXat extends Component {
    render() {
        // console.log(this.props);
        let { mangXucXac } = this.props.game
        console.log(mangXucXac);
        return (

            <div className="row w-50 mx-auto py-5">
                {/* <img style={{width:"50px"}} src={XucXatImg} alt="" /> */}
                <div className="col-2">
                    <button className='btn btn-success'>Tài</button>
                </div>
                <div className="col-8 text-center">
                    <img style={{ width: "50px" }} src={mangXucXac[0].hinh} alt="" />
                    <img style={{ width: "50px" }} src={mangXucXac[1].hinh} alt="" />
                    <img style={{ width: "50px" }} src={mangXucXac[2].hinh} alt="" />
                    
                </div>
                <div className="col-2">
                    <button className='btn btn-danger'>Xỉu</button>
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