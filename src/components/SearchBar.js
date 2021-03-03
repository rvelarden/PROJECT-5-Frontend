import React from "react";

const Search = (props) => {
  return (
    <div className="search-bar-div">
      
      <img  className="logo" title="DroneShip" src="https://thumbs.dreamstime.com/t/vector-drone-prohibited-sign-illustration-colorful-flat-design-no-zone-quadcopter-red-background-70448549.jpg"></img>
        <div className="banner">
          <h1>Find Your Drone Category</h1>
          <br></br>
          <div className="banner2">
            <h2>Drones are already delivering critical drugs,
               Whole sale orders, and pizza.
                In the next 20 years,
                they'll change entire cities. Learn how shifting regulations and advances in technology will enable change.</h2>
          </div>
        </div>
      
      <div className="searchBox">
        <input
         type="text"
         placeholder={"Search Category"}
         className="searchInput"
         onChange={(e) => props.searchBar(e.target.value)}
        />
        {/* <button className="searchButton" href="#"></button> */}
        {/* <i className="circular search link icon"></i> */}
      </div>
      
    </div>
  );
};

export default Search;