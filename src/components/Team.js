import React,{Component} from 'react'
import TeamMem from './TeamMem'
import memberinfo from './memberinfo'

class Team extends Component{
    constructor(){
        super()
        this.state = { memberinfo: memberinfo, members:[], counter: 0,}
        this.clickEvent = this.clickEvent.bind(this);
    }

clickEvent(){
    if(this.state.counter < this.state.memberinfo.length){
        this.state.members.push(this.state.memberinfo[this.state.counter]);
        this.setState(function(prevState){
            return {counter: prevState.counter + 1}
        });
        this.newmembers = this.state.members.map(member => {
            return <TeamMem  key = {member.id} img= {member.img} name = {member.name} position = {member.position}
                             phone = {member.phone} email = {member.email} website = {member.website}
            />
        })
    }
}

render(){
        return(
            <div className="row">
            <button className = "btn btn-primary btn-lg btn-block red" onClick = {this.clickEvent}>Click Here</button>
            {this.newmembers}
            </div>
        )
    }  
}
export default Team;