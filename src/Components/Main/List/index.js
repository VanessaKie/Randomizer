import React from 'react';
import {USER, IMG} from '../../../configs/const';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: true,
        }
        this.id = this.props.id;
        this.name = this.props.name;
        this.present = this.present;
        
    }

    setDisplay = (id) => {
        const active = this.state.active
        const present = active ?  !this.state.active : this.state.active;

        this.props.setPresent(id)

        this.setState({
            active: !active})
    }

    render(){
        return(
            <div  onClick={() => this.setDisplay(this.props.id)} className= {this.state.active ? "list-group-item list-group-item-action" : "list-group-item list-group-item-secondary" }>
                <div className="d-flex w-100 justify-content-between">
                <div className="d-flex w-30 justify-content-between">
                    <img src= {IMG} />
                </div>
                <div className="d-flex w-70 justify-content-between">
                <p class="mb-1">{this.name}</p>
                </div>
            </div> 
        </div> 
        
        
           
        )
    }
}

export default List;