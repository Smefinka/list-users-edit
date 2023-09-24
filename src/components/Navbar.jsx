import { NavLink } from "react-router-dom";
function Navbar(){
   
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" >List users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact-add" >Add users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact-edit" >Edit users</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default Navbar;