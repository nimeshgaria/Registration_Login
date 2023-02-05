import  {Component} from "react";
import axios from "axios";
import TabComponent from "./components/TabComponent";
class SignUp extends Component{
    
    constructor(props){
        super(props)
         this.state = {email : "", username : "", password: "", firstName: "", lastName: ""}
    }
    componentDidMount(){}
    onChangeHandler = (event) =>{
        let fieldName = event.target.name
        let value = event.target.value
        this.setState({[fieldName] : value })
        //  console.log(event.target.name)
    }

    onSignUpHandler = () =>{
            console.log(this.state.email, this.state.username,this.state.password)
            const user = {
                email: this.state.email,
                firstName :  this.state.firstName,
                lastName : this.state.lastName,
                username  : this.state.username,
                password : this.state.password,

               
            }
            axios.post('http://localhost:8080/user/add', user, {headers: {"Accept" : "application/json"}})
            .then(response => console.log(response)
            // this.setState({ user: response.data.id }
                );
            console.log()

            
        }
    render(){
        return(
            <div>
               <TabComponent/>
                
            <label> FirstName</label>
            <input type = "text" name = "firstName" value={this.state.firstName} onChange={this.onChangeHandler}></input>
            <label> LastName</label>
            <input type = "text" name = "lastName" value={this.state.lastName} onChange={this.onChangeHandler}></input>
            <label> Email </label>
            <input type = "text" name = "email" value={this.state.email} onChange= {this.onChangeHandler}  ></input>
            <label> Username</label>
            <input type = "text" name = "username" value={this.state.username} onChange={this.onChangeHandler}></input>
            <label> Password</label>
            <input type = "password" name = "password" value={this.state.password} onChange={this.onChangeHandler}></input>
            <button> Sign Up</button>
            </div>
            )
        
    }
}
export default SignUp;