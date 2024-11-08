const Contact =()=>{
    return(
    <div className="border border-gray-400 mx-96 pt-32 cursor-pointer  bg-gray-500">
     <center>
        <h1 className="font-bold  m-4 p-4 ">Contact Us</h1>
        
        <input type="text" className="border border-black" placeholder="name"></input>
        <br/>
        <br/>
       
        <input type="text" className=" border border-black" placeholder="message"></input>
        <br/>
        <br/>
        
        <input type="text" className=" border border-black" placeholder="Email"></input>
        <br/>
        <br/>
       
        <input type="text" className=" border border-black" placeholder="Password"></input>
        <br/>
        <br/>
        <button className="border border-black hover:bg-green-500">submit</button>
        <br/>
        <br/>
    </center>
    </div>
    );
};
export default Contact;