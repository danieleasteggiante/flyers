import React, { Component } from 'react';


class Flyer extends Component {
    constructor(props){
        super();
        };


    render(){ 
        return(
            
            <div className="card">
                <img className="card-img-top" src="http://localhost:3000/img/thumb.jpg" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.retailer}</h5>
                    <p className="card-text">{this.props.title}</p>
                    <p>{this.props.category}</p>
                    <a href="#" className="btn btn-primary">Salva</a>
                </div>

            </div>
  
          ) 
        }
    }
    export default Flyer;