import React from 'react'
import { Button, Form, Card } from 'semantic-ui-react'
import PlacesAutocomplete, {
  
} from 'react-places-autocomplete';


class EditBooking extends React.Component{
    //state goes here
    state = {
      from_address: '',
      to_address: ''
       
      }

      handleChange = (from_address) => {
        this.setState({ from_address });
       
       
      };
      handleChangeInput = (to_address) => {
        this.setState({ to_address });
       
      };    

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
        
  
}
    
    
render() {
  return (

    <div className="container">
      <br></br>
      <Form onSubmit={(e)=>this.toggleBooking(e, this.props.updatedBookings)}>
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
   
    <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
           Submit
    </Button>
  </Form>
    </div>
  
   
      
      // <Form onSubmit={(e)=>this.toggleBooking(e, this.props.updatedBookings)} className="add-form">
      //   <br></br>
      // <Form.Group widths='equal'>
      //   <Form.Input type="text" name="name" placeholder=" From Address" onChange={(e)=>this.setState({from_address: e.target.value})}  value={this.props.from_address}/>
        
      //   <Form.Input type="text" name="name" placeholder=" To Address" onChange={(e)=>this.setState({to_address: e.target.value})}   value={this.props.to_address}/>
      //   </Form.Group>
      //   <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
      //       Submit
      //     </Button>
      // </Form>
    
    );
  }
    
}
export default EditBooking;