import React, { Component } from "react"
import DroneCard from "./DroneCard.js"


class DroneList extends Component {
   
      render() {
    return (
        <div>
            {this.props.drones.map(drone => <DroneCard drone={drone} drones={this.props.drones} addNewBooking={this.props.addNewBooking}/>)}
            
        </div>
    )
      }
}

export default DroneList