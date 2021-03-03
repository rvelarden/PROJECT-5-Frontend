import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = ({ location: { pathname }, user, updateCurrentUser }) => {
  let logged_in = !!user;
  console.log(logged_in)
  let logout = () => {
    //clear localStorage
    localStorage.removeItem("token")
    //update currentUser back to null
    updateCurrentUser(null)
  }
  return (
    <Menu pointing secondary className='cssmenu'>
      {logged_in ? (
        <Fragment>
          {/* <Menu.Item
            as={NavLink}
            to="/MainContainer"
            name="MainContainer"
            active={pathname === "/MainContainer"}
          /> */}
          <Menu.Menu position="right">
            <Menu.Item className="csslogout" to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
      ) : (
          null
        // <Menu.Item
        //   as={NavLink}
        //   to="/login"
        //   name="Login"
        //   active={pathname === "/login"}
        // />
      )}
    </Menu>
  );
};

export default withRouter(Nav);