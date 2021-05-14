import React from 'react';
import "./adminoverlay.css"
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class AdminOverlay extends React.Component {
    // create an Employee component using the props we are passed.
    // the props must have the 4 fields specified
    constructor(props){
      super(props);
      this.state = {
        showModal: false,
        name: props.name,
        email: props.email,
        about: props.about,
        image: props.image
      };
    
      // binding
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render() {
        return (
          <span>  
          <button className="admin-button" onClick={this.handleOpenModal}>Admin </button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
          >
            <button className="right" onClick={this.handleCloseModal}>X</button>
            <div className="center">
            <h1>Admin Login</h1>
            <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
        <button type="submit">Cancel</button>
      </div>
    </form>
            </div>
          </ReactModal>
          </span>
        );
    }
  }
 
export default AdminOverlay;