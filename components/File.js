import react, {Component} from 'react'

class File extends Component{
    render(){
        return(
            <div>{this.peops.name} {this.props.name2}</div> 
        )
    }
}

export default File