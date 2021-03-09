import BookingForm from "./BookingForm";
import React, { Component } from 'react';
import { Header, Button, Image, Icon, Card } from 'semantic-ui-react'

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
{/* min-width */}
<Card fluid >
    <Image style={{ width: "400px", height: "260px", objectFit: "cover" }} src={this.props.drone.image} wrapped ui={true} />
    <Card.Content>
      <Card.Header>
      {/* <Header as='h1' color='black' textAlign='center'> */}
            <h2>{this.props.drone.model}</h2>
            <h2 class="ui color4 header">{this.props.drone.category}</h2>
            </Card.Header>
       {/* <br></br> */}
      {/* <Card.Meta fluid> */}
      <Header>
        <div  class="ui segments">
        {/* <div class="ui raised segments"> */}
  <div class="ui segment">
  <h4 class="ui color3 header">Max Capacity: {this.props.drone.max_capacity} Kg.</h4 >
  </div>
  <div class="ui segment">
  <h4 class="ui color3 header">Max Distance: {this.props.drone.max_distance} Km.</h4 >
  </div>
  <div class="ui segment">
  <h4 class="ui color3 header">Location: {this.props.drone.location}</h4 >
  </div>
  <div class="ui segment">
  <h4 class="ui color3 header">Daily Price: ${this.props.drone.price_day}</h4 >
  </div>
  <div class="ui segment">
  <h4 class="ui color3 header">Weekly Price: ${this.props.drone.price_week}</h4 >
  </div>
  <div class="ui segment">
  <h4 class="ui color3 header">Monthly Price: ${this.props.drone.price_month}</h4 >
  </div>
  <div class="ui segment">
  <h4 class="ui color3 header">Yearly Price: ${this.props.drone.price_year}</h4 >
  </div>
  </div>
  </Header>

         
            {/* <h4 class="ui color3 header">Max Capacity: {this.props.drone.max_capacity} Kg.</h4 >
            <h4 >Max Distance: {this.props.drone.max_distance} Km.</h4 >
            <h4 >Location: {this.props.drone.location}</h4 >
            <h4 >Daily Price: ${this.props.drone.price_day}</h4 >
            <h4 >Weekly Price: ${this.props.drone.price_week}</h4 >
            <h4 >Monthly Price: ${this.props.drone.price_month}</h4 >
            <h4 >Yearly Price: ${this.props.drone.price_year}</h4 >
           
            </div>
            </div> */}
      {/* </Card.Meta> */}
     
    </Card.Content>
    <Card.Content extra>
    <Button secondary fluid size='small' color='teal'onClick={this.displayForm} >
            Book Delivery
          </Button>
          {this.state.showForm ? <BookingForm drones={this.props.drones} addNewBooking={this.props.addNewBooking}/> : null}
    </Card.Content>
  </Card >
          {/* <img style={{ width: "400px", height: "300px", objectFit: "cover" }} src={this.props.drone.image} />
         
        <Header as='h1' color='black' textAlign='center'>
            <h1>{this.props.drone.model}</h1>
            <h1>{this.props.drone.category}</h1>
        </Header>
        <Header as='h3' color='black' textAlign='center'>
            <div>Max Capacity: {this.props.drone.max_capacity} Kg.</div>
            <div>Max Distance: {this.props.drone.max_distance} Km.</div>
            <div>Location: {this.props.drone.location}</div>
            <div>Daily Price: ${this.props.drone.price_day}</div>
            <div>Weekly Price: ${this.props.drone.price_week}</div>
            <div>Monthly Price: ${this.props.drone.price_month}</div>
            <div>Yearly Price: ${this.props.drone.price_year}</div>
            </Header>
         
          <br></br>
          
          <Button type="submit" name="submit" value="Submit" fluid size='small' color='teal'onClick={this.displayForm} >
            Book Delivery
          </Button>
          {this.state.showForm ? <BookingForm drones={this.props.drones} addNewBooking={this.props.addNewBooking}/> : null} */}

      </div>
    );
  }

}

export default Drone;