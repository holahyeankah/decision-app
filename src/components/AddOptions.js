
import React from 'react';

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error:undefined
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    };

    handleSubmit(e){
      e.preventDefault();
      const option=e.target.elements.option.value.trim()
      const error=this.props.handleAdd(option)
          this.setState({error})
          if(!error){
            e.target.elements.option.value='';
          }
        }
        render(){
          return(
            <div>
                {this.state.error && <p className="error-message">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleSubmit}>
                    <input className="add-option__text" type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>

            </div>
        )
    }
    
    };


    export default AddOptions