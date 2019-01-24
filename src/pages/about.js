import React from 'react'



class About extends React.Component {


  openModal = (e) => {
    document.body.classList.add('modal-open');
    this.setState({ showModal: true });
  }
  hideModal = (event) => {
    document.body.classList.remove('modal-open');
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
      

        <button 
         
          onClick={this.openModal}>
          two
          </button>
      </div>

      );
    }
  }
  
  export default About;