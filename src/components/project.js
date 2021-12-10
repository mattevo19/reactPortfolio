import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Modal from 'react-modal'
import Link from './link'

Modal.setAppElement('#root')

class Project extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  customStyles = {
    content: {
      posistion: 'relative',
      margin: 'auto',
      height: '70%',
      width: '60%',
      minWidth: '80vw',
      padding: '0',
      backgroundColor: 'black',
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgb(103 101 101 / 75%)',
    },
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className="card cursor-pointer rounded-2xl border-2 border-solid border-black border-opacity-100 overflow-auto transition duration-500 ease-out shadow-md hover:shadow-xl transform hover:scale-102">
        <img
          src={this.props.project.imgUrl}
          alt={this.props.project.title}
          onClick={this.handleOpenModal}
        />
        <ReactModal isOpen={this.state.showModal} style={this.customStyles}>
          <div className="m_btn_pos">
            <button className="m_btn" onClick={this.handleCloseModal}>
              <img className='invert'
                src="https://img.icons8.com/material-outlined/96/000000/close-window.png"
                alt=""
              />
            </button>
          </div>
          <div className="m_body" onDoubleClick={this.handleCloseModal}>
            <h1>{this.props.project.title}</h1>
            <p>{this.props.project.desc}</p>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">ruby</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">rails</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">javascript</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">postgresql</span>
            <Link link={this.props.project.link} name="Link" />
            {this.props.project.descImg.map((img, index) => (
              <img src={img} key={index} alt={this.props.project.title} />
            ))}
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default Project
