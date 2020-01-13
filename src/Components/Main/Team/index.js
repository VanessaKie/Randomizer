import React from 'react';
import {USER, IMG} from '../../../configs/const';

const TeamList = (props) => {
    const teams = props.team;
    const teamContainer = teams.map(team => ( <Team teams={team} /> ))
    return <div className= "row m-2 mb-4 mt-4 border border-secondary bg-dark">{teamContainer}</div>;
}

class Team extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            team: false
        }
       
        
    }

    

    render(){
        
     
        return(
                
                <div className="col-2 pb-3 pt-3 m-2 border border-secondary bg-white">
                    <img src={IMG} />
                    <p>{this.props.teams.name}</p>
                    {console.log('teams', this.props.teams)}
                </div>
                
        )
    }
}

export default TeamList;