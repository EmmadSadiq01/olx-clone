import React from 'react';


export default class Cards extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h4>{this.props.price}</h4>
                <button onClick={()=>{this.props.get_data("emmad sadiq")}}>send data</button>

            </div>
        )
    }
}