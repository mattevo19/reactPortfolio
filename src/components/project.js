import React, { Component } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import Badge from "./badge";
import Link from "./link";

Modal.setAppElement("#root");

class Project extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
  customStyles = {
    content: {
      posistion: "relative",
      margin: "auto",
      height: "70%",
      width: "60%",
      minWidth: "80vw",
      padding: "0",
      backgroundColor: "black",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgb(103 101 101 / 75%)",
    },
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="card cursor-pointer rounded-xl overflow-auto transition duration-500 ease-out shadow-md hover:shadow-xl transform hover:scale-102">
        <img
          src={this.props.project.imgUrl}
          alt={this.props.project.title}
          onClick={this.handleOpenModal}
        />
        <ReactModal isOpen={this.state.showModal} style={this.customStyles}>
          <div className="m_btn_pos">
            <button className="m_btn" onClick={this.handleCloseModal}>
              <img
                className="invert"
                src="https://img.icons8.com/material-outlined/96/000000/close-window.png"
                alt=""
              />
            </button>
          </div>
          <div className="m_body" onDoubleClick={this.handleCloseModal}>
            <h1 className="mb-4">{this.props.project.title}</h1>
            <p className="mb-4">{this.props.project.desc}</p>

            <Badge badges={this.props.project.badges} />

            <Link
              link={this.props.project.link}
              name={`Visit ${this.props.project.title}`}
            />
            {this.props.project.descImg.map((img, index) => (
              <div className="px-8 py-4">
                <img src={img} key={index} alt={this.props.project.title} />
              </div>
            ))}
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Project;
