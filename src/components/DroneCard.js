import BookingForm from "./BookingForm";
import React, { Component } from 'react';

class Drone extends Component {

  state = {
    showForm: false
  }
  displayForm = () =>{
    let display =  !this.state.showForm
    this.setState({showForm: display})
    // console.log('clicked')
  }

    render() {
      return (
      <div className="box-wrap">
          <img style={{ width: "300px", height: "210px", objectFit: "cover" }} src={this.props.drone.image} />
          <div className="drone-name">
            <h2>{this.props.drone.model}</h2>
            <h2>{this.props.drone.category}</h2>
            
            <h3>-Location: {this.props.drone.location}</h3>
            <h3>-Daily Price: ${this.props.drone.price_day}</h3>
            <h3>-Weekly Price: ${this.props.drone.price_week}</h3>
            <h3>-Monthly Price: ${this.props.drone.price_month}</h3>
            <h3>-Yearly Price: ${this.props.drone.price_year}</h3>
            <h3>-Max Capacity: {this.props.drone.max_capacity} KG.</h3>
            <h3>-Max Distance: {this.props.drone.max_distance} KM.</h3>
            
          </div>
          <button className='move_button' onClick={this.displayForm} >Book Delivery</button>
          {this.state.showForm ? <BookingForm drones={this.props.drones} addNewBooking={this.props.addNewBooking}/> : null}
      </div>
    );
  }

}

export default Drone;