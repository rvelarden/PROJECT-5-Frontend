// import React from "react";
// import { withRouter } from "react-router";
// import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import Droneproject from './video/droneproject.mp4'
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment
 } from 'semantic-ui-react'

  


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
 <div className="banner" >
    <video autoPlay loop muted>
    <source src={Droneproject} type='video/mp4' />
</video>
   <br></br>
      <Header as='h2' color='teal' textAlign='center'>
        <Image style={{ width: "150px", height: "100px", objectFit: "cover" }} src="http://arcos-platform.site/wp-content/uploads/2021/03/PosterArtboard-4Asse.png" />
      </Header>
  <Grid textAlign='center' style={{ height: '2vh' }} verticalAlign='middle' >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h3'  textAlign='center' >
      <h4 class="ui color2 header">Delivery Drone Services</h4>
      </Header>
      <br></br>
      <Header as='h1'  textAlign='center' >
      <h1 class="ui color1 header">Log in to your account</h1>
       </Header>
      <Form size='large'
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
        <Segment stacked>
          <Form.Input 
          fluid icon='user' iconPosition='left' placeholder='E-mail address'
              // label="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
           />
         
              <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              type="password"
              // label="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
         {/* <Button type="submit">Login</Button> */}
          
          <Button secondary fluid size='medium' type="submit" color='teal' style={{ marginBottom: '1em' }}>
            Log In
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  </div>
          )
        }
      } 

export default LoginForm

// class LoginForm extends React.Component {
//   state = {
//     email: "",
//     password: ""
//   };

//   handleChange = (e, { name, value }) => {
//     this.setState({ [name]: value });
//   };

//   //When form is submitted, make a fetch to "log in the user"
//   handleLoginSubmit = () => {
//     console.log("attempting to log in")
//     fetch("http://localhost:3000/login", {
//       method:"POST",
//       headers: {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json"
//       },
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       })
//     }).then(res => res.json())
//     .then(data => {
//        if(data.error_message){
//         alert(data.error_message)
//             }else{
//                 //succesful log in
//             localStorage.setItem("token", data.token)
//             this.props.updateCurrentUser(data.user_data)
//         }
        
//     })
//   }

//   render() {
//     return (
//         <Segment className='loginform'>

//         <Image  className="logo" title="DroneShip" src="https://thumbs.dreamstime.com/t/vector-drone-prohibited-sign-illustration-colorful-flat-design-no-zone-quadcopter-red-background-70448549.jpg"></Image>
//         <Form className='grabloginform'
//           onSubmit={this.handleLoginSubmit}
//           size="mini"
//           key="mini"
//           loading={this.props.authenticatingUser}
//           error={this.props.failedLogin}
//         >
//           <Message
//             error
//             header={this.props.failedLogin ? this.props.error : null}
//           />
//           <Form.Group widths="equal">
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//             <Form.Input
//             className="input-text"
//               label="email"
//               placeholder="email"
//               name="email"
//               onChange={this.handleChange}
//               value={this.state.email}
//             />
//             <br></br>
//             <Form.Input
//             className="input-text"
//               type="password"
//               label="password"
//               placeholder="password"
//               name="password"
//               onChange={this.handleChange}
//               value={this.state.password}
//             />
//             <br></br>
//           </Form.Group>
//           <Button type="submit">Login</Button>
//       </Form>
//     </Segment>
       
//     );
//   }
// }

// export default withRouter(LoginForm);




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