import React from 'react';
import Option from './Option'

class Options extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
               
                <div className="widget-header">
                    <h4 className="widget-header__title">Your options</h4>
                <button className="button button-link" onClick={this.props.remove}>Remove all</button>
                </div>
              

                
{this.props.options.map((option, index)=><Option key={option} list={option} count={index+1} removeOption={this.props.removeOption}/>)}

{this.props.options.length===0 && <p className="widget-message">Please select an option</p>}
            </div>
        
        )
    }
}

export default Options