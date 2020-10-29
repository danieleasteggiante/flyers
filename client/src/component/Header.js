import React, { Component } from 'react';
import Sidebar from './Sidebar';



class Header extends Component {
    constructor(props){
        super();
        this.state = {
            sidebar: false,
        }
        this.handleClick = this.handleClick.bind(this);
        };

    handleClick() {
        if (this.state.sidebar==true){
        this.setState({
            sidebar: false,
          });
        } else {
            this.setState({
                sidebar: true,
              });
        }
    }
    


    render(){
        if (this.state.sidebar == false){
        return( 
                <nav className="navbar navbar-dark bg-purple">
                    
                <div className="row">
                    <div className="col-6">
                    <button className="navbar-toggler" id="toggler" onClick={this.handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="col-6">
                <h3 className="text-light" href="#">ShopFully</h3>
                </div>
                </div>
            </nav>
        )} else {
            return(
                <div>
                    <Sidebar></Sidebar>
            <div style={{ width: "100%", height: "100%", top:0, right:0, position: 'absolute', border: '1px solid lightgrey', borderRadius: 10, backgroundColor: 'rgba(52, 52, 52, 0.5)', zIndex: '1' }} onClick={this.handleClick}>

            </div>

                <nav className="navbar navbar-dark bg-purple">
                    
                <div className="row">
                    <div className="col-6">
                    <button className="navbar-toggler" id="toggler" onClick={this.handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="col-6">
                <h3 className="text-light" href="#">Prova</h3>
                </div>
                </div>
            </nav>

            
            


            </div>


            )
        } 
        }
    }

    export default Header;