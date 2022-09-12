import React, { Component } from 'react'

export default class DemoArray extends Component {

    productLisst = [
        { id: 1, name: "blak car", url: "./img/products/black-car.jpg", price: 6000 },
        { id: 1, name: "red car", url: "./img/products/red-car.jpg", price: 7000 },
        { id: 1, name: "silver car", url: "./img/products/silver-car.jpg", price: 8000 },
        { id: 1, name: "steel car", url: "./img/products/steel-car.jpg", price: 5000 },

    ]

    renderCar = () => {
        let content = []; // [<tr></tr>,<tr></tr>]
        for (let i = 0; i < this.productLisst.length; i++) {
            let { name, price, url } = this.productLisst[i];
            let trObj = <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: "20px", height: "20px" }} src={url} alt="hinh" />
                </td>
                <td>{price}</td>




            </tr>
            content.push(trObj);

        }
        return content;

    }

    renderCarMap = () => {
        // let content = [];

        // trả kết quả ra khỏi hàm rendercarmap
        return this.productLisst.map((car) => {
            let { name, price, url } = car;
            // trả về mảng mới ,retuên trong map chỉ dưng lại khi hết mảng
            // trả về kết quả ra ngoài map
            return <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: "20px", height: "20px" }} src={url} alt="hinh" />
                </td>
                <td>{price}</td>

            </tr>
        })
        // return content;

    }

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Hinhf</th>
                            <th scope="col">gia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderCar()} */}
                    {this.renderCarMap()}
                    </tbody>
                </table>

            </div>
        )
    }
}
