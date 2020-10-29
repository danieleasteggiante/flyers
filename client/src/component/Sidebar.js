import React, { Component } from 'react';


class Sidebar extends Component {
    constructor(props){
        super();
        };


    render(){ 
        return(
            
            <div className="container w-75 position-absolute bg-white top">
                <div className="row">
                <div className="col-12">
                    <h4>Favourites</h4>
                    </div> 
                </div>
                <div className="list-group list-group-flush">
                    <ul>
                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>
                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                        <li><a href="#" className="list-group-item list-group-item-action bg-white">Love</a></li>

                    </ul>
                    

                    
                </div>
            </div>
          ) 
        }
    }
    export default Sidebar;