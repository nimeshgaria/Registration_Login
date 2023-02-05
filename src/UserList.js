import React, {Component} from "react";
import UserDetails from "./UserDetails";
import axios from "axios";
class UserList extends Component{
    constructor(props){
        super(props)
        this.state = {list: []}
    }
    componentDidMount(){
        axios.get('http://localhost:8080/user', 
        {headers:{"Accept": "application/json" }})
        .then(response => this.setState({list: response.data.object})
            );
        console.log()
    }

    render(){

        return(
        <div >
            <ul>
                
            {this.state.list.map(item => [
               <li>
                        <div className="listElement">
                           <span className="username">{item.username}</span>
                            <span className="elementDetails">{item.firstName}</span>
                            <span className="elementDetails">{item.lastName}</span><br/>
                            <button >Show More</button>
                            {/* <UserDetails data = {item}/> */}
                            <UserDetails data = {item} />
                        </div>
                  
                        </li>
                        
                
            ])}
            
            </ul>
        </div>    
        )
    }

}
export default UserList