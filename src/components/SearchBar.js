import React from "react";



const Search = (props) => {
  return (
    
    
    <div className="search-bar-div" >
     
      <br></br>
      <br></br>
      <br></br>
      <img  className="logo" title="DroneShip" src="https://thumbs.dreamstime.com/t/vector-drone-prohibited-sign-illustration-colorful-flat-design-no-zone-quadcopter-red-background-70448549.jpg"></img>
          {/* <br></br>
          <div className="banner2">
            <h2>Drones are already delivering critical drugs,
               Whole sale orders, and pizza.
               In the next 20 years,
              they'll change entire cities. Learn how shifting regulations and advances in technology will enable change.</h2>
          </div> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="bannersingle" >
            <h1>Find Drone Category</h1>
        </div>
      <div className="searchBox" >
        <input
         type="text"
         placeholder={"Search Category by Industrial, Small Business or Personal"}
         className="searchInput"
         onChange={(e) => props.searchBar(e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default Search;