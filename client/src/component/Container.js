import React, { Component } from 'react';
import Header from './Header';
import Flyer from './Flyer';
import axios from 'axios/index';




class Container extends Component {
    constructor(props){
        super();
        this.state={
            flyers : [],
        }
        };

   
    async getApi(){
     const res  = await axios.post('/api/flyers?page=1&limit=100');
     var arrData= res.data;
     var stateFLyers=[];
     arrData.forEach(element => {
        stateFLyers.push(element);
     });
     this.setState({
         flyers : stateFLyers,
     })
     
    }
    
    componentDidMount(){
        var data = this.getApi();
        
    }

    renderFlyer(flyers){
        if (flyers){
            return flyers.map((flyer, i)=>{
                return (
                <div  key={i} className="col-sm-6 col-md-3">
                <Flyer key={i+1}id={flyer.id}  title={flyer.title} start_date={flyer.start_date} end_date={flyer.end_date} is_published={flyer.is_published} retailer={flyer.retailer} category={flyer.category}/>
                </div>
                )
            })
        } else {
            return null;
        }
    }


    render(){
        return( 
            <div>
            <Header></Header>
            <div className="container-fluid">
            <div className="row">
        
            {this.renderFlyer(this.state.flyers)}
        
          
           
            </div>
            </div>
            </div>   
        )
    }
}

    export default Container;