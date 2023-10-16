import React from 'react'

class Main extends React.Component{
    state={
        count:0
    }
    Inc=()=>{
        this.setState({
            count: this.state.count + 1,
        })
    }
    Dec=()=>{
        this.setState({
            count: this.state.count - 1,
        })
    }
    Res=()=>{
        this.setState({
             count:0,
        })
    }

    render (){
        return(
            <div className='main'>
                <h1>{this.state.count}</h1>
                <button onClick={this.Inc}>+</button>
                <button onClick={this.Dec}>-</button>
                <button onClick={this.Res}>Reset</button>
            </div>
        )
    }
}

export default Main