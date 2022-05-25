import React from "react";
import AppRouter from "./AppRouter";
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            userdata:{
                userName:"Aliaa",
                Password:1234
            },
            loginFlag:false,
            txtUser:'',
            txtPass:''
            

        }
    }
    handelerinput=(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            })

    }
    handelerSubmit=(e)=>{
        e.preventDefault();
        let UserObj={
            UserName:this.state.txtUser,
            Password:parseInt(this.state.txtPass)
        }
        if(this.state.userdata.userName===UserObj.UserName&&this.state.userdata.Password===UserObj.Password)
        {
            this.setState({
                loginFlag:true
            })
        }
        

    }
    render(){
        if(!this.state.loginFlag){
        return(
        <div className="container">
            <h1>Login Form </h1>
            <form onSubmit={this.handelerSubmit}>
            <span >UserName</span>  
            <input 
            className="form-control" 
            type={"text"}
            value={this.state.txtUser}
            name="txtUser"
            onChange={this.handelerinput}
            />
            <span>Password</span> 
            <input 
            className="form-control" 
            type={"password"}
            value={this.state.txtPass}
            name="txtPass"
            onChange={this.handelerinput}
            />
            <input className="btn btn-primary" type="submit" value={"Login"}/>

         </form>
                
     </div>

        )}
        else{return(
            <AppRouter/>
        )}
    }

}
export default Login;