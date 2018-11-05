import React, { Component } from 'react';
class counter extends Component {
   state={
       count:0
     
   };
   //constructor(){
       //super();
       //this.handleIncrement=this.handleIncrement.bind(this);
   //}
    render() { 
       return (
     <div>
       <span  className={this.getbadgecolor()}><h1> {this.formatcount()}</h1></span>
       <button onClick={this.handleIncrement}className="btn btn-secondary lg">increment it!</button>
       

     </div>);
    }
    getbadgecolor(){
     let classes="badge m-3 badge-";
     classes+=this.state.count===0 ? "primary" :"warning";
     return classes;
 }
    formatcount(){
    const{count}=this.state;
    return count ===0 ? "Zero": count;
    }

    //getlist(){
        //if(this.state.tags.length===0) return "no tags present";
        //return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    
   // }
    handleIncrement=()=>{
   // console.log("increment clicked",this)
    this.setState({count:this.state.count+1});
    };
}
 
export default counter;