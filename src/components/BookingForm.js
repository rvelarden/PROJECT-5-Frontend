import React from 'react'
import { Form, Button, Card } from 'semantic-ui-react'
import PlacesAutocomplete, {
  
} from 'react-places-autocomplete';

class BookingForm extends React.Component{
    
    state = {
        from_address: '',
        to_address: '',
        drone_id: ''
       
      }

      handleChange = (from_address) => {
        this.setState({ from_address });
       
       
      };
      handleChangeInput = (to_address) => {
        this.setState({ to_address });
       
      };
    
      handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        let newBooking = {
          from_address: this.state.from_address,
          to_address: this.state.to_address,
          drone_id: this.state.drone_id
          
        }
        // console.log(newBooking)
        let reqPack = {
          headers: {"Content-Type":"application/json"},
          method: 'POST',
          body: JSON.stringify(newBooking)
        }
        // console.log(reqPack)
        fetch('http://localhost:3000/bookings', reqPack)
        .then(r => r.json())
        .then(bookingData => this.props.addNewBooking(bookingData))
        // .then(console.log)
      }

      render() {
      return ( 
  <Form onSubmit={this.handleSubmit}>
      <br></br>
      <Card.Content extra>
          <PlacesAutocomplete
            value={this.state.from_address}
            onChange={this.handleChange}
            // onSelect={this.handleSelect}
           
            >{({getInputProps, suggestions, getSuggestionItemProps, loading})=>(<div>
                
                <input{...getInputProps({placeholder: "From address"})} />
                <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map(suggestion=>{
                        const style = {
                        backgroundColor: suggestion.active ? "#50C1E9" : "#fff7f7"
                        }
                    return <div{...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                    })}
                </div>
            </div>)}</PlacesAutocomplete>

          <PlacesAutocomplete
            value={this.state.to_address}
            onChange={this.handleChangeInput}
            onSelect={this.handleChangeInput}
           
            >{({getInputProps, suggestions, getSuggestionItemProps, loading})=>(<div>
                
                <input{...getInputProps({placeholder: "To address"})} />
                <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map(suggestion=>{
                        const style = {
                        backgroundColor: suggestion.active ? "#fd5f00" : "#fff7f7"
                        }
                    return <div{...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                    })}
                </div>
            </div>)}</PlacesAutocomplete>          
          </Card.Content>
      
      <select onChange={(e)=>this.setState({drone_id: e.target.value})}  className="input-text">
            <option>Select Drone</option>
                {this.props.drones.map(drone => <option value={drone.id}>{drone.model}</option>)}
      </select>
    
      <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
              Submit
      </Button>
  </Form>
        )
      }
    }
export default BookingForm
    


// import React from 'react'

// class BookingForm extends React.Component{
//     //state goes here
//     state = {
//         from_address: '',
//         to_address: '',
//         drone_id: ''
       
//       }
    
//       handleSubmit = (e) => {
//         e.preventDefault()
//         // console.log(this.state)
//         let newBooking = {
//           from_address: this.state.from_address,
//           to_address: this.state.to_address,
//           drone_id: this.state.drone_id
          
//         }
//         // console.log(newBooking)
//         let reqPack = {
//           headers: {"Content-Type":"application/json"},
//           method: 'POST',
//           body: JSON.stringify(newBooking)
//         }
//         // console.log(reqPack)
//         fetch('http://localhost:3000/bookings', reqPack)
//         .then(r => r.json())
//         .then(bookingData => this.props.addNewBooking(bookingData))
//         // .then(console.log)
//       }

    
    
//       render() {
//         return (
//           <div className="container">
//             <form onSubmit={this.handleSubmit} className="add-form">
              
//               <input onChange={(e)=>this.setState({from_address: e.target.value})} type="text" name="name" placeholder="Enter From Address" className="input-text"/>
//               <br/>
//               <input onChange={(e)=>this.setState({to_address: e.target.value})} type="text" name="address" placeholder="Enter To Address" className="input-text"/>
//               <br/>
//               {/* <input name="hiddenInput" value="hiddenValue" type="hidden" /> */}
//               <div >
//                 <select onChange={(e)=>this.setState({drone_id: e.target.value})} className="form-control" className="input-text">
//                   <option>Select Drone</option>
//                 {this.props.drones.map(drone => <option value={drone.id}>{drone.model}</option>)
//                 }
//                 </select>
//               </div>
//               <br/>
//               <input type="submit" name="submit" value="Submit" className="submit"/>
//             </form>
            
//           </div>
//         );
//       }
    
//     }
// export default BookingForm;