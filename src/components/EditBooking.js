import React from 'react'

class EditBooking extends React.Component{
    //state goes here
    state = {
      from_address: '',
      to_address: ''
       
      }

  toggleBooking = (e)=> {
      e.preventDefault()
      // console.log(this.props.updatedBookings)
        let editBooking = {
          from_address: this.state.from_address,
          to_address: this.state.to_address
//             
        }
        // console.log(editBooking)
        let reqPackage = {
            headers: {"Content-Type": "application/json"},
            method: 'PATCH',
            body: JSON.stringify(editBooking)
        }
        // console.log(reqPackage)
        fetch(`${'http://localhost:3000/bookings'}/${this.props.booking.id}`, reqPackage)
        .then(res => res.json())
        // .then((patchBooking) => console.log(patchBooking))
        .then((patchBooking) => {
          // console.log(patchBooking)
          this.props.editBookingForm(patchBooking)
        })
        
        // .then(patchBooking => {
        //   this.setState({
        //     bookings: this.props.bookings.map((bookingItem) =>
        //     //if existing booking.i is equal  to updatedbookin.id the replace existing booking with updated booking
        //     bookingItem.id = patchBooking.id
        //     // console.log
        //     ),
        //   });
        //   // debugger
        // })
        

        // .then(patchBooking => {
        //   this.setState({
        //     bookings: [...this.state.bookings, patchBooking]
        //   });
        // })
            // .then(this.props.editBookingForm)  
  
}
    
    
render() {
  return (
    <div className="container">
      
      <form  onSubmit={(e)=>this.toggleBooking(e, this.props.updatedBookings)} className="add-form">
        
        <input onChange={(e)=>this.setState({from_address: e.target.value})} type="text" name="name" placeholder="Enter From Address" className="input-text" value={this.props.from_address}/>
        <br/>
        <input onChange={(e)=>this.setState({to_address: e.target.value})} type="text" name="name" placeholder="Enter To Address" className="input-text" value={this.props.to_address}/>
        <br/>
        <input type="submit" name="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}
    
    }
export default EditBooking;