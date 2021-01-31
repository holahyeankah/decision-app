import React from 'react';

class Option extends React.Component{
    render(){
       
        return(
            <div className="option">

        <p className="option-text">{this.props.count}. {this.props.list}</p>
  <button className="button button-link"
  onClick={(e)=>{this.props.removeOption(this.props.list)}}>  remove
    
       </button>
            </div>
        )
    }
}

    export default Option