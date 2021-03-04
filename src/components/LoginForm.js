import React from "react";
import { withRouter } from "react-router";
import { Form, Segment, Message, Button } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  //When form is submitted, make a fetch to "log in the user"
  handleLoginSubmit = () => {
    console.log("attempting to log in")
    fetch("http://localhost:3000/login", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(res => res.json())
    .then(data => {
       if(data.error_message){
        alert(data.error_message)
            }else{
                //succesful log in
            localStorage.setItem("token", data.token)
            this.props.updateCurrentUser(data.user_data)
        }
        
    })
  }

  render() {
    return (
        <Segment className='loginform'>
        <img  className="logo" title="DroneShip" src="https://thumbs.dreamstime.com/t/vector-drone-prohibited-sign-illustration-colorful-flat-design-no-zone-quadcopter-red-background-70448549.jpg"></img>
        <Form className='grabloginform'
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
          <Form.Group widths="equal">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <Form.Input
            className="input-text"
              label="email"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br></br>
            <Form.Input
            className="input-text"
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <br></br>
          </Form.Group>
          <Button type="submit">Login</Button>
      </Form>
    </Segment>
       
    );
  }
}

export default withRouter(LoginForm);




// import React from 'react';
// import { withRouter } from 'react-router'
// import {Button, Form, Segment, Message} from 'semantic-ui-react'

// class LoginForm extends React.Component {

//     state = {
//         name: '',
//         password: ''
//     }
       
//         handleChange = (e, { name, value }) => {
//             this.setState({ [name]: value })
//         }
//         handleLoginSubmit = ()=>{
//             fetch('http://localhost:3000/login',{
//                 method: 'POST',
//                 headers: {"Content-Type":"application/json",
//                 "Accept" : "aplication.json"
//             },
//             body: JSON.stringify({
//                 name: this.state.name,
//                 password: this.state.password
//             })
//         }).then(res => res.json())
//         .then(userData => {
//             if(userData.error_message){
//                 alert(userData.error_message)
//             }else{
//             this.props.updateCurrentUser(userData)
//             }
//         })
//     }
    
//     render() {
//         return (
//           <Segment>
//             <Form
//               onSubmit={this.handleLoginSubmit}
//               size="mini"
//               key="mini"
//               loading={this.props.authenticatingUser}
//               error={this.props.failedLogin}
//             >
//               <Message
//                 error
//                 header={this.props.failedLogin ? this.props.error : null}
//               />
//               <Form.Group widths="equal">
//                 <Form.Input
//                   label="username"
//                   placeholder="username"
//                   name="username"
//                   onChange={this.handleChange}
//                   value={this.state.username}
//                 />
//                 <Form.Input
//                   type="password"
//                   label="password"
//                   placeholder="password"
//                   name="password"
//                   onChange={this.handleChange}
//                   value={this.state.password}
//                 />
//               </Form.Group>
//               <Button type="submit">Login</Button>
//             </Form>
//           </Segment>
//         );
//       }
//     }



//     export default LoginForm