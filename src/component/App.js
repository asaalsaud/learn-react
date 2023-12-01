import React,{Component} from 'react'

class App extends Component{
    constructor(){
        super();
        this.state = { number: 0 }
        this.ClickHandler = this.ClickHandler.bind(this);
    }

    ClickHandler(){
        this.setState(prevState => {
            return { number: prevState.number + 1 }
        })
    }
    render(){
        return(
            <div className="container">
                <h1>{this.state.number}</h1>
                <button className="btn btn-primary" onClick={this.ClickHandler}>Click Me!</button>
            </div>
            
        )
    }
}

export default App