import React, { Component } from "react";
import BookingList from "./BookingList";
import DroneList from "./DroneList";
import SearchBar from "./SearchBar";

class MainContainer extends Component {


    state = {
        drones: [],
        searchText: '',
        bookings: [],
        updatedBookings: {},
        user: null 
        
      }
    

  componentDidMount() {
    fetch('http://localhost:3000/drones')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
              drones: data
            })
    })

  
    // call another fetch for the other url endpoint
    fetch('http://localhost:3000/bookings')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
              bookings: data
            })
            // console.log(data)
    })
}

    editBookingForm = (updateBooking)=>{
      //  console.log(updateBooking)
      // this.setState({
      //   updatedBookings: updateBooking
      // })
      let bookings = this.state.bookings.filter(eachBooking => eachBooking.id !== updateBooking.id)
      this.setState({
        bookings: [...bookings, updateBooking]
      })
    }

    searchBar = (textT)=>{
      // console.log(textT)
      this.setState({
        searchText: textT
      })
    }

    addNewBooking = (newBooking)=>{
      this.setState({
        bookings: [...this.state.bookings, newBooking]
      })
    }

    deleteBooking = (booking) =>{
      // console.log(artist)
      fetch('http://localhost:3000/bookings/'+booking.id, {method: 'DELETE'})
      .then(r => r.json())
      .then(()=>{
        this.setState({
          bookings: this.state.bookings.filter(deletedBooking => deletedBooking.id !== booking.id)
        })
      })
    }
  
  
    render(){
      const filteredDrones = this.state.drones.filter(filterDrone => filterDrone.category.toLowerCase().includes(this.state.searchText))
    return (
      this.props.currentUser ?
      <div>
       <SearchBar searchBar={this.searchBar} searchText={this.state.searchText}/>
        <DroneList drones={filteredDrones} bookings={this.state.bookings} addNewBooking={this.addNewBooking}/>
        <BookingList bookings={this.state.bookings} editBookingForm={this.editBookingForm} drones={this.state.drones} updatedBookings={this.state.updatedBookings} deleteBooking={this.deleteBooking}
        />
      </div> : null 
      ) 
    }
  }
  
  export default MainContainer