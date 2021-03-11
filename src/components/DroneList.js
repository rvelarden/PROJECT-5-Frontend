import React, { Component } from "react"
import DroneCard from "./DroneCard.js"
import { Card, Icon, Image, Header,Button } from 'semantic-ui-react'

class DroneList extends Component {
   
      render() {
    return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
           <div  >
            <Header size='huge'  textAlign='center'>
            <h1>Available Drones</h1>
            </Header>
            </div>
            {this.props.drones.map(drone => <DroneCard drone={drone} drones={this.props.drones} addNewBooking={this.props.addNewBooking}/>)}
            
        </div>
    )
      }
}

export default DroneList