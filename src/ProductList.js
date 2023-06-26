import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    let { item, xemChiTiet } = this.props;
    return (
      <div>
        <img src={item.image} alt="" />
        <div className="product_text">
          <div className="title">
            <h5>{item.name}</h5>
            <p>${item.price}</p>
          </div>
          <button
            onClick={() => {
              xemChiTiet(item);
            }}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Xem Chi Tiết
          </button>
        </div>
      </div>
    );
  }
}
