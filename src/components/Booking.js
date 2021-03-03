import EditBooking from "./EditBooking";
// import React from "react"
import React, { Component } from 'react';

// const Booking = ({booking, clickAction, updatedBookings, showForm }) => {
  class Booking extends Component {

    state = {
      showForm: false
    }
    displayForm = () =>{
      let display =  !this.state.showForm
      this.setState({showForm: display})
      this.props.editBookingForm(this.props.booking)
      // console.log('clicked')
    }

    render(){
      return (
      <div className='box-wrap' >
        {/* className='box-wrap' */}
            <img class="image" style={{ width: "250px", height: "150px", objectFit: "cover" }} src={this.props.booking.drone.image} />
            <h2>{this.props.booking.drone.model}</h2>
            <h2>From: {this.props.booking.from_address}</h2>
            <h2>To: {this.props.booking.to_address}</h2>

            {/* <button className='move_button' onClick={displayForm} >Edit form</button>  */}
          <button  className='move_button' onClick={this.displayForm} >Edit Delivery</button>
          {/* <button className='move_button' onClick={()=>this.props.editBookingForm(this.props.booking)}>Edit Now</button> */}
          
          {this.state.showForm ?  <EditBooking booking={this.props.bookingItem} updatedBookings={this.props.updatedBookings} editBookingForm={this.props.editBookingForm}/> : null}
          <br></br>
          <br></br>
          <button onClick={()=>this.props.deleteBooking(this.props.booking)}className="del-btn">Cancel Booking</button>

      </div>
    );
  }

}

export default Booking;