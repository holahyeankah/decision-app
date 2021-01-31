
import React from 'react'

class Action extends React.Component{
    constructor(props){
        super(props)
        
    }
   
    render(){
        return(
            <div>
                <button className="big-button" onClick={this.props.pick} disabled={!this.props.hasOption}
                 >What should i do ?</button>

            </div>
        )
    }
}

export default Action