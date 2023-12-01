import React, {Component} from 'react'

class TeamMem extends Component{

    render(){
        return(
            <div className="col-md-4 col-sm-6 border">
                <div className='card'>
                    <div className='card-header'>
                        <img style= {{maxWidth: '100%'}} src={this.props.img} />
                    </div>
                    <div className='card-body' 
                        style={{backgroundColor: this.props.website ? 'white':'gray'}}>
                        <h5>{this.props.name}</h5>
                        <h2>{this.props.name}</h2>
                        <div>{this.props.position}</div>
                        <div>{this.props.phone}</div>
                        <div>{this.props.email}</div>
                        <div>{this.props.website}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default TeamMem