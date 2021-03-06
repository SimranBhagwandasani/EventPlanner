import "./App.css";
import Navbar from "./components/Navbar";
//import Footer from ".components/Footer";
import react ,{Component} from 'react'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Signup from "./pages/SignUp";
import  DisplayEvent from "./pages/DisplayEvent";
import  Users from "./pages/users";
import  Notifs from "./pages/Notifs";
import {BrowserRouter as Router, Routes, Route} 
from 'react-router-dom';
import axios from 'axios'
// import DisplayEvent1 from "./pages/importan";
import Contact from "./pages/Contact";
import AppCart from "./AppCart";
export default class App extends Component
 {
    state = {
       user: []
      }


  componentDidMount(){

    // var url = '/users/ localStorage.getItem("token1")';
    var url = '/users?user_id=' + localStorage.getItem('token1');
    
    
     axios.get(url, {
        headers :{
          'Content-Type' : 'application/x-www-form-urlencoded',
          Accept: 'application/json',
           'Content-Type': 'application/json',
          



          token : localStorage.getItem('token')
        }}).then(

           res =>{
            //  console.log(res.data);
            // this.setState({
            //   user: res.data
            // });
            //     console.log(res);
            console.log("response")
            console.log(res.data);
            this.setUser(res.data);
           },
           err => {
               console.log(err)
           }
    )
};
  setUser = user=>{
    this.setState({
      user: user
    });
  }
   render(){
     console.log("i am jenil.")
     console.log("heleos")
    //  console.log(this.state.user.user_items.user_id);
     console.log(this.state.user);
  return (
    <div className="App">

      <Router>
        <Navbar user={this.state.user} setUser={this.setUser}> </Navbar>
        
        <Routes>
        {/* <Route path ="/" component={()=><Home user={this.state.user}/>}/> */}
          <Route path ="/" element={<Home user={this.state.user}/>}/>
          <Route path ='/event' element={<Events/>}/>
          <Route path ='/Login'  element={<Login setUser={this.setUser}/>}/>
          <Route path ='/Signup'  element={<Signup/>}/>
          <Route path ='/about'  element={<DisplayEvent user={this.state.user}/>}/>
          {/* <Route path ='/about'  element={<DisplayEvent1 user={this.state.user}/>}/> */}
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ='/USERS'  element={<Users/>}/>
          <Route path ='/notifs'  element={<Notifs/>}/>
          <Route path ='/shop' element={<AppCart/>}></Route>
          {/* <Route path ='/forgot'  element={<Forgot/>}/> */}
      </Routes>
      </Router>  
    
      
    </div>
      
  );
   }
}

// export default App;
