import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInfo:{
               login:"Dummy",
               public_repos:"0",
               avatar_url:"https://dummy-photo.com",
            },
        };
        // console.log("child constructor");
    }
     
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shiva7-ux");
        const json = await data.json();
        
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }



    render() {
        // console.log("child render");
        // const{name,location}=this.props;
        // const{count}=this.state;
        

        // const {name,location}=this.state.userInfo;
        return  (
            <div className="user-card">
              
                <h2>Login:{this.state.userInfo.login}</h2>
                <h3>public_repos:{this.state.userInfo.public_repos}</h3>
                <h3>avatar_url:  {this.state.userInfo.avatar_url}</h3>
                <h3>Conatct:@raj12</h3>
          </div>
        );
    }
}
export default UserClass;