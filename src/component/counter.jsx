import React, { Component } from "react";
class counter extends Component {
  state = {
    //count=0
    value: this.props.value
  };
  //constructor(){
  //super();
  //this.handleIncrement=this.handleIncrement.bind(this);
  //}
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getbadgecolor()}>
          <h1> {this.formatcount()}</h1>
        </span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-primary btn-lg m-2'>
          increment it!
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className='btn btn-danger btn-md m-2'>
          delete
        </button>
      </div>
    );
  }
  getbadgecolor() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "primary" : "warning";
    return classes;
  }
  formatcount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  //getlist(){
  //if(this.state.tags.length===0) return "no tags present";
  //return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

  // }
  handleIncrement = () => {
    // console.log("increment clicked",this)
    // this.setState({count:this.state.count+1});
    this.setState({ value: this.state.value + 1 });
  };
}

export default counter;
