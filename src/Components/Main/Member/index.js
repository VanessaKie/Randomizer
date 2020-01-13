import React from 'react';
import {USER, IMG} from '../../../configs/const';

const Member = (props) => {
    const {id, name, present} = props
    return(
      <>
        <div class="list-group">
          <div class="d-flex w-30 justify-content-between">
            <img src= {IMG} />
          </div>
          <div class="d-flex w-70 justify-content-between">
            <h5 class="mb-1">{props.name}</h5>
          </div>
        </div>
         {/*  <div className="col-md-5">
              <img src= {IMG} />
            </div>
            <div className="col-md-5 card-body">
              <h5 className="card-title">{props.name}</h5>
              </div> */}
      </>
    )
}

/* class Member extends React.Component{

    render(){
        return(
            <div>
                <List />
            </div>
        )
    }
} */

export default Member;

