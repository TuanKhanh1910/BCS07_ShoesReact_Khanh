import React, { Component } from "react";

export default class ShoesDetail extends Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img className="image-fluild" src={item.image} alt="" />
              </div>
              <div className="modal-body">
                <h3>
                  {item.name} (<span>{item.alias}</span>){" "}
                </h3>
                <h5>${item.price}</h5>
                <p>{item.shortDescription}</p>
                <p>kho: {item.quantity}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
