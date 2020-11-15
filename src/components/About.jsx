import React from 'react';
// import Footer from './footer';

class About extends React.Component {
constructor(){
    super()
    this.state={
        show:true
    }
}
    render(){
    return (
        <div>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            <h1>helo</h1>
            {this.state.show?
            <h1>welcome to About page </h1>:
            null
            }
            <button onClick={()=>{this.setState({show: !this.state.show})}}> Togle me</button>
            <h1>hello world</h1>
        </div>

    );
    }
}

export default About;
