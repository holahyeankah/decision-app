import React, { Component} from 'react';
import Options from './Options';
import Action from './Action'
import AddOptions from './AddOptions'
import OptionModal from './OptionModal'
import Header from './Header'

class Indecision extends Component{
    constructor(props){
        super(props);
        this.state={
            options:[],
            selectedOption:undefined
        };
        this.handleAdd=this.handleAdd.bind(this);
        this.handleRemove=this.handleRemove.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleRemoveOne=this.handleRemoveOne.bind(this)
        this.onModal=this.onModal.bind(this)
    };
    componentDidMount(){

        try{
            const data=localStorage.getItem('option')
            const base=JSON.parse(data)
            this.setState({options: base})

        }
        catch(e){

        }
  
    }


    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options)
            localStorage.setItem('option',json)
        
    }
};

handleRemove(){
    this.setState({options:[]})
       

};
handleRemoveOne(optionToRemove){
    this.setState((prevState)=>({
        options:prevState.options.filter(option=>{
            return optionToRemove !==option
        })
    }) )
   
};

handlePick(){
    const number=Math.floor(Math.random() * this.state.options.length)
    const option=this.state.options[number]
   this.setState({selectedOption:option})
}
    handleAdd(option){
        if(!option){
            return 'Enter valid value to add item'
        }
        else if(this.state.options.indexOf(option)>-1 ){
            return "input already exist"

        }
  this.setState((prevState)=>{
      return{
          options:prevState.options.concat(option)
      }
  })


    };
    onModal(){
     
        this.setState({selectedOption:undefined})   
        
    }
   
    render(){
        return(
            <div>
                <Header/>
                <div className="container">

                <Action hasOption={this.state.options.length > 0} pick={this.handlePick}/>
                <div className="widget">
                <Options options={this.state.options} removeOption={this.handleRemoveOne} remove={this.handleRemove}/>
                <AddOptions handleAdd={this.handleAdd} />

                </div>
        
                </div>   
                <OptionModal selectedOption={this.state.selectedOption} cancel={this.onModal}/>
            </div>
        )
    }
}
      
export default Indecision