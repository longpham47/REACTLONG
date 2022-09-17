import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderShoes = () => {
        // return kết quả ra ngoài renderShoes
        return this.props.arrayShoes.map((shoes) => {
            let {id, image, name, price } = shoes;

            // trả về một mãng chứa các đói tượng thẻ div col-4
            return <div className="col-4" key={`shoes-${id}`}>
                <ProductItem shoes={shoes}/>

            </div>


        })
    }



  render() {
    console.log(this.props);
    return (
      <div className='row'>
            {this.renderShoes()}
      </div>
    )
  }
}
