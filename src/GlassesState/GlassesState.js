import React, { Component } from "react";

export default class GlassesState extends Component {
  myArr = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  state = {
    color: "",
    price: "",
    name: "",
    desc: "",
  };
  changeGlasses = (id) => {
    document.getElementById("kinh").classList.remove("none");
    document.getElementById("price").classList.remove("none");
    document.getElementById("nen").classList.remove("none");
    this.setState({
      color: this.myArr[id].url,
      price: this.myArr[id].price,
      name: this.myArr[id].name,
      desc: this.myArr[id].desc,
    });
    let allItems = document.querySelectorAll(".main .glasses .item");
    allItems.forEach((item) => {
      item.classList.remove("chon");
    });
    allItems[id].classList.add("chon");
    this.toTop();
  };
  reset = () => {
    document.getElementById("kinh").classList.add("none");
    document.getElementById("price").classList.add("none");
    document.getElementById("nen").classList.add("none");
    let allItems = document.querySelectorAll(".main .glasses .item");
    allItems.forEach((item) => {
      item.classList.remove("chon");
    });
    this.setState({
      color: "",
      price: "",
      name: "",
      desc: "",
    });
  };
  toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div className="matKinh">
        <h1>TRY GLASSES APP ONLINE</h1>
        <div className="main">
          <div className="nguoimau">
            <div id="kinh" className="kinh none">
              <img src={this.state.color} alt="" />
            </div>
            <img src="./glassesImage/model.jpg" alt="" />
            <div id="nen" className="nen none">
              <h3 id="name" className="name">
                {this.state.name}
              </h3>
              <h3 id="price" className="price none">
                ${this.state.price}
              </h3>
              <p id="desc" className="descript">
                {this.state.desc}
              </p>
            </div>
          </div>
          <div className="glasses">
            <div className="content">
              {this.myArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="item"
                    onClick={() => {
                      this.changeGlasses(index);
                    }}
                  >
                    <img src={item.url} alt="" />
                  </div>
                );
              })}

              <div>
                <button id="reset" onClick={this.reset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
