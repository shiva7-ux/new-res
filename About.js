import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("parent constructor");
    
    }
    // componentDidMount(){
    //     console.log("parent cmoponent did mount");
    // }



  render(){
    // console.log("parent render");
    return(
        <div className="pt-24">
            {/* <h1>About</h1> */}
            <User name={"I am shiva kumar"}/>


            <UserClass name={"I am raj kumar"} location={"HYDERBAD CLASS"}/>
        </div>
    );
  }

}





export default About;