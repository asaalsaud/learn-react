import react, {Component} from 'react'


class App extends Component{
    constructor(){
        super()
        this.state= {answer: 'yes'}
    }
    render(){
        return(
            <div>Do you love me? {this.state.answer}</div>  
        )
    }
}

export default App