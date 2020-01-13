import React from 'react';
import Member from './Member';
import List from './List';
import TeamList from './Team';
import {USER, IMG} from '../../configs/const';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberInput: {},
            inactivUser: [],
            teams: [],
        };
        this.users = USER;
        this.active = this.users.slice();
    }

    handleInput = (e) => {
        const input = e.target.value
        this.setState({
            numberInput: input
          });
        console.log('input', input);
        console.log('state input', this.state.numberInput)
    }
    
    setPresent = (id) => {
       console.log('id', id)
       console.log('index', this.active.findIndex(item => item.id === id));
       console.log('type', typeof(this.active))
        if (this.active.hasOwnProperty(id)){ 
            const index = this.active.findIndex(item => item.id === id);
            if (index >=0 ){
           const remove = this.active.splice(index, 1)
           console.log('removed', remove)
                } else if (index < 0){
                    const add = this.users.filter(item => item.id === id)
                        console.log('add', add)
                        this.active.push(add[0]);
                }
            }else{
                alert('Sorry, something went wrong. Please reload the page!')
            }  
            
            console.log('active', this.active) 
            console.log('User', this.users) 
        
        }

     handleRandom = (numberInput) => {
        console.log('handleRandom acitve', this.active.length)
        let length = this.active.length
        let teams = Math.floor(length/numberInput);
        
        let arr= [];
        let newUsers = this.active.sort(() => Math.random() - 0.5); 
        console.log('shuffle', newUsers)
  
        for (let i = 0; i < teams; i++){
            let x = newUsers.splice(0, numberInput)
           
            arr.push(x);
          }
          if (newUsers.length > 0){
              
            for (let j = 0; j < newUsers.length; j++){ 
             console.log("length", newUsers.length)
             arr[j].push(newUsers.shift());
             console.log('new arr',arr )
             
            };
          }
       
        this.setState ({
          teams: arr,
        })
        
        console.log('state',this.state.teams);
        
      } 


    render(){
        const LIST = this.users.map(user => (
            <List key={user.id} id={user.id} setPresent={this.setPresent} name={user.name} />     
          ));

        const TEAM = this.state.teams.map(teams => (
            <TeamList team={teams} />
        ));

        return (
        <div className="p-5"> 
            
            <form className="input-group mb-4 "> 
            <select className="pl-5" onChange={this.handleInput} value={this.state.numberInput}>
                <option value="2">2</option>
                <option  value="3">3</option>
                <option  value="4">4</option>
                <option  value="5">5</option>
            </select>
                    <button type='button' className="btn-random btn btn-warning ml-2" onClick={() => this.handleRandom(this.state.numberInput)}>Team</button>   
            </form>
           

            <div className="container">
            {console.log('active', this.active)}
                <div className="row">
                    <div className="col-3">
                    {LIST}
                    </div>
                    <div className="col-9 border bg-light">
                    {TEAM}
                    </div>
                </div>{/*  <h1>Teams</h1>
            {this.state.teams.length > 0  ? this.Teams() : CARD}
            {console.log('teams', this.state.teams)}
            </div> */}
            </div>
        </div>
        )
    }

}
export default Main;