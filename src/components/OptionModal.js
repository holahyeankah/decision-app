import React, {Component} from 'react';
import Modal  from 'react-modal';


class OptionModal extends Component{

  render(){
    return(
        <Modal
        isOpen={!!this.props.selectedOption}
        contentLabel="selected option"
        onRequestClose={this.props.cancel}
        className="modal"
        closeTimeoutMS={200}
        >
<h3 className="modal-title"> select one</h3>
    {this.props.selectedOption && <p className="modal-body">{this.props.selectedOption}</p>}
<button className="button" onClick={this.props.cancel}>Okay</button>
        </Modal>
            

        
    )


  }
       
}

export default OptionModal